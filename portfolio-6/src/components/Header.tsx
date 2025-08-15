import { useState } from "react"
import Navbar from "./Navbar"
import { assets } from "../assets/assets"

const Header = () => {
  const [navOpen, setNavOpen] = useState<boolean>(false)

  return (
    <header className="fixed top-0 left-0 w-full h-20 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/10">
      <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-8">
        <h1>
          <a href="/" className="logo">
            <img src={assets.favicon} alt="Logo" width={40} height={40} />
          </a>
        </h1>
        <div className="relative md:justify-self-center">
          <button className="menu-btn md:hidden!" onClick={() => setNavOpen((prev) => !prev)}>
            <span className="material-symbols-rounded">{navOpen ? 'close' : 'menu'}</span>
          </button>
          <Navbar navOpen={navOpen} />
        </div>
      </div>
    </header>
  )
}

export default Header
