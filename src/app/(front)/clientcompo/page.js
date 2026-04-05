'use client';
import CounterApp from "@/components/CounterApp";
import { useEffect, useState } from "react";

const Clientcompo = () => {
    const url = 'https://jsonplaceholder.typicode.com/users'
    const [user, setUser] = useState([])
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setUser(data))
    })
    return (
        <div>
             <h1 className="text-3xl text-center p-8">Client Component</h1>
            <CounterApp />
            <ul>
                {user.map(user => <li key={user.id}>{user.name}</li>)
                }
            </ul>
        </div>
    );
};

export default Clientcompo;