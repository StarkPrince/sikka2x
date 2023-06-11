import Link from 'next/link';

const LiveMatchesPage = () =>
{
    // Fetch live matches from API here
    // Matches are hardcoded for this example
    const matches = [
        { id: 1, teams: 'Chennai Super Kings vs Mumbai Indians', startTime: '2023-07-10T14:00:00Z', status: 'In Progress' },
        { id: 2, teams: 'Kolkata Knight Riders vs Delhi Daredevils', startTime: '2023-07-11T14:00:00Z', status: 'In Progress' },
        // Add as many matches as required
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Live Matches</h1>

            <div className="py-4">
                {matches.map(match => (
                    <div key={match.id} className="p-6 m-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                        <div>
                            <div className="text-xl font-medium text-black">{match.teams}</div>
                            <p className="text-gray-500">Start Time: {new Date(match.startTime).toLocaleString()}</p>
                            <p className="text-gray-500 my-6">Status: {match.status}</p>
                            <Link href={`/match/${match.id}`} >
                                <Link href="" className="mt-3 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                    Place Bet
                                </Link>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LiveMatchesPage;
