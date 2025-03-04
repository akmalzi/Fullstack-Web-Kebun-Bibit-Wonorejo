import { useInView } from "react-intersection-observer";

function FadeIn({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.2, 
  });

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-[2000ms] ease-[cubic-bezier(0.25, 1, 0.5, 1)] ${
        inView ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </div>
  );
}

export default FadeIn;