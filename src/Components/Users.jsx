import React, { use, useState } from 'react';
import { Link } from 'react-router';

const Users = ({userPromise}) => {

    const usersData = use(userPromise);
       
    const [users,setUsers] = useState(usersData)
    

    const handleAddUser =(e)=>{
       e.preventDefault();
       const name = e.target.name.value;
       const email = e.target.email.value;
       const role = e.target.role.value;

      

       const newUser = {name,email,role};

       fetch('http://localhost:4000/users',{
        method:'POST',
        headers: {
           'Content-type' : 'application/json'
        },
        body: JSON.stringify(newUser)
       })
       .then(res=>res.json())
       .then(data =>{
        newUser._id = data.insertedId;
           const newUsers = [...users,newUser]
           setUsers(newUsers);
           e.target.reset();
        //    console.log('Data after post',data);
       })

    }


    const handleDeleteUser =(id)=>{

        fetch(`http://localhost:4000/users/${id}`,{
            method: 'DELETE'
        })
        .then(res=>res.json())
        .then(data =>{
            const remaining = users.filter(user=>user._id !== id);
            setUsers(remaining);
        })
        
    }


    return (
        <div>
              <p>users: {users.length}</p>
             <form onSubmit={handleAddUser}>
               <input type="text" name="name" id="" required placeholder='Enter user name'/><br />
               <input type="text" name="email" id="" required placeholder='Enter user email'/><br />
               <input type="text" name="role" id="" required placeholder='Enter user role'/><br />
               <button type="submit" className='px-4 py-2 border rounded cursor-pointer'>Add user</button>
           </form>
           {
            users.map(user => <ul className='flex justify-center gap-2 '>
                <li>{user.name}</li>
                <Link className='text-blue-500' to={`/users/${user._id}`}>Details</Link>
                <button onClick={()=>handleDeleteUser(user._id)} className='cursor-pointer'>X</button>
                
            </ul>)
           }

          
        </div>
    );
};

export default Users;