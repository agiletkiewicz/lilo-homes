
export default function MobileNav() {

  return (
    <nav className="absolute top-20 right-2 bg-white p-5 shadow-xl rounded-md"> 
      <ul className="font-heading text-lg">
        <div className="mb-5">
          Homes
          <div className="flex">
            <div className="w-1 bg-droplet-light ml-4 opacity-50"/>
            <div>
              <a href="/house"><li className="pl-1 mb-3">1804 Storrs</li></a>
              <a href="/bungalow"><li className="pl-1 mb-3">1800 Storrs</li></a>
              <a href="/coming-soon-1"><li className="pl-1 mb-3">Coming soon</li></a>
              <a href="/coming-soon-2"><li className="pl-1 mb-3">Coming soon</li></a>
            </div>
          </div>
        </div>
        <a href="/contact"><li className="p-0 mb-3">Contact</li></a>
        <a href="/location"><li className="p-0 mb-3">Location</li></a>
      </ul>
    </nav>
  )
};

