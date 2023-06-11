

const MatchDetailPage = () =>
{
    const id = "";
    // Fetch match details using match id here

    // Hardcoded match details for demonstration
    const matchDetails = {
        teamA: 'Chennai Super Kings',
        teamB: 'Mumbai Indians',
        dateTime: '2023-07-10T14:00:00Z',
    };

    // Local state for bet amount
    // const [betAmount, setBetAmount] = useState('');
    const betAmount = 0;
    const setBetAmount = (update: any) => { };

    // Handler for placing a bet
    const handlePlaceBet = () =>
    {
        if (!betAmount) {
            alert('Please enter bet amount');
            return;
        }
        // API call to place the bet here
        alert(`Placed a bet of ${betAmount} on match ${id}`);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Match Details</h1>

            <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                <div>
                    <div className="text-xl font-medium text-black">
                        {matchDetails.teamA} vs {matchDetails.teamB}
                    </div>
                    <p className="text-gray-500">Starts at: {new Date(matchDetails.dateTime).toLocaleString()}</p>

                    <div className="mt-4">
                        <input
                            type="number"
                            min="1"
                            className="block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
                            placeholder="Enter bet amount"
                            value={betAmount}
                        />
                        <button
                            className="mt-3 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Place Bet
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MatchDetailPage;
