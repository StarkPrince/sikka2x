import Link from 'next/link';

const BettingPage = () =>
{
    // Ideally, you'll fetch these data from your API
    const matches = [
        { id: 1, teamA: 'Chennai Super Kings', teamB: 'Mumbai Indians', dateTime: '2023-07-10T14:00:00Z' },
        { id: 2, teamA: 'Kolkata Knight Riders', teamB: 'Delhi Daredevils', dateTime: '2023-07-11T14:00:00Z' },
        // Add as many matches as required
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Upcoming Matches</h1>

            <div className="py-4">
                {matches.map(match => (
                    <div key={match.id} className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                        <div>
                            <div className="text-xl font-medium text-black">{match.teamA} vs {match.teamB}</div>
                            <p className="text-gray-500">Starts at: {new Date(match.dateTime).toLocaleString()}</p>
                            <Link href={`/betting/${match.id}`}>
                                <Link href="" className="mt-3 text-indigo-500 hover:text-indigo-600">Place bet &rarr;</Link>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BettingPage;
