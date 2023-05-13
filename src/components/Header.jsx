import React from 'react'
import { Nav } from './Nav'
import { NavMobile } from './NavMobile'

export const Header = () => {

  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile ? <NavMobile /> : <Nav />
}