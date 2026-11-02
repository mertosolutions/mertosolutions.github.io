import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import NeuralCanvas from './NeuralCanvas.jsx';
import Magnetic from './Magnetic.jsx';
import { useInView, useTyped } from '../hooks.js';
import { STATS, TYPED } from '../data.js';

function Counter({ to, suffix = '' }) {
  const [ref, seen] = useInView(0.6);
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!seen) return;
    const t0 = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min((t - t0) / 1400, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [seen, to]);
  return <b ref={ref}>{n}{suffix}</b>;
}

const rise = (i) => ({ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.15 * i, duration: 0.7 } });

export default function Hero() {
  const typed = useTyped(TYPED);
  return (
    <>
      <section className="hero" id="top">
        <NeuralCanvas />
        <div className="hero-inner">
          <motion.p className="eyebrow" {...rise(0)}><span className="pulse" /> Team-backed · Available for new projects</motion.p>
          <motion.h1 {...rise(1)}>We build <span className="grad">{typed}</span><span className="caret">|</span></motion.h1>
          <motion.p className="lead" {...rise(2)}>
            Merto Solutions turns messy data and manual work into intelligent systems — from RAG and agentic workflows to cloud pipelines, polished React apps and brand design.
          </motion.p>
          <motion.div className="cta" {...rise(3)}>
            <Magnetic href="#contact" className="btn">Start a project →</Magnetic>
            <Magnetic href="#services" className="btn ghost">Explore services</Magnetic>
          </motion.div>
          <motion.div className="stats" {...rise(4)}>
            {STATS.map((s) => (
              <div key={s.label}><Counter to={s.to} suffix={s.suffix} /><span>{s.label}</span></div>
            ))}
          </motion.div>
        </div>
        <div className="scroll-hint">scroll<span /></div>
      </section>
      <div className="marquee" aria-hidden="true">
        <div className="track">
          {[0, 1].flatMap((k) => ['AI AUTOMATION', 'DATA ENGINEERING', 'AGENTIC AI', 'RAG', 'MACHINE LEARNING', 'FIGMA', 'REACT', 'GCP', 'AZURE'].flatMap((w) => [<span key={`${k}${w}`}>{w}</span>, <span key={`${k}${w}s`}>★</span>]))}
        </div>
      </div>
    </>
  );
}
