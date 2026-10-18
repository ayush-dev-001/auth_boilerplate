
export function Login() {
    return (
        <div className="flex-1 flex justify-center items-center p-6 bg-slate-50 min-h-screen">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-xl w-full max-w-sm flex flex-col gap-6">
                <div className="text-center space-y-1">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">Welcome to Auth</h2>
                    <p className="text-sm text-gray-500">Sign in to continue</p>
                </div>
                <form action="" className="flex flex-col gap-4">
                    <input 
                        type="text" 
                        placeholder="Email or username" 
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-150" 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-150" 
                    />
                    <button 
                        type="submit" 
                        className="w-full mt-1 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium text-sm rounded-lg py-2.5 transition-all duration-150 shadow-sm hover:shadow cursor-pointer"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}