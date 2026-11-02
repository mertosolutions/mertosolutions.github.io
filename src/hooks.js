import { useEffect, useRef, useState } from 'react';

export function useInView(threshold = 0.3) {
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setSeen(true); io.disconnect(); }
    }, { threshold });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, seen];
}

export function useTyped(words) {
  const [text, setText] = useState('');
  useEffect(() => {
    let wi = 0, ci = 0, del = false, id;
    const tick = () => {
      const w = words[wi];
      ci += del ? -1 : 1;
      setText(w.slice(0, ci));
      let wait = del ? 35 : 75;
      if (!del && ci === w.length) { del = true; wait = 1400; }
      else if (del && ci === 0) { del = false; wi = (wi + 1) % words.length; wait = 300; }
      id = setTimeout(tick, wait);
    };
    tick();
    return () => clearTimeout(id);
  }, [words]);
  return text;
}
