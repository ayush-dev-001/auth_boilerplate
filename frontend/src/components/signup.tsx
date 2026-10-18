export function Signup() {
    return (
        <div className="flex-1 flex justify-center items-center p-6 bg-slate-50 min-h-screen">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-xl w-full max-w-md flex flex-col gap-6">
                <div className="text-center space-y-1">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Create an Account</h2>
                    <p className="text-sm text-gray-500">Sign up to get started</p>
                </div>
                <form action="" className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="Full Name (optional)" 
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-150" 
                        />
                        <input 
                            type="text" 
                            name="username" 
                            placeholder="Username (optional)" 
                            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-150" 
                        />
                    </div>
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Email address" 
                        required 
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-150" 
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password (min 6 chars, uppercase, number & symbol)" 
                        required 
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-150" 
                    />
                    <input 
                        type="number" 
                        name="age" 
                        placeholder="Age (optional)" 
                        min="1" 
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-150" 
                    />
                    <button 
                        type="submit" 
                        className="w-full mt-1 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium text-sm rounded-lg py-2.5 transition-all duration-150 shadow-sm hover:shadow cursor-pointer"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
}