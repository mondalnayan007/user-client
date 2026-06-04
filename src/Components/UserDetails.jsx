import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    // React Router Loader theke data destructured kora holo
    const { name, email, role } = useLoaderData();

    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
            {/* Main Card Container */}
            <div className="bg-slate-800 border border-slate-700 w-full max-w-md rounded-2xl shadow-2xl p-6 text-center relative overflow-hidden transition-all duration-300 hover:shadow-cyan-500/10 hover:border-slate-600">
                
                {/* Decorative Top Bar Pattern */}
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-500 to-blue-600"></div>

                {/* Profile Image/Avatar Placeholder */}
                <div className="mx-auto w-24 h-24 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-black shadow-lg mb-4 select-none">
                    {name ? name.charAt(0).toUpperCase() : 'U'}
                </div>

                {/* User Name */}
                <h2 className="text-2xl font-bold text-white tracking-wide">
                    {name || "Anonymous User"}
                </h2>

                {/* User Role Badge */}
                <div className="mt-2 inline-block">
                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {role || "Member"}
                    </span>
                </div>

                {/* Divider Line */}
                <hr className="my-6 border-slate-700" />

                {/* User Details Info Block */}
                <div className="text-left space-y-3">
                    <div>
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                            Email Address
                        </span>
                        <p className="text-slate-200 text-sm font-medium break-all bg-slate-850 p-2.5 rounded-lg border border-slate-750">
                            {email || "No email provided"}
                        </p>
                    </div>

                    <div>
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                            Account Permissions
                        </span>
                        <p className="text-slate-200 text-sm font-medium bg-slate-850 p-2.5 rounded-lg border border-slate-750">
                            Full access layout config activated.
                        </p>
                    </div>
                </div>

                {/* Action Button */}
                <button className="mt-6 w-full py-2.5 px-4 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 active:scale-[0.98] transition-all shadow-md shadow-cyan-500/20 cursor-pointer">
                    Edit Profile
                </button>
                
            </div>
        </div>
    );
};

export default UserDetails;