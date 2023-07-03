const LandingPage = () => {
    return (
        <div className="min-h-screen bg-primaryRed flex flex-col justify-center text-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-primaryYellow tracking-wide uppercase">Welcome to</h2>
                    <h1 className="mt-2 text-4xl font-extrabold text-white tracking-tight sm:text-5xl md:text-6xl">Sikka 2X</h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Dive into the thrilling world of online betting. Play with real money and win big based on your predictions!
                    </p>
                    <div className="mt-5">
                        <a href="/signup" className="inline-block px-5 py-3 rounded-lg shadow-lg bg-primaryYellow text-primaryRed font-bold uppercase tracking-wider">
                            Sign Up Now
                        </a>
                    </div>
                    <div className="mt-5 max-w-lg mx-auto">
                        <p className="text-sm text-white">
                            Enjoy a variety of sports to bet on - including football, basketball, cricket, and more. Experience live betting, with odds updated in real-time.
                        </p>
                        <p className="mt-4 text-sm text-white">
                            Participate in exciting contests, make your predictions, and climb the leaderboard. Join Sikka 2X today and unlock the ultimate betting experience.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
