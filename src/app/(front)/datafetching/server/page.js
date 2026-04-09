import React from 'react';

const ServerFetching = async ({searchParams}) => {
    // console.log(searchParams);
    // getting query params 
    const userName = await searchParams
    console.log(userName);
    // fetching data from api
    const res = await fetch(`https://api.genderize.io?name=${userName.name}`)
    const data = await res.json()
    // console.log('data is here', data);
    return (
        <div className='p-4 bg-blue-300 rounded-lg '>
            <h1 className='text-2xl font-bold mb-4'>{data.name}</h1> 
            <p className='text-lg'>Gender: {data.gender}</p>
            <p className='text-lg'>Probability: {data.probability && data.probability * 100}</p>
            <p className='text-lg'>Count: {data.count}</p>
        </div>
    );
};

export default ServerFetching;