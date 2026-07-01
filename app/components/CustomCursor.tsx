'use client';

import { useEffect, useRef } from 'react';

const BALL_SIZE = 14;
const LERP_FACTOR = 0.16;
const AMBER = '#FF7A1A';

export default function CustomCursor() {
  const ballRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const ball = ballRef.current;
    if (!ball) return;


    const lerp = prefersReduced ? 1 : LERP_FACTOR;
    const r = BALL_SIZE / 2;

    let mouseX = -200;
    let mouseY = -200;
    let ballX = -200;
    let ballY = -200;
    let rafId: number;

    function onMouseMove(e: MouseEvent) {
      mouseX = e.clientX;
      mouseY = e.clientY;
    }

    function tick() {
      ballX += (mouseX - ballX) * lerp;
      ballY += (mouseY - ballY) * lerp;
      ball!.style.transform = `translate(${ballX - r}px, ${ballY - r}px)`;
      rafId = requestAnimationFrame(tick);
    }

    window.addEventListener('mousemove', onMouseMove);
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);

    };
  }, []);

  return (
    <div
      ref={ballRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: BALL_SIZE,
        height: BALL_SIZE,
        borderRadius: '50%',
        backgroundColor: AMBER,
        pointerEvents: 'none',
        zIndex: 9999,
        willChange: 'transform',
      }}
    />
  );
}
