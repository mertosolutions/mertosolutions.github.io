import { useEffect, useRef, useState } from 'react';
import Car from './Car.jsx';

// Nav bar, scroll-driven racing car on a road, and custom cursor.
export default function Chrome() {
  const [solid, setSolid] = useState(false);
  const bar = useRef(null);
  const carEl = useRef(null);
  const ring = useRef(null);
  const dot = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight);
      bar.current.style.width = p * 100 + '%';
      carEl.current.style.transform = `translateX(${p * (innerWidth - 96)}px)`;
      carEl.current.classList.add('moving');
      clearTimeout(stop);
      stop = setTimeout(() => carEl.current.classList.remove('moving'), 160);
      setSolid(scrollY > 40);
    };
    let mx = 0, my = 0, cx = 0, cy = 0, raf, stop;
    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      dot.current.style.left = mx + 'px'; dot.current.style.top = my + 'px';
      ring.current.style.opacity = dot.current.style.opacity = 1;
      ring.current.classList.toggle('hover', !!e.target.closest('a,button,.card,.node,.tag'));
    };
    const loop = () => {
      cx += (mx - cx) * 0.15; cy += (my - cy) * 0.15;
      ring.current.style.left = cx + 'px'; ring.current.style.top = cy + 'px';
      raf = requestAnimationFrame(loop);
    };
    loop();
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('mousemove', onMove);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(stop);
      removeEventListener('scroll', onScroll);
      removeEventListener('mousemove', onMove);
    };
  }, []);

  return (
    <>
      <div className="road"><div className="trail" ref={bar} /><div className="road-car" ref={carEl}><Car /></div></div>
      <div className="cursor" ref={ring} />
      <div className="cursor-dot" ref={dot} />
      <header className={`nav ${solid ? 'solid' : ''}`}>
        <a href="#top" className="logo"><span className="logo-mark">M</span>Merto<span className="dim">Solutions</span></a>
        <nav>
          <a href="#services">Services</a>
          <a href="#pipeline">Pipeline</a>
          <a href="#stack">Stack</a>
          <a href="#process">Process</a>
          <a href="#contact" className="btn btn-sm">Let's talk</a>
        </nav>
      </header>
    </>
  );
}
