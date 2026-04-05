import React from 'react';

const servercompo = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const res = await fetch(url)
    const data = await res.json()
    return (
        <div>
            <ul>
                {data.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
        </div>
    );
};

export default servercompo;