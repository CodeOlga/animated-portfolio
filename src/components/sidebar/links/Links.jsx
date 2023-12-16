import { motion } from 'framer-motion';
import './links.scss';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  }
}

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  }
}

const Links = () => {

  const items = [
    'Homepage',
    'Services',
    'Portfolio',
    'Contact',
    'About',
  ]

  return (
    <motion.div className='links' variants={variants}>
      {items.map(item => (
        <motion.a
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;


// import { motion } from 'framer-motion';
// import { Link as ScrollLink } from 'react-scroll';

// const variants = {
//   open: {
//     transition: {
//       staggerChildren: 0.1,
//     },
//   },
//   closed: {
//     transition: {
//       staggerChildren: 0.05,
//       staggerDirection: -1,
//     },
//   }
// }

// const itemVariants = {
//   open: {
//     y: 0,
//     opacity: 1,
//   },
//   closed: {
//     y: 50,
//     opacity: 0,
//   }
// }

// const Links = () => {

//   const items = [
//     'Homepage',
//     'Services',
//     'Portfolio',
//     'Contact',
//     'About',
//   ]

//   return (
//     <motion.div className='links' variants={variants}>
//       {items.map(item => (
//         <motion.div
//           href={`#${item}`}
//           key={item}
//           variants={itemVariants}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <ScrollLink
//             to={item}
//             smooth={true}
//             duration={500}
//             spy={true}
//             exact='true'
//             offset={-70} // Подстроить под вашу верхнюю панель навигации
//           >
//             {item}
//           </ScrollLink>
//         </motion.div>
//       ))}
//     </motion.div>
//   );
// };

// export default Links;




