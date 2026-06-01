import React, { use } from 'react';

const Users = ({userPromise}) => {

    const usersData = use(userPromise);
    console.log(usersData);
    return (
        <div>
           {
            usersData.map(user => <ul>
                <li>{user.name}</li>
                <li>{user.status}</li>
            </ul>)
           }
        </div>
    );
};

export default Users;