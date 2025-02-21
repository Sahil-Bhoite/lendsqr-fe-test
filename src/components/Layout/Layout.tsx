import { Outlet } from 'react-router'
import { useState} from 'react'
import './layout.styles.scss'
import Topbar from '../Navigation/Topbar'
import Sidebar from '../Navigation/Sidebar'

const Layout = () => {

  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const main = document.querySelector("main")

  const openMenu = (): void => {
    setMenuOpen(true);
    main?.classList.add("overflow-hidden");
  };

  const closeMenu = (): void => {
    setMenuOpen(false);
    main?.classList.remove("overflow-hidden");
  };

  const toggleMenu = (): void => {
    menuOpen ? closeMenu() : openMenu();
  }

  return (
    <div className='layout'>
      <Topbar topbarProps={{ menuOpen, toggleMenu }} />
      <Sidebar sidebarProps={{ menuOpen, closeMenu }} />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout