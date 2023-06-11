


const TransactionHistoryPage = () =>
{
    // Fetch transactions from API here
    // Transactions are hardcoded for this example
    const transactions = [
        { id: 1, type: 'Add Funds', amount: 200, date: '2023-07-10T14:00:00Z' },
        { id: 2, type: 'Bet Placed', amount: 50, date: '2023-07-11T14:00:00Z' },
        // Add as many transactions as required
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Transaction History</h1>

            <div className="py-4">
                {transactions.map(transaction => (
                    <div key={transaction.id} className="p-6 max-w-md my-6 mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                        <div>
                            <div className="text-xl font-medium text-black">{transaction.type}</div>
                            <p className="text-gray-500">Amount: {transaction.amount}</p>
                            <p className="text-gray-500">Date: {new Date(transaction.date).toLocaleString()}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TransactionHistoryPage;
