import Reveal, { Head } from './Reveal.jsx';
import { STEPS } from '../data.js';

export default function Process() {
  return (
    <section className="section dark" id="process">
      <Head kicker="how we work">From idea to <span className="grad">shipped</span> in four moves</Head>
      <div className="steps">
        {STEPS.map((s, i) => (
          <Reveal key={s.n} className="step" delay={i * 0.1}>
            <b>{s.n}</b><h3>{s.title}</h3><p>{s.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
