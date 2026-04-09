'use client'

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ClientFetching = () => {
    const user = useSearchParams();
    const userName = user.get('name') || 'nirob';
    const [data, setData] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api.genderize.io?name=${userName}`)
            const data = await res.json()
            console.log('data is here', data);
            setData(data);
        }
        fetchData();
    }, [userName])

    return (
        <div className='p-4 bg-blue-300 rounded-lg '>
            <h1 className='text-2xl font-bold mb-4'>{data.name}</h1>
            <p className='text-lg'>Gender: {data.gender}</p>
            <p className='text-lg'>Probability: {data.probability && data.probability * 100}</p>
            <p className='text-lg'>Count: {data.count}</p>
        </div>
    );
};

export default ClientFetching;