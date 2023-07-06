import Image from 'next/image';


export default function Section({ type, title })
{
    return (
        <section className="p-4">
            <h2 className="text-xl font-semibold mb-4">{title}</h2>

            {type === 'hero' && (
                <div className="text-center bg-cover bg-center" style={{ backgroundImage: 'url(/images/banner.jpg)' }}>
                    <div className="py-20 px-4 text-black">
                        <h2 className="text-4xl font-bold">Ready to put your cricket knowledge to the test and win real money? It's time to download the Sikka2x app and dive into the exciting world of cricket trivia!</h2>
                        <p className="mt-4 text-lg">Join the Cricket Trivia Revolution with Sikka2x!</p>
                        <button className="mt-6 bg-primaryYellow text-primaryRed px-8 py-3 rounded-lg">Play now </button>
                    </div>
                </div>
            )}


            {type === 'how-it-works' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-amber-100 text-primaryRed `rounded-lg" id="about">
                    <div className="text-center p-4 m-2 bg-amber-300 text-primaryRed rounded-lg">
                        <Image src="/assets/stage 1.png" alt="Step 1" className="mx-auto mb-2 w-72 h-96 object-cover rounded-lg" width={720} height={480} />
                        <h4 className="font-semibold">Stage One: Sign Up </h4>
                        <p>To kick-off your cricket trivia adventure, download the Sikka2x app, register, and set up your wallet with a desired amount of money. For each question, an amount of 1/- will be staked from your wallet. Remember, this isn't just about the thrill of the game, but also about winning real money!</p>
                    </div>
                    <div className="text-center p-4 m-2 bg-amber-300 text-primaryRed rounded-lg">
                        <Image src="/assets/stage 2.png" alt="Step 1" className="mx-auto mb-2 w-72 h-96 object-cover rounded-lg" width={720} height={480} />
                        <h4 className="font-semibold">Stage Two: The Quiz Game</h4>
                        <p>Once you're ready to play, the app will pair you randomly with another player who's also ready for a cricket quiz showdown. You'll then be presented with a multiple-choice question (MCQ) about cricket, which you have to answer within 10 seconds. The race isn't just about being correct, it's about being the fastest to get it right!</p>
                    </div>
                    <div className="text-center p-4 m-2 bg-amber-300 text-primaryRed rounded-lg">
                        <Image src="/assets/stage 3.png" alt="Step 1" className="mx-auto mb-2 w-72 h-96 object-cover rounded-lg" width={720} height={480} />
                        <h4 className="font-semibold">Stage Three: Win & Earn</h4>
                        <p>Upon answering the question, if you're faster and correct, you're the winner! You'll bag 2/- from that round and it will be added to your wallet. The thrill of winning, doubled by earning, brings an unparalleled joy and satisfaction. But fret not if you lose. Every new question is a new opportunity. So keep playing, keep learning, and keep earning!</p>
                    </div>
                </div>
            )}


            {type === 'featured-games' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4  text-primaryYellow rounded-lg" id="sports">
                    <div className="text-center p-4 text-primaryYellow bg-red-800 rounded-lg">
                        <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" alt="Football" className="mx-auto mb-2 w-48 h-32 object-cover rounded-lg" />
                        <h4 className="font-semibold">Football</h4>
                        <p>Bet on the latest football matches.</p>
                    </div>
                    <div className="text-center p-4 text-primaryYellow rounded-lg bg-red-800 ">
                        <img src="https://images.unsplash.com/photo-1515523110800-9415d13b84a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80" alt="Basketball" className="mx-auto mb-2 w-48 h-32 object-cover rounded-lg" />
                        <h4 className="font-semibold">Basketball</h4>
                        <p>Experience the thrill of basketball betting.</p>
                    </div>
                    <div className="text-center p-4 text-primaryYellow bg-red-800 rounded-lg">
                        <img src="https://images.unsplash.com/photo-1595435742656-5272d0b3fa82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80" alt="Tennis" className="mx-auto mb-2 w-48 h-32 object-cover rounded-lg" />
                        <h4 className="font-semibold">Tennis</h4>
                        <p>Place your bets on exciting tennis matches.</p>
                    </div>
                    <div className="text-center p-4 text-primaryYellow bg-red-800 rounded-lg">
                        <img src="https://images.unsplash.com/photo-1558742619-fd82741daa99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80" alt="Esports" className="mx-auto mb-2 w-48 h-32 object-cover rounded-lg" />
                        <h4 className="font-semibold">Esports</h4>
                        <p>Join the future of betting with Esports.</p>
                    </div>
                </div>)}



                {type === 'testimonials' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gradient-to-r from-primaryRed to-primaryYellow text-white rounded-lg" id="testimonial">
                        <div className="p-4 bg-white bg-opacity-25 text-white rounded-lg shadow text-center">
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" alt="User 1" className="mx-auto rounded-full w-24 h-24 object-cover mb-2" />
                            <p className="text-sm md:text-base">"This app is amazing! I've had so much fun betting on my favorite sports."</p>
                            <h4 className="font-semibold mt-2">- John Doe</h4>
                        </div>
                        <div className="p-4 bg-white bg-opacity-25 text-white rounded-lg shadow text-center">
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="User 2" className="mx-auto rounded-full w-24 h-24 object-cover mb-2" />
                            <p className="text-sm md:text-base">"The user experience is seamless. Highly recommended for betting enthusiasts!"</p>
                            <h4 className="font-semibold mt-2">- Jane Smith</h4>
                        </div>
                    </div>
                )}



                {type === 'news' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-gradient-to-r to-primaryRed from-primaryYellow text-white rounded-lg" id="news">
                        <div className="p-4 bg-white bg-opacity-25 text-slate-100 rounded-lg shadow text-center">
                            <img src="https://images.unsplash.com/photo-1504279807002-09854ccc9b6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" alt="News 1" className="mb-2 w-full h-48 object-cover rounded-lg" />
                            <h4 className="font-semibold">Latest Betting Trends</h4>
                            <p>Discover the latest trends in online betting.</p>
                            <a href="#" className="text-white underline">Read more</a>
                        </div>
                        <div className="p-4 bg-primaryYellow bg-opacity-25 text-slate-100 rounded-lg shadow text-center">
                            <img src="https://images.unsplash.com/photo-1561034646-e37eb9c48abd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="News 2" className="mb-2 w-full h-48 object-cover rounded-lg" />
                            <h4 className="font-semibold">How to Bet Responsibly</h4>
                            <p>Learn how to enjoy betting while staying in control.</p>
                            <a href="#" className="text-white underline">Read more</a>
                        </div>
                        <div className="p-4 bg-white bg-opacity-25 text-slate-100 rounded-lg shadow text-center">
                            <img src="https://images.unsplash.com/photo-1542027953342-020384de63a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="News 3" className="mb-2 w-full h-48 object-cover rounded-lg" />
                            <h4 className="font-semibold">Understanding Odds</h4>
                            <p>Get to know how odds work in betting.</p>
                            <a href="#" className="text-white underline">Read more</a>
                        </div>
                    </div>
                )}




            {type === 'faqs' && (
                <div className="p-4 bg-gradient-to-r text-white rounded-lg" id="faq">
                    <h2 className="text-3xl font-semibold mb-4 text-red-800">Frequently Asked Questions</h2>
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-primaryRed rounded-lg shadow-md">
                            <h4 className="font-semibold text-primaryYellow">What is Sikka2x?</h4>
                            <p className="text-white">Sikka2x is an exciting, real-money, cricket trivia quiz game. Users play against each other answering questions to win cash prizes.</p>
                        </div>
                        <div className="p-4 bg-primaryYellow rounded-lg shadow-md">
                            <h4 className="font-semibold text-primaryRed">How do I start playing on Sikka2x?</h4>
                            <p className="text-white">To start playing, you need to download the Sikka2x app, register, and set up your wallet with a minimum balance.</p>
                        </div>
                        <div className="p-4 bg-primaryRed rounded-lg shadow-md">
                            <h4 className="font-semibold text-primaryYellow">Is Sikka2x legal?</h4>
                            <p className="text-white">Yes, Sikka2x is a skill-based game and is completely legal. However, it is your responsibility to understand and comply with all applicable laws in your area.</p>
                        </div>
                        <div className="p-4 bg-primaryYellow rounded-lg shadow-md">
                            <h4 className="font-semibold text-primaryRed">What is the format of the game?</h4>
                            <p className="text-white">Two players are randomly matched and presented with a cricket-related multiple-choice question. Each player stakes 1/- on the answer, and the player who answers correctly the fastest wins 2/-.</p>
                        </div>                        
                        <div className="p-4 bg-primaryRed rounded-lg shadow-md">
                            <h4 className="font-semibold text-primaryYellow">How many questions will I be asked per game?</h4>
                            <p className="text-white">Each game consists of one question. However, you can play as many games as you want as long as you have a balance in your wallet.</p>
                        </div>                        
                        <div className="p-4 bg-primaryYellow rounded-lg shadow-md">
                            <h4 className="font-semibold text-primaryRed">What if there is a tie between two players?</h4>
                            <p className="text-white">In the rare event of a tie, the prize money is equally split between the two players.
                            </p>
                        </div>
                        <div className="p-4 bg-primaryRed rounded-lg shadow-md">
                            <h4 className="font-semibold text-primaryYellow">What happens if I answer the question incorrectly?</h4>
                            <p className="text-white">If you answer incorrectly, you will lose the 1/- that was staked on that question.
                            </p>
                        </div>
                        <div className="p-4 bg-primaryYellow rounded-lg shadow-md">
                            <h4 className="font-semibold text-primaryRed">Can I withdraw my winnings?</h4>
                            <p className="text-white">Yes, you can withdraw your winnings to your bank account. 
                            </p>
                        </div>
                    </div>
                </div>
            )}


            {type === 'contact' && (
                <div id="contact" className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
                    {/* <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe
                            width="100%"
                            height="100%"
                            title="map"
                            className="absolute inset-0"
                            style={{ filter: "opacity(0.7)" }}
                            src="https://www.google.com/maps/embed?pb=..."
                        />
                        <div className="bg-primaryRed relative flex flex-wrap py-6 rounded shadow-md text-primaryYellow">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-primaryYellow tracking-widest text-xs">
                                    ADDRESS
                                </h2>
                                <p className="mt-1">
                                    123 Betting St, City, Country
                                </p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-primaryYellow tracking-widest text-xs">
                                    EMAIL
                                </h2>
                                <a className="leading-relaxed text-primaryYellow">
                                    support@bettingapp.com
                                </a>
                                <h2 className="title-font font-semibold text-primaryYellow tracking-widest text-xs mt-4">
                                    PHONE
                                </h2>
                                <p className="leading-relaxed text-primaryYellow">+123 456 7890</p>
                            </div>
                        </div>
                    </div> */}
                    <form
                        name="contact"
                        className="flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 bg-primaryRed rounded-lg p-6">
                        <h2 className="text-primaryYellow sm:text-4xl text-3xl mb-1 font-medium title-font">
                            Contact us
                        </h2>
                        <div className="relative mb-4">
                            <label htmlFor="name" className="leading-7 text-sm text-primaryYellow">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full bg-amber-100 rounded border border-primaryRed text-base outline-none text-primaryRed py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-primaryYellow">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full bg-amber-100 rounded border border-primaryRed text-base outline-none text-primaryRed py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            />
                        </div>
                        <div className="relative mb-4">
                            <label
                                htmlFor="message"
                                className="leading-7 text-sm text-primaryYellow">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-amber-100 rounded border border-primaryRed text-base outline-none text-primaryRed py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out h-32"
                            />
                        </div>
                        <button
                            type="submit"
                            className="text-primaryRed bg-amber-100 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-300 rounded text-lg">
                            Submit
                        </button>
                    </form>
                </div>
            )}
        </section>
    );
};