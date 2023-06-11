
export default function CBS()
{
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <header className="bg-blue-500 text-white p-5">
                <h1 className="text-3xl">Sikka 2X</h1>
            </header>
            <main className="p-5">
                <h2 className="text-2xl">Place your Bets</h2>
                <form className="mt-5">
                    <label htmlFor="team" className="block text-gray-700 text-sm font-bold mb-2">Select Team:</label>
                    <select id="team" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option>Chennai Super Kings</option>
                        <option>Delhi Capitals</option>
                        <option>Gujarat Titans</option>
                        <option>Kolkata Knight Riders</option>
                        <option>Lucknow Super Giants</option>
                        <option>Mumbai Indians</option>
                        <option>Punjab Kings</option>
                        <option>Rajasthan Royals</option>
                        <option>Royal Challengers Bangalore</option>
                        <option>Sunrisers Hyderabad</option>
                    </select>
                    <label htmlFor="bet" className="block text-gray-700 text-sm font-bold mb-2 mt-5">Enter Bet Amount:</label>
                    <input type="number" id="bet" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">Place Bet</button>
                </form>
            </main>
        </main>
    )
}

