import { useInView } from "react-intersection-observer";

function SlideInLeft({ children }){
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, 
  });

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-[-50px]"
      }`}
    >
      {children}
    </div>
  );
};

export default SlideInLeft
