import { useRef } from 'react';

export default function Magnetic({ as: Tag = 'a', className = '', children, ...rest }) {
  const ref = useRef(null);
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.25}px,${(e.clientY - r.top - r.height / 2) * 0.35}px)`;
  };
  return (
    <Tag ref={ref} className={className} onMouseMove={move} onMouseLeave={() => (ref.current.style.transform = '')} {...rest}>
      {children}
    </Tag>
  );
}
