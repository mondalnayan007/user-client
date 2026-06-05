import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateUser = () => {
    const userData = useLoaderData();
    


    const handleSubmit =(e)=>{
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const role = e.target.role.value;
    console.log(name,email,role);
   const updatedUser = {name,email,role};

   fetch(`http://localhost:4000/users/${userData._id}`,{
    method: "PATCH",
    headers:{
        'Content-Type': "application/json"
    },
    body: JSON.stringify(updatedUser)

   })
   .then(res=> res.json())
   .then(data =>{
    console.log('after update data',data);
    
   })


    }


    return (
        <div>
            <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-100">
                <h2 className="text-xl font-semibold text-gray-800 mb-5">Update Profile</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
                        <input
                            type="text"
                            name="name"
                            defaultValue={userData.name}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-700"
                        />
                    </div>

                    {/* Email Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Email Address</label>
                        <input
                            type="text"
                            name="email"
                            defaultValue={userData.email}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-700"
                        />
                    </div>

                    {/* Role Input */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">Role</label>
                        <input
                            type="text"
                            name="role"
                            defaultValue={userData.role}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-700"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        Update Profile
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateUser;