import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from '../css/Nav.module.css';

let currentPath = '';

function Nav() {
  let location = useLocation();

  const routes = [
    { pathname: '/', name: 'HOME' },
    { pathname: '/portfolio', name: 'PORTFOLIO' },
    { pathname: '/about_me', name: 'ABOUT ME' },
  ];

  const transition = {
    duration: 0.7,
    ease: [0.43, 0.13, 0.23, 0.96],
  };
  const variants = {
    exit: { y: '-10%', opacity: 0, transition },
    enter: {
      y: '0%',
      opacity: 1,
      transition,
    },
  };

  const [visible, setVisible] = useState(false);
  const [curPage, setCurPage] = useState([]);

  const onMouseOverNav = () => {
    setVisible(!visible);
  };

  const onMouseOverMenu = () => {
    setVisible(true);
  };
  const onMouseOut = () => {
    setVisible(false);
  };

  useEffect(() => {
    setCurPage(location.pathname);
  });

  return (
    <div className={styles.navbar}>
      <button onMouseOver={onMouseOverNav}>Nav</button>
      {visible ? (
        <motion.ul key="nav" variants={variants} initial="exit" animate="enter">
          <div>
            {routes.map((route) => {
              if (route.pathname !== curPage) {
                return (
                  <Link key={route.name.toLowerCase()} to={route.pathname}>
                    <motion.li
                      onMouseOver={onMouseOverMenu}
                      onMouseOut={onMouseOut}
                    >
                      {route.name}
                    </motion.li>
                  </Link>
                );
              }
            })}
          </div>
        </motion.ul>
      ) : null}
    </div>
  );
}

export default Nav;
