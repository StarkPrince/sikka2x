const LandingPage = () => {
    return (
        <div className="min-h-screen bg-primaryRed flex flex-col justify-center text-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-primaryYellow tracking-wide uppercase">Welcome to</h2>
                    <h1 className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl md:text-6xl">Sikka 2X</h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                    At Sikka2x, we've turned cricket trivia into an exhilarating game of speed and skill. Sikka2x is the ultimate destination for cricket enthusiasts who believe in their cricketing knowledge. But, there's a twist - at Sikka2x, you play with real money!
                    </p>
                    <div className="mt-5">
                        <a href="/signup" className="inline-block px-5 py-3 rounded-lg shadow-lg bg-primaryYellow text-primaryRed font-bold uppercase tracking-wider">
                            Download Now
                        </a>
                    </div>
                    <div className="mt-5 max-w-lg mx-auto">
                        {/* <p className="text-sm text-white">
                            Enjoy a variety of sports to bet on - including football, basketball, cricket, and more. Experience live betting, with odds updated in real-time.
                        </p> */}
                        <p className="mt-4 text-sm text-white">
                            At our initial launch, we begin with a one-of-a-kind game - a duel of cricket intellect between two random players, where you could double your stake with every correct answer
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
