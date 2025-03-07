import { motion } from 'framer-motion';
import './toggleButton.scss';

const ToggleButton = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen(prev => !prev)}>
      <svg className='toggleSvg' viewBox='0 0 23 23'>
        <motion.path
          strokeWidth='3'
          stroke='black'
          strokeLinecap='round'
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: { d: 'M 3 16.5 L 17 2.5' }
          }}
        // initial="closed"
        />
        <motion.path
          strokeWidth='3'
          stroke='black'
          strokeLinecap='round'
          d='M 2 9.423 L 20 9.423'
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 }
          }}
        // initial="closed"
        />
        <motion.path
          strokeWidth='3'
          stroke='black'
          strokeLinecap='round'
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: { d: 'M 3 2.5 L 17 16.346' }
          }}
        // initial="closed"
        />
      </svg>
    </button>
  );
};

export default ToggleButton;



// ===========спроба закривати сайдбар по кліку на екрані
// import { useEffect, useRef } from 'react';
// import { motion } from 'framer-motion';

// const ToggleButton = ({ setOpen }) => {
//   const sidebarRef = useRef();

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);

//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [setOpen]);

//   return (
//     <div ref={sidebarRef}>
//       <button onClick={() => setOpen((prev) => !prev)}>
//         <svg width='23' height='23' viewBox='0 0 23 23'>
//           <motion.path
//             strokeWidth='3'
//             stroke='black'
//             strokeLinecap='round'
//             variants={{
//               closed: { d: 'M 2 2.5 L 20 2.5' },
//               open: { d: 'M 3 16.5 L 17 2.5' },
//             }}
//           />
//           <motion.path
//             strokeWidth='3'
//             stroke='black'
//             strokeLinecap='round'
//             d='M 2 9.423 L 20 9.423'
//             variants={{
//               closed: { opacity: 1 },
//               open: { opacity: 0 },
//             }}
//           />
//           <motion.path
//             strokeWidth='3'
//             stroke='black'
//             strokeLinecap='round'
//             variants={{
//               closed: { d: 'M 2 16.346 L 20 16.346' },
//               open: { d: 'M 3 2.5 L 17 16.346' },
//             }}
//           />
//         </svg>
//       </button>
//     </div>
//   );
// };

// export default ToggleButton;



// import { motion } from 'framer-motion';
// import './toggleButton.scss';

// const ToggleButton = ({ setOpen }) => {
//   return (
//     <button onClick={() => setOpen(prev => !prev)}>
//       <svg className='toggleSvg' viewBox='0 0 23 23'>
//         <motion.path
//           strokeWidth='3'
//           stroke='black'
//           strokeLinecap='round'
//           d='M 2 2.5 L 20 2.5'
//           animate={{
//             d: setOpen ? 'M 2 2.5 L 20 2.5' : 'M 3 16.5 L 17 2.5',
//           }}
//         />
//         <motion.path
//           strokeWidth='3'
//           stroke='black'
//           strokeLinecap='round'
//           d='M 2 9.423 L 20 9.423'
//           animate={{
//             opacity: setOpen ? 1 : 0,
//           }}
//         />
//         <motion.path
//           strokeWidth='3'
//           stroke='black'
//           strokeLinecap='round'
//           d='M 2 16.346 L 20 16.346'
//           animate={{
//             d: setOpen ? 'M 2 16.346 L 20 16.346' : 'M 3 2.5 L 17 16.346',
//           }}
//         />
//       </svg>
//     </button>
//   );
// };

// export default ToggleButton;
