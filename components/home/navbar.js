import { useState } from 'react';
import MobileNav from './mobileNav';
import HomesNav from './homesNav';

export default function NavBar({ }) {

    const [openMobile, setMobileOpen] = useState(false);  
    const [openHomes, setHomesOpen] = useState(false);

    return (
      <nav className="flex justify-between sticky top-0 bg-white z-10 text-main-blue"> 
        <a href="/"><div className="pl-2 lg:justify-left"><img src='/logo.png' width="100" height="72" className="ml-2 mt-2"/></div></a>
        <div className="pr-3 pt-6 lg:hidden" onClick={() => setMobileOpen(!openMobile)}><img src='/menu.png' width="40" height="30"/></div>
        {openMobile ? <MobileNav /> : null}
        <ul className="hidden lg:flex lg:justify-right font-heading text-lg">
          <div className="p-6 hidden lg:block cursor-pointer" onClick={() => setHomesOpen(!openHomes)}>Homes</div>
          {openHomes ? <HomesNav /> : null}
          <a href="/location"><li className="p-6">Location</li></a>
          <a href="/contact"><li className="p-6">Contact</li></a>
        </ul>
      </nav>
    )
};

