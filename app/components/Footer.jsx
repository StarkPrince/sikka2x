export default function Footer()
{
    return (
        <footer className="bg-gray-200 text-black p-4">
            <div className="container mx-auto">
                <div className="flex justify-between">
                    <div>
                        <h3 className="font-bold">Betting App</h3>
                        <p>123 Street, City, Country</p>
                        <p>Email: info@bettingapp.com</p>
                        <p>Phone: +123 456 7890</p>
                    </div>
                    <div>
                        <h3 className="font-bold">Quick Links</h3>
                        <ul>
                            <li><a href="/terms" className="block mt-2">Terms & Conditions</a></li>
                            <li><a href="/privacy" className="block mt-2">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-4">
                    <p>© 2023 Betting App. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
