import Reveal, { Head } from './Reveal.jsx';
import { ORBIT, STACK } from '../data.js';

export default function Stack() {
  return (
    <section className="section" id="stack">
      <Head kicker="our toolbox" sub="Hover the orbit — or pick a group.">Tools we <span className="grad">work with</span></Head>
      <div className="stack-wrap">
        <Reveal className="orbit">
          <div className="core">MERTO</div>
          <div className="ring r1" /><div className="ring r2" /><div className="ring r3" />
          {ORBIT.flatMap(([names, r, d]) =>
            names.map((n, k) => {
              const delay = `${-(d * k) / names.length}s`;
              return (
                <div className="sat" key={n} style={{ '--d': `${d}s`, animationDelay: delay }}>
                  <span style={{ left: `${(r / 460) * 100}cqw`, top: 0, animationDelay: delay }}>{n}</span>
                </div>
              );
            })
          )}
        </Reveal>
        <Reveal className="tags" delay={0.1}>
          {Object.entries(STACK).map(([g, ts]) => (
            <div key={g}>
              <h4>{g}</h4>
              <div className="row">{ts.map((t) => <span className="tag" key={t}>{t}</span>)}</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
