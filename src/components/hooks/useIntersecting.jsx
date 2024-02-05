import { useState } from "react";
import { useEffect } from "react";

function useIntersecting() {
  const [isIntersectingState, setIsIntersectingState] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsIntersectingState(true);
      } else {
        setIsIntersectingState(false);
      }
    });
  }, []);
  return { isIntersectingState };
}

export default useIntersecting;
