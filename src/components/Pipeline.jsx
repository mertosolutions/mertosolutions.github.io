import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Reveal, { Head } from './Reveal.jsx';
import Car from './Car.jsx';
import { STAGES } from '../data.js';

export default function Pipeline() {
  const [i, setI] = useState(0);
  const [auto, setAuto] = useState(true);
  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => setI((x) => (x + 1) % STAGES.length), 4500);
    return () => clearInterval(id);
  }, [auto]);
  const s = STAGES[i];

  return (
    <section className="section dark" id="pipeline">
      <Head kicker="how it flows" sub="Click a stage to see what we build there. Data packets flow through the whole system.">
        An intelligent pipeline, <span className="grad">live</span>
      </Head>
      <Reveal className="pipe">
        <svg viewBox="0 0 1000 120" preserveAspectRatio="none" className="wire">
          <path id="wirePath" d="M40 60 H960" />
          {[0, 1.6, 3.2].map((b) => (
            <circle key={b} className="packet" r="6">
              <animateMotion dur="5s" begin={`${b}s`} repeatCount="indefinite"><mpath href="#wirePath" /></animateMotion>
            </circle>
          ))}
        </svg>
        <div className="pipe-car"><Car className="moving" /></div>
        {STAGES.map((st, k) => (
          <button key={st.title} className={`node ${k === i ? 'active' : ''}`} onClick={() => { setI(k); setAuto(false); }}>
            <span>0{k + 1}</span>{st.title}
          </button>
        ))}
      </Reveal>
      <div className="pipe-detail">
        <AnimatePresence mode="wait">
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <div className="pills">{s.pills.map((p) => <i key={p}>{p}</i>)}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
