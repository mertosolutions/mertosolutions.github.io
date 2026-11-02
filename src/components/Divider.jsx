import { motion } from 'framer-motion';
import Car from './Car.jsx';

// Checkered strip; a car races across it when it scrolls into view.
export default function Divider() {
  return (
    <div className="divider" aria-hidden="true">
      <div className="checker" />
      <motion.div
        className="racer"
        initial={{ x: '-15vw' }}
        whileInView={{ x: '105vw' }}
        viewport={{ once: true, amount: 0.9 }}
        transition={{ duration: 1.9, ease: [0.55, 0, 0.25, 1] }}
      >
        <i className="speed" />
        <Car className="moving" />
      </motion.div>
    </div>
  );
}
