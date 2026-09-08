"use client";

import { memo, useEffect, useId, useRef } from "react";

const TWO_PI = Math.PI * 2;

type Dot = {
  ax: number;
  ay: number;
  sx: number;
  sy: number;
  vx: number;
  vy: number;
  x: number;
  y: number;
};

type DotFieldProps = {
  dotRadius?: number;
  dotSpacing?: number;
  cursorRadius?: number;
  cursorForce?: number;
  bulgeOnly?: boolean;
  bulgeStrength?: number;
  glowRadius?: number;
  sparkle?: boolean;
  waveAmplitude?: number;
  gradientFrom?: string;
  gradientTo?: string;
  glowColor?: string;
  className?: string;
};

const DotField = memo(function DotField({
  dotRadius = 1.5,
  dotSpacing = 11,
  cursorRadius = 150,
  cursorForce = 0.09,
  bulgeOnly = false,
  bulgeStrength = 18,
  glowRadius = 80,
  sparkle = true,
  waveAmplitude = 0,
  gradientFrom = "#292a2b",
  gradientTo = "#333435",
  glowColor = "#10B981",
  className = "",
}: DotFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<SVGCircleElement>(null);
  const dotsRef = useRef<Dot[]>([]);
  const mouseRef = useRef({ x: -9999, y: -9999, clientX: -9999, clientY: -9999, prevX: -9999, prevY: -9999, speed: 0 });
  const rafRef = useRef<number | null>(null);
  const glowOpacity = useRef(0);
  const engagement = useRef(0);
  const propsRef = useRef({ dotRadius, dotSpacing, cursorRadius, cursorForce, bulgeOnly, bulgeStrength, sparkle, waveAmplitude, gradientFrom, gradientTo });
  propsRef.current = { dotRadius, dotSpacing, cursorRadius, cursorForce, bulgeOnly, bulgeStrength, sparkle, waveAmplitude, gradientFrom, gradientTo };
  const glowId = `dot-field-glow-${useId().replace(/:/g, "")}`;

  useEffect(() => {
    const canvas = canvasRef.current;
    const glow = glowRef.current;
    const parent = canvas?.parentElement;
    const ctx = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !parent || !ctx) return;

    let resizeTimer: ReturnType<typeof setTimeout> | undefined;
    let width = 0;
    let height = 0;
    let bounds = { left: 0, top: 0 };
    let previousScrollY = window.scrollY;

    const buildDots = (nextWidth: number, nextHeight: number) => {
      const { dotRadius: radius, dotSpacing: spacing } = propsRef.current;
      const step = radius + spacing;
      const cols = Math.floor(nextWidth / step);
      const rows = Math.floor(nextHeight / step);
      const padX = (nextWidth % step) / 2;
      const padY = (nextHeight % step) / 2;
      const dots: Dot[] = [];
      for (let row = 0; row < rows; row += 1) {
        for (let col = 0; col < cols; col += 1) {
          const ax = padX + col * step + step / 2;
          const ay = padY + row * step + step / 2;
          dots.push({ ax, ay, sx: ax, sy: ay, vx: 0, vy: 0, x: ax, y: ay });
        }
      }
      dotsRef.current = dots;
    };

    const updateBounds = () => {
      const rect = parent.getBoundingClientRect();
      bounds = { left: rect.left, top: rect.top };
      const mouse = mouseRef.current;
      if (mouse.clientX > -9999) {
        mouse.x = mouse.clientX - bounds.left;
        mouse.y = mouse.clientY - bounds.top;
      }
    };

    const resizeNow = () => {
      const rect = parent.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      updateBounds();
      buildDots(width, height);
    };

    const resize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resizeNow, 100);
    };
    const onMouseMove = (event: MouseEvent) => {
      const mouse = mouseRef.current;
      mouse.clientX = event.clientX;
      mouse.clientY = event.clientY;
      mouse.x = event.clientX - bounds.left;
      mouse.y = event.clientY - bounds.top;
    };
    const onScroll = () => {
      updateBounds();
      const scrollDelta = Math.abs(window.scrollY - previousScrollY);
      mouseRef.current.speed = Math.max(mouseRef.current.speed, scrollDelta * 0.5);
      previousScrollY = window.scrollY;
    };
    const updateMouseSpeed = () => {
      const mouse = mouseRef.current;
      const dx = mouse.prevX - mouse.x;
      const dy = mouse.prevY - mouse.y;
      mouse.speed += (Math.sqrt(dx * dx + dy * dy) - mouse.speed) * 0.5;
      if (mouse.speed < 0.001) mouse.speed = 0;
      mouse.prevX = mouse.x;
      mouse.prevY = mouse.y;
    };

    const speedInterval = setInterval(updateMouseSpeed, 20);
    let frame = 0;
    const tick = () => {
      frame += 1;
      const dots = dotsRef.current;
      const mouse = mouseRef.current;
      const props = propsRef.current;
      const engagementTarget = Math.min(mouse.speed / 5, 1);
      engagement.current += (engagementTarget - engagement.current) * 0.06;
      const active = engagement.current;
      glowOpacity.current += (active - glowOpacity.current) * 0.08;

      if (glow) {
        glow.setAttribute("cx", String(mouse.x));
        glow.setAttribute("cy", String(mouse.y));
        glow.style.opacity = String(glowOpacity.current);
      }

      ctx.clearRect(0, 0, width, height);
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, props.gradientFrom);
      gradient.addColorStop(1, props.gradientTo);
      ctx.fillStyle = gradient;
      const radius = props.dotRadius / 2;
      const cursorRadiusSquared = props.cursorRadius * props.cursorRadius;
      const time = frame * 0.02;
      ctx.beginPath();

      dots.forEach((dot, index) => {
        const dx = mouse.x - dot.ax;
        const dy = mouse.y - dot.ay;
        const distanceSquared = dx * dx + dy * dy;
        if (distanceSquared < cursorRadiusSquared && active > 0.01) {
          const distance = Math.sqrt(distanceSquared);
          const angle = Math.atan2(dy, dx);
          if (props.bulgeOnly) {
            const push = (1 - distance / props.cursorRadius) ** 2 * props.bulgeStrength * active;
            dot.sx += (dot.ax - Math.cos(angle) * push - dot.sx) * 0.15;
            dot.sy += (dot.ay - Math.sin(angle) * push - dot.sy) * 0.15;
          } else {
            const move = (500 / Math.max(distance, 1)) * (mouse.speed * props.cursorForce);
            dot.vx -= Math.cos(angle) * move;
            dot.vy -= Math.sin(angle) * move;
          }
        } else if (props.bulgeOnly) {
          dot.sx += (dot.ax - dot.sx) * 0.1;
          dot.sy += (dot.ay - dot.sy) * 0.1;
        }

        if (!props.bulgeOnly) {
          dot.vx *= 0.9;
          dot.vy *= 0.9;
          dot.x = dot.ax + dot.vx;
          dot.y = dot.ay + dot.vy;
          dot.sx += (dot.x - dot.sx) * 0.1;
          dot.sy += (dot.y - dot.sy) * 0.1;
        }

        let drawX = dot.sx;
        let drawY = dot.sy;
        if (props.waveAmplitude > 0) {
          drawY += Math.sin(dot.ax * 0.03 + time) * props.waveAmplitude;
          drawX += Math.cos(dot.ay * 0.03 + time * 0.7) * props.waveAmplitude * 0.5;
        }
        const sparkleSize = props.sparkle && (((index * 2654435761) ^ (frame >> 3)) >>> 0) % 100 < 3 ? 1.8 : 1;
        ctx.moveTo(drawX + radius * sparkleSize, drawY);
        ctx.arc(drawX, drawY, radius * sparkleSize, 0, TWO_PI);
      });
      ctx.fill();
      rafRef.current = requestAnimationFrame(tick);
    };

    resizeNow();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    const layoutObserver = new ResizeObserver(resizeNow);
    layoutObserver.observe(parent);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      clearInterval(speedInterval);
      if (resizeTimer) clearTimeout(resizeTimer);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
      layoutObserver.disconnect();
    };
  }, []);

  return (
    <div className={`relative h-full w-full ${className}`.trim()}>
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <radialGradient id={glowId}>
            <stop offset="0%" stopColor={glowColor} />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
        </defs>
        <circle ref={glowRef} cx="-9999" cy="-9999" r={glowRadius} fill={`url(#${glowId})`} style={{ opacity: 0 }} />
      </svg>
    </div>
  );
});

DotField.displayName = "DotField";

export default DotField;
