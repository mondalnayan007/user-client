import React, { use, useState } from 'react';

const Users = ({userPromise}) => {

    const usersData = use(userPromise);
       console.log(usersData); 
    const [users,setUsers] = useState(usersData)
    

    const handleAddUser =(e)=>{
       e.preventDefault();
       const name = e.target.name.value;
       const email = e.target.email.value;
       const role = e.target.role.value;

       console.log(name,role,email);

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
           const newUsers = [...usersData,data]
           setUsers(newUsers);
           e.target.reset();
        //    console.log('Data after post',data);
       })

    }
    return (
        <div>

             <form onSubmit={handleAddUser}>
               <input type="text" name="name" id="" placeholder='Enter user name'/><br />
               <input type="text" name="email" id="" placeholder='Enter user email'/><br />
               <input type="text" name="role" id="" placeholder='Enter user role'/><br />
               <button type="submit">Add user</button>
           </form>
           {
            users.map(user => <ul>
                <li>{user.name}</li>
                
            </ul>)
           }

          
        </div>
    );
};

export default Users;