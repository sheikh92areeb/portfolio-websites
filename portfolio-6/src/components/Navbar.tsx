import { useEffect, useRef } from "react";
import { navItems } from "../data/appData";

const Navbar = ({navOpen}: {navOpen : boolean}) => {
  
  const lastActiveLink = useRef<HTMLAnchorElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);

  const initActiveBox = () => {
    if (activeBox.current && lastActiveLink.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + "px";
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + "px";
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + "px";
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + "px";
    }
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", initActiveBox);

    const handleScroll = () => {
      let currentSectionId = "";
      const scrollPos = window.scrollY + window.innerHeight / 3; // trigger point

      navItems.forEach(({ link }) => {
        const section = document.querySelector(link) as HTMLElement;
        if (section) {
          if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            currentSectionId = link;
          }
        }
      });

      if (currentSectionId) {
        const currentLink = document.querySelector(`a[href="${currentSectionId}"]`) as HTMLAnchorElement;
        if (currentLink && currentLink !== lastActiveLink.current) {
          lastActiveLink.current?.classList.remove("active");
          currentLink.classList.add("active");
          lastActiveLink.current = currentLink;
          initActiveBox();
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", initActiveBox);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const activeCurrentLink = (e: React.MouseEvent<HTMLAnchorElement>) => {
    lastActiveLink.current?.classList.remove("active");
    const target = e.currentTarget;
    target.classList.add("active");
    lastActiveLink.current = target;
    initActiveBox();
  };

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
