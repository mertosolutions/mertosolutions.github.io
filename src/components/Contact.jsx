import { useState } from 'react';
import Reveal, { Head } from './Reveal.jsx';
import Magnetic from './Magnetic.jsx';
import { CONTACT_EMAIL, LINKS } from '../data.js';

const CARDS = [
  { k: 'linkedin', mark: 'in', name: 'LinkedIn', sub: 'Connect & see our background' },
  { k: 'fiverr', mark: 'Fi', name: 'Fiverr', sub: 'Order a gig on merto_speaks' },
  { k: 'freelancer', mark: 'Fr', name: 'Freelancer', sub: 'Hire us for your project' },
];

export default function Contact() {
  const [note, setNote] = useState('');
  const submit = (e) => {
    e.preventDefault();
    const f = new FormData(e.target);
    location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Project enquiry from ' + f.get('name'))}&body=${encodeURIComponent(`${f.get('msg')}\n\n${f.get('name')} <${f.get('email')}>`)}`;
    setNote('Opening your mail app — thank you!');
    e.target.reset();
  };
  return (
    <section className="section contact" id="contact">
      <Head kicker="say hello" sub="Tell us the problem — we'll tell you how a team of specialists can solve it.">
        Have something to <span className="grad">automate</span>?
      </Head>
      <Reveal className="links">
        {CARDS.map((c) => (
          <Magnetic key={c.k} className="link-card" href={LINKS[c.k]} target="_blank" rel="noopener noreferrer">
            <span>{c.mark}</span><div><b>{c.name}</b><small>{c.sub}</small></div>
          </Magnetic>
        ))}
      </Reveal>
      <Reveal>
        <form className="form" onSubmit={submit}>
          <input name="name" placeholder="Your name" required />
          <input name="email" type="email" placeholder="Email" required />
          <textarea name="msg" rows="4" placeholder="What are you building?" required />
          <Magnetic as="button" className="btn" type="submit">Send message →</Magnetic>
          <p className="note">{note}</p>
        </form>
      </Reveal>
    </section>
  );
}
