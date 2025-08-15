import { useEffect, useRef } from "react";
import { navItems } from "../data/appData";

const Navbar = ({navOpen}: {navOpen : boolean}) => {
  
  const lastActiveLink = useRef<HTMLAnchorElement | null>(null)
  const activeBox = useRef<HTMLDivElement | null>(null)

  const initActiveBox = () => {    
    if (activeBox.current && lastActiveLink.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px'
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px'
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px'
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px'
    }
  }

  useEffect(() => {
    initActiveBox();
    window.addEventListener('resize', initActiveBox);
    return () => window.removeEventListener('resize', initActiveBox);
  }, []);

  const activeCurrentLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
      lastActiveLink.current?.classList.remove('active')
      const target = e.currentTarget as HTMLAnchorElement
      target.classList.add('active')
      lastActiveLink.current = target
      if (activeBox.current) {
        activeBox.current.style.top = target.offsetTop + 'px'
        activeBox.current.style.left = target.offsetLeft + 'px'
        activeBox.current.style.width = target.offsetWidth + 'px'
        activeBox.current.style.height = target.offsetHeight + 'px'
      }
  }

  return (
    <nav className={'navbar ' + (navOpen ? 'active': '')}>
      {navItems.map(({ label, link, className }, index) => (
        <a key={index} href={link} className={className} ref={index === 0 ? lastActiveLink : null} onClick={activeCurrentLink}> {label}</a>
      ))}

      <div className="active-box" ref={activeBox}></div>
    </nav>
  )
}

export default Navbar
