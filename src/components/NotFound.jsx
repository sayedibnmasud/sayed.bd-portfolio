import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-[#F9FAFB] dark:bg-gray-950 text-center transition-colors duration-300">
            <div className="max-w-xl w-full">


                <h1 className="text-6xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
                    404
                </h1>

                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
                    Feature Not Found
                </h2>

                <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg bg-gray-100 dark:bg-gray-900 border-l-4 border-primary-500 p-4 rounded-r-md text-left mx-auto max-w-sm font-mono text-sm leading-relaxed">
                    <span className="block text-primary-600 dark:text-primary-400 font-bold mb-1">Ticket #404: Requested Page</span>
                    <span className="block mb-1">Status: <span className="text-red-500 font-bold">Deprioritized</span></span>
                    <span className="block">Reason: "Scope Creep detected. This resource is currently in the backlog."</span>
                </p>

                <button
                    onClick={() => navigate('/')}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg font-medium transition-all hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-200 dark:hover:shadow-primary-900 active:transform active:scale-95"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Roadmap (Home)
                </button>
            </div>
        </div>
    );
};
