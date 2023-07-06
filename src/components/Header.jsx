
export default function Header()
{
    const toggleMenu = () => {
        const menu = document.getElementById("menu");
        menu.classList.toggle("hidden");
    };

    return (
        <header className="bg-primaryRed text-white p-4">
            <nav className="relative flex items-center justify-between">
                <a href="/" className="font-bold text-xl">
                    <img src="https://i.imgur.com/Ws52pcR.png" alt="logo" className="w-32" />
                    {/* <Image src="/assets/logo.jpg" alt="logo" width="48" height="48" /> */}
                </a>
                <ul id="menu" className="hidden absolute top-full left-0 w-full mt-2 space-y-2 text-center bg-primaryRed text-white lg:static lg:w-auto lg:space-y-0 lg:flex lg:space-x-4">
                    <li><a href="#about" className="block py-2 lg:py-0 hover:text-primaryYellow">About</a></li>
                    <li><a href="#sports" className="block py-2 lg:py-0 hover:text-primaryYellow">Sports</a></li>
                    <li><a href="#news" className="block py-2 lg:py-0 hover:text-primaryYellow">News</a></li>
                    <li><a href="#testimonial" className="block py-2 lg:py-0 hover:text-primaryYellow">Testimonials</a></li>
                    <li><a href="#faq" className="block py-2 lg:py-0 hover:text-primaryYellow">FAQs</a></li>
                    <li><a href="#contact" className="block py-2 lg:py-0 hover:text-primaryYellow">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
