import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Race-start lights, then the curtain lifts.
export default function Intro() {
  const [lit, setLit] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const ids = [1, 2, 3, 4, 5].map((n) => setTimeout(() => setLit(n), n * 260));
    ids.push(setTimeout(() => setLit(6), 1700));
    ids.push(setTimeout(() => setDone(true), 2150));
    return () => ids.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div className="intro" exit={{ y: '-100%' }} transition={{ duration: 0.7, ease: [0.7, 0, 0.2, 1] }}>
          <div className="lights">
            {[1, 2, 3, 4, 5].map((n) => (
              <i key={n} className={lit >= 6 ? 'go' : lit >= n ? 'on' : ''} />
            ))}
          </div>
          <p>{lit >= 6 ? 'GO!' : 'Merto Solutions'}</p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
