
type SectionProps = {
    type: string;
    title: string;
};


export default function Section({ type, title }: SectionProps)
{
    return (
        <section className="p-4">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>

            {type === 'hero' && (
                <div className="text-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/banner.jpg)' }}>
                    <div className="py-20 px-4 text-black">
                        <h2 className="text-4xl font-bold">Welcome to Ultimate Betting</h2>
                        <p className="mt-4 text-lg">Join and experience the thrill of online betting.</p>
                        <button className="mt-6 bg-blue-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-lg">Get Started</button>
                    </div>
                </div>
            )}


            {type === 'how-it-works' && (
                <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                        <img src="https://plus.unsplash.com/premium_photo-1661589873567-7bd0bd808fcc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1775&q=80" alt="Step 1" className="mx-auto mb-2" />
                        <h4 className="font-semibold">Create an Account</h4>
                        <p>Sign up and create your betting account.</p>
                    </div>
                    <div className="text-center">
                        <img src="https://images.unsplash.com/photo-1607863680198-23d4b2565df0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="Step 2" className="mx-auto mb-2" />
                        <h4 className="font-semibold">Make a Deposit</h4>
                        <p>Add funds to your account using various payment methods.</p>
                    </div>
                    <div className="text-center">
                        <img src="https://images.unsplash.com/photo-1518133227682-c0e3e34de21b?ixlib=rb-4.0.3" alt="Step 3" className="mx-auto mb-2 max-w-md max-h-80" />
                        <h4 className="font-semibold">Start Betting</h4>
                        <p>Choose your games and place your bets.</p>
                    </div>
                </div>
            )}


            {type === 'featured-games' && (
                <div className="grid grid-cols-4 gap-4">
                    <div className="text-center">
                        <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" alt="Football" className="mx-auto mb-2 max-h-96" />
                        <h4 className="font-semibold">Football</h4>
                        <p>Bet on the latest football matches.</p>
                    </div>
                    <div className="text-center">
                        <img src="https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="Basketball" className="mx-auto mb-2 max-h-96" />
                        <h4 className="font-semibold">Basketball</h4>
                        <p>Experience the thrill of basketball betting.</p>
                    </div>
                    <div className="text-center">
                        <img src="https://images.unsplash.com/photo-1595435742656-5272d0b3fa82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="Tennis" className="mx-auto mb-2 max-h-96" />
                        <h4 className="font-semibold">Tennis</h4>
                        <p>Place your bets on exciting tennis matches.</p>
                    </div>
                    <div className="text-center">
                        <img src="https://images.unsplash.com/photo-1558742619-fd82741daa99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="Esports" className="mx-auto mb-2 max-h-96" />
                        <h4 className="font-semibold">Esports</h4>
                        <p>Join the future of betting with Esports.</p>
                    </div>
                </div>
            )}


            {type === 'testimonials' && (
                <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-100 rounded shadow text-center">
                        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" alt="User 1" className="mx-auto rounded-full w-16 mb-2" />
                        <p>"This app is amazing! I've had so much fun betting on my favorite sports."</p>
                        <h4 className="font-semibold mt-2">- John Doe</h4>
                    </div>
                    <div className="p-4 bg-gray-100 rounded shadow text-center">
                        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="User 2" className="mx-auto rounded-full w-16 mb-2" />
                        <p>"The user experience is seamless. Highly recommended for betting enthusiasts!"</p>
                        <h4 className="font-semibold mt-2">- Jane Smith</h4>
                    </div>
                </div>
            )}


            {type === 'news' && (
                <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-white rounded shadow">
                        <img src="https://images.unsplash.com/photo-1504279807002-09854ccc9b6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="News 1" className="mb-2" />
                        <h4 className="font-semibold">Latest Betting Trends</h4>
                        <p>Discover the latest trends in online betting.</p>
                        <a href="#" className="text-blue-500">Read more</a>
                    </div>
                    <div className="p-4 bg-white rounded shadow">
                        <img src="https://images.unsplash.com/photo-1561034646-e37eb9c48abd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="News 2" className="mb-2" />
                        <h4 className="font-semibold">How to Bet Responsibly</h4>
                        <p>Learn how to enjoy betting while staying in control.</p>
                        <a href="#" className="text-blue-500">Read more</a>
                    </div>
                    <div className="p-4 bg-white rounded shadow">
                        <img src="https://images.unsplash.com/photo-1542027953342-020384de63a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="News 3" className="mb-2" />
                        <h4 className="font-semibold">Understanding Odds</h4>
                        <p>Get to know how odds work in betting.</p>
                        <a href="#" className="text-blue-500">Read more</a>
                    </div>
                </div>
            )}


            {type === 'faqs' && (
                <div>
                    <div className="p-4 bg-white rounded shadow mb-4">
                        <h4 className="font-semibold">How do I create an account?</h4>
                        <p>Click on the "Sign Up" button on the homepage and fill in the registration form.</p>
                    </div>
                    <div className="p-4 bg-white rounded shadow mb-4">
                        <h4 className="font-semibold">How do I deposit funds?</h4>
                        <p>Go to your account dashboard, click on "Deposit", and choose your preferred payment method.</p>
                    </div>
                    <div className="p-4 bg-white rounded shadow">
                        <h4 className="font-semibold">Is my personal information safe?</h4>
                        <p>Yes, we take the security of our users' information very seriously. Your data is encrypted and protected.</p>
                    </div>
                </div>
            )}

            {type === 'contact' && (
                <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe
                            width="100%"
                            height="100%"
                            title="map"
                            className="absolute inset-0"
                            style={{ filter: "opacity(0.7)" }}
                            src="https://www.google.com/maps/embed?pb=..."
                        />
                        <div className="bg-gray-100 relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                                    ADDRESS
                                </h2>
                                <p className="mt-1">
                                    123 Betting St, City, Country
                                </p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                                    EMAIL
                                </h2>
                                <a className="text-indigo-400 leading-relaxed">
                                    support@bettingapp.com
                                </a>
                                <h2 className="title-font font-semibold text-black tracking-widest text-xs mt-4">
                                    PHONE
                                </h2>
                                <p className="leading-relaxed">+123 456 7890</p>
                            </div>
                        </div>
                    </div>
                    <form
                        name="contact"
                        className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
                            Hire Me
                        </h2>
                        <p className="leading-relaxed mb-5">
                            Contact us
                        </p>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-gray-100 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-gray-100 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label
                                htmlFor="message"
                                className="leading-7 text-sm text-gray-400">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-gray-100 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <button
                            type="submit"
                            className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </section>
    );
};