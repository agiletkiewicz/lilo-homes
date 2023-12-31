
export default function HomesNav() {

  return (
    <nav className="absolute top-20 right-5 bg-white shadow-xl rounded-md"> 
      <ul className="font-heading text-lg">
        <a href="/house"><li className="hover:bg-grey hover:bg-opacity-25 p-5 pb-2 pt-4">1804 Storrs</li></a>
        <a href="/bungalow"><li className="hover:bg-grey hover:bg-opacity-25 p-5 pt-2 pb-2">1800 Storrs</li></a>
        <a href="/coming-soon-1"><li className="hover:bg-grey hover:bg-opacity-25 p-5 pt-2 pb-2">Coming soon</li></a>
        <a href="/coming-soon-2"><li className="hover:bg-grey hover:bg-opacity-25 p-5 pt-2 pb-4">Coming soon</li></a>
      </ul>
    </nav>
  )
};