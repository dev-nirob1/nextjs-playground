'use client';
import { useEffect, useState } from "react";

const url = 'https://jsonplaceholder.typicode.com/users'
 const Clientcompo = () => {
    const [user, setUser] = useState([])
    useEffect(()=> {
        fetch(url)
        .then (res => res.json())
        .then(data => setUser(data))
    })
    return (
        <div>
            <ul>
                {user.map(user => <li key={user.id}>{user.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Clientcompo;