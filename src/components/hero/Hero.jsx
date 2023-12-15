// import { motion } from 'framer-motion';
// import './hero.scss';

// const textVariants = {
//   initial: {
//     x: -500,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
//   scrollButton: {
//     opacity: 0,
//     y: 10,
//     transition: {
//       duration: 2,
//       repeat: Infinity,
//     },
//   },
// };

// const sliderVariants = {
//   initial: {
//     x: 0,
//   },
//   animate: {
//     x: '-220%',
//     transition: {
//       repeat: Infinity,
//       repeatType: 'mirror',
//       duration: 20,
//     },
//   },
// };

// const Hero = () => {
//   return (
//     <div className='hero'>
//       <div className="wrapper">
//         <motion.div
//           className="textContainer"
//           variants={textVariants}
//           initial='initial'
//           animate='animate'
//         >
//           <motion.h2 variants={textVariants}>Olga K</motion.h2>
//           <motion.h1 variants={textVariants}>Web developer</motion.h1>
//           <motion.div variants={textVariants} className="buttons">
//             <a href="#Portfolio">
//               <motion.button variants={textVariants}>See the Latest Works</motion.button>
//             </a>
//             <a href="#Contact">
//               <motion.button variants={textVariants}>Contact Me</motion.button>
//             </a>
//           </motion.div>
//           <motion.img variants={textVariants} animate='scrollButton' src='/scroll.png' alt='Scroll' />
//         </motion.div>
//       </div>
//       <motion.div
//         className="slidingTextContainer"
//         variants={sliderVariants}
//         initial='initial'
//         animate='animate'
//       >
//         Writer Content Creator Influencer
//       </motion.div>
//       <div className="imageContainer">
//         <img src='/woman.png' alt='Woman image' width='500px' />
//       </div>
//     </div>
//   );
// };

// export default Hero;



// import { Link as ScrollLink } from 'react-scroll';
// import { motion } from 'framer-motion';
// import './hero.scss';

// const textVariants = {
//   initial: {
//     x: -500,
//     opacity: 0,
//   },
//   animate: {
//     x: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
//   scrollButton: {
//     opacity: 0,
//     y: 10,
//     transition: {
//       duration: 2,
//       repeat: Infinity,
//     },
//   },
// };

// const sliderVariants = {
//   initial: {
//     x: 0,
//   },
//   animate: {
//     x: '-220%',
//     transition: {
//       repeat: Infinity,
//       repeatType: 'mirror',
//       duration: 20,
//     },
//   },
// };

// const Hero = () => {
//   return (
//     <div className='hero'>
//       <div className="wrapper">
//         <motion.div
//           className="textContainer"
//           variants={textVariants}
//           initial='initial'
//           animate='animate'
//         >
//           <motion.h2 variants={textVariants}>Olga K</motion.h2>
//           <motion.h1 variants={textVariants}>Web developer</motion.h1>
//           <motion.div variants={textVariants} className="buttons">
//             <ScrollLink to="Portfolio" smooth={true} duration={500}>
//               <motion.button variants={textVariants}>See the Latest Works</motion.button>
//             </ScrollLink>
//             <ScrollLink to="Contact" smooth={true} duration={500}>
//               <motion.button variants={textVariants}>Contact Me</motion.button>
//             </ScrollLink>
//           </motion.div>
//           <motion.img variants={textVariants} animate='scrollButton' src='/scroll.png' alt='Scroll' />
//         </motion.div>
//       </div>
//       <motion.div
//         className="slidingTextContainer"
//         variants={sliderVariants}
//         initial='initial'
//         animate='animate'
//       >
//         Writer Content Creator Influencer
//       </motion.div>
//       <div className="imageContainer">
//         <img src='/woman.png' alt='Woman image' width='500px' />
//       </div>
//     </div>
//   );
// };

// export default Hero;


import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';
import './hero.scss';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20,
    },
  },
};

const isMobile = () => {
  const userAgent = typeof window.navigator === 'undefined' ? '' : navigator.userAgent;
  return /Mobi|Android/i.test(userAgent);
};

const scrollToSection = (sectionId) => {
  if (isMobile()) {
    ScrollLink.scrollTo(sectionId, {
      smooth: true,
      duration: 500,
    });
  } else {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

const Hero = () => {
  return (
    <div className='hero'>
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial='initial'
          animate='animate'
        >
          <motion.h2 variants={textVariants}>Olga K</motion.h2>
          <motion.h1 variants={textVariants}>Web developer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button
              variants={textVariants}
              onClick={() => scrollToSection('Portfolio')}
            >
              See the Latest Works
            </motion.button>
            <motion.button
              variants={textVariants}
              onClick={() => scrollToSection('Contact')}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate='scrollButton' src='/scroll.png' alt='Scroll' />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial='initial'
        animate='animate'
      >
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src='/woman.png' alt='Woman image' width='500px' />
      </div>
    </div>
  );
};

export default Hero;
