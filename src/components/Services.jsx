import { forwardRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal, { Head } from './Reveal.jsx';
import { FILTERS, SERVICES } from '../data.js';

const Card = forwardRef(function Card({ s }, ref) {
  const tilt = (e) => {
    const el = e.currentTarget, r = el.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
    el.style.setProperty('--mx', x + 'px'); el.style.setProperty('--my', y + 'px');
    el.style.transform = `perspective(800px) rotateY(${(x / r.width - 0.5) * 10}deg) rotateX(${-(y / r.height - 0.5) * 10}deg) translateY(-4px)`;
  };
  return (
    <motion.div ref={ref} layout initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.85 }} transition={{ duration: 0.35 }}>
      <article className="card" onMouseMove={tilt} onMouseLeave={(e) => (e.currentTarget.style.transform = '')}>
        <div className="ico">{s.icon}</div>
        <h3>{s.title}</h3>
        <p>{s.text}</p>
        <ul>{s.tags.map((t) => <li key={t}>{t}</li>)}</ul>
      </article>
    </motion.div>
  );
});

export default function Services() {
  const [f, setF] = useState('all');
  const list = SERVICES.filter((s) => f === 'all' || s.cat === f);
  return (
    <section className="section" id="services">
      <Head kicker="what we do">Everything from raw data to a <span className="grad">finished product</span></Head>
      <Reveal className="filters">
        {FILTERS.map((x) => (
          <button key={x.id} className={`chip ${f === x.id ? 'active' : ''}`} onClick={() => setF(x.id)}>{x.label}</button>
        ))}
      </Reveal>
      <motion.div layout className="grid">
        <AnimatePresence mode="popLayout">
          {list.map((s) => <Card key={s.title} s={s} />)}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
