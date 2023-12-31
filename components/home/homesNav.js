
export default function HomesNav() {

  return (
    <nav className="absolute top-20 right-5 bg-white p-5 shadow-xl"> 
      <ul className="font-heading text-lg">
        <a href="/house"><li className="pl-1">1804 Storrs</li></a>
        <a href="/bungalow"><li className="pl-1">1800 Storrs</li></a>
        <a href="/coming-soon"><li className="pl-1">Coming soon</li></a>
      </ul>
    </nav>
  )
};