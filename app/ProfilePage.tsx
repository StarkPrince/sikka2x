
const ProfilePage = () =>
{
    // Fetch user details using user id here
    // The user details are hardcoded for this example
    // const [userDetails, setUserDetails] = useState({
    //     name: 'John Doe',
    //     email: 'john.doe@example.com',
    //     phoneNumber: '+1234567890',
    // });

    const userDetails = {
        name: 'John Doe',
        email: 'john.doe@example.com',
        phoneNumber: '+1234567890',
    };

    const setUserDetails = (update: any) => { };

    // Handler for updating profile
    const handleUpdateProfile = () =>
    {
        // Update profile API call here
        alert(`Updated profile details for ${userDetails.name}`);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">Profile Details</h1>

            <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
                <div className="flex flex-col">
                    <label className="font-bold">Name</label>
                    <input
                        type="text"
                        className="block w-full pl-2 pr-12 sm:text-sm border-gray-300 rounded-md"
                        placeholder="Enter name"
                        value={userDetails.name}
                    />

                    <label className="font-bold mt-3">Email</label>
                    <input
                        type="email"
                        className="block w-full pl-2 pr-12 sm:text-sm border-gray-300 rounded-md"
                        placeholder="Enter email"
                        value={userDetails.email}
                    />

                    <label className="font-bold mt-3">Phone Number</label>
                    <input
                        type="text"
                        className="block w-full pl-2 pr-12 sm:text-sm border-gray-300 rounded-md"
                        placeholder="Enter phone number"
                        value={userDetails.phoneNumber}
                    />

                    <button
                        className="mt-3 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Update Profile
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
