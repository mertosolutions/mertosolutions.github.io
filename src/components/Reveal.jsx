import { motion } from 'framer-motion';

export default function Reveal({ children, delay = 0, className = '', ...rest }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function Head({ kicker, children, sub }) {
  return (
    <Reveal className="head">
      <p className="kicker">// {kicker}</p>
      <h2>{children}</h2>
      {sub && <p className="sub">{sub}</p>}
    </Reveal>
  );
}
