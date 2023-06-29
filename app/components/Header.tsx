export default function Header()
{
    return (
        <header className="bg-blue-500 text-white p-4">
            <nav className="mt-2">
                <ul className="flex space-x-4">
                    <li><a href="/" className="hover:underline">Home</a></li>
                    <li><a href="/about" className="hover:underline">About</a></li>
                    <li><a href="/sports" className="hover:underline">Sports</a></li>
                    <li><a href="/casino" className="hover:underline">Casino</a></li>
                    <li><a href="/contact" className="hover:underline">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}
