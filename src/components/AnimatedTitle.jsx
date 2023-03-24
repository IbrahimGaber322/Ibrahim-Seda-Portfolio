import React from "react";
import Typed from 'typed.js';

function AnimatedTitle(){
     // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I'm Ibrahim Gaber.",
       "I'm an Engineer.",
       "I'm a web-developer."
    ],
      typeSpeed: 100,
      smartBackspace: true,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      loopCount: Infinity,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div style={{ height: "100px" }}>
      <span ref={el} />
    </div>
  );
}

export default AnimatedTitle;