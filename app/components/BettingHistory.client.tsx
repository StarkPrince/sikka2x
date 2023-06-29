
const BettingHistoryPage = () =>
{
    // Fetch bets from API here
    // Bets are hardcoded for this example
    const bets = [
        { id: 1, match: 'Chennai Super Kings vs Mumbai Indians', amount: 50, outcome: 'Won', date: '2023-07-10T14:00:00Z' },
        { id: 2, match: 'Kolkata Knight Riders vs Delhi Daredevils', amount: 100, outcome: 'Lost', date: '2023-07-11T14:00:00Z' },
        // Add as many bets as required
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Betting History</h1>

            <div className="py-4">
                {bets.map(bet => (
                    <div key={bet.id} className="p-6 max-w-md mx-auto my-6 bg-white rounded-xl shadow-md flex items-center space-x-4">
                        <div>
                            <div className="text-xl font-medium text-black">{bet.match}</div>
                            <p className="text-gray-500">Amount: {bet.amount}</p>
                            <p className="text-gray-500">Outcome: {bet.outcome}</p>
                            <p className="text-gray-500">Date: {new Date(bet.date).toLocaleString()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BettingHistoryPage;
