
export default function MobileNav() {

    return (
        <nav className="absolute top-20 right-2 bg-white p-5"> 
            <ul className="font-heading text-lg">
                <a href="/house"><li className="p-0">Lilo House</li></a>
                <a href="/bungalow"><li className="p-0">Lilo Bungalow</li></a>
                <li className="p-0">Location</li>
                <li className="p-0">About</li>
            </ul>
        </nav>
    )
};

