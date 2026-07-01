'use client';
import { useEffect, useRef } from 'react';
import styles from './HeroBackground.module.css';

type Particle = {
  x: number;
  y: number;
  speed: number;
  opacity: number;
  fadeDelay: number;
  fadeStart: number;
  fadingOut: boolean;
};

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setSize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    setSize();

    let particles: Particle[] = [];
    let raf = 0;

    const count = () => Math.floor((canvas.width * canvas.height) / 7000);

    const make = (): Particle => {
      const fadeDelay = Math.random() * 600 + 100;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() / 5 + 0.1,
        opacity: 0.45,
        fadeDelay,
        fadeStart: Date.now() + fadeDelay,
        fadingOut: false,
      };
    };

    const reset = (p: Particle) => {
      p.x = Math.random() * canvas.width;
      p.y = Math.random() * canvas.height;
      p.speed = Math.random() / 5 + 0.1;
      p.opacity = 0.45;
      p.fadeDelay = Math.random() * 600 + 100;
      p.fadeStart = Date.now() + p.fadeDelay;
      p.fadingOut = false;
    };

    const init = () => {
      particles = [];
      for (let i = 0; i < count(); i++) particles.push(make());
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.y -= p.speed;
        if (p.y < 0) reset(p);
        if (!p.fadingOut && Date.now() > p.fadeStart) p.fadingOut = true;
        if (p.fadingOut) {
          p.opacity -= 0.008;
          if (p.opacity <= 0) reset(p);
        }
        ctx.fillStyle = `rgba(237, 230, 218, ${p.opacity})`;
        ctx.fillRect(p.x, p.y, 0.6, Math.random() * 2 + 1);
      });
      raf = requestAnimationFrame(draw);
    };

    const onResize = () => {
      setSize();
      init();
    };
    window.addEventListener('resize', onResize);
    init();
    raf = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          display: 'block',
        }}
      />
      {/* horizontal lines — 20% / 50% / 80% */}
      <div className={styles.hline} style={{ top: '20%', animationDelay: '150ms' }} />
      <div className={styles.hline} style={{ top: '50%', animationDelay: '280ms' }} />
      <div className={styles.hline} style={{ top: '80%', animationDelay: '410ms' }} />
      {/* vertical lines — 20% / 50% / 80% */}
      <div className={styles.vline} style={{ left: '20%', animationDelay: '520ms' }} />
      <div className={styles.vline} style={{ left: '50%', animationDelay: '640ms' }} />
      <div className={styles.vline} style={{ left: '80%', animationDelay: '760ms' }} />
    </div>
  );
}
