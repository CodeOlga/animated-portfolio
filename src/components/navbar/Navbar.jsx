import { motion } from 'framer-motion'
import './navbar.scss'
import Sidebar from '../sidebar/Sidebar'

import { FacebookIcon, GithubIcon, LinkedinIcon, TwitterIcon } from '../../icons/Icons';

const Navbar = () => {
  return (
    <div className='navbar'>
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >Olga K</motion.span>
        <div className="social-list">
          <a
            className='icon-link'
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer">
            <TwitterIcon />
          </a>
          {/* <a
            className='icon-link'
            href="https://instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer">
            <InstagramIcon />
          </a> */}
          <a
            className='icon-link'
            href="https://facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer">
            <FacebookIcon />
          </a>
          <a
            className='icon-link'
            href="https://github.com"
            aria-label="Linkedin"
            target="_blank"
            rel="noopener noreferrer">
            <GithubIcon />
          </a>
          <a
            className='icon-link'
            href="https://linkedin.com"
            aria-label="Linkedin"
            target="_blank"
            rel="noopener noreferrer">
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </div>
  )
}
export default Navbar;






