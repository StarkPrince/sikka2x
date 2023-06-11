
const LandingPage = () =>
{
    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">Welcome to</h2>
                    <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl md:text-6xl">Sikka 2X</h1>
                    <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                        Playing with real money and win the money based on the answers
                    </p>
                </div>
                <div className="mt-10 sm:flex sm:justify-center">
                    <div className="rounded-md shadow">
                        <a href="/signup" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                            Get started
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage;
