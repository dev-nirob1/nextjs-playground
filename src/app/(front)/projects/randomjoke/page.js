'use client';

import { useEffect, useState } from "react";

const RandomJoke = () => {
    const [joke, setJoke] = useState({});
    const [showPunchline, setShowPunchline] = useState(false);
    // api url to get random joke from the API
    const url = "https://official-joke-api.appspot.com/random_joke";
    //fetch function to get random joke from the API
    const randomJokeFetch = async () => {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setJoke(data);
    }
    // useEffect to call the fetch function when the component mounts
    useEffect(() => {
        randomJokeFetch();
    }, []);
    return (
        <div className='flex items-center justify-center min-h-screen w-full bg-pink-100'>
            <div className='space-y-4 bg-pink-500 max-w-md w-full p-6 rounded-lg shadow-lg text-center text-white'>
                <h2 className="text-2xl">Random Joke</h2>
                <p>{joke.setup}</p>
                {
                    showPunchline ?
                        (<div>
                            <p className="font-bold mb-4">{joke.punchline}</p>
                            <button className="w-full bg-red-400 px-4 py-2 cursor-pointer" onClick={() => setShowPunchline(false)}>Hide Punchline</button>
                        </div>)
                        :
                        (<button onClick={() => setShowPunchline(true)} className="w-full bg-blue-400 px-4 py-2 cursor-pointer">
                            Reveal Punchline
                        </button>)
                }
                <div>
                    <button className="w-full px-4 py-2 bg-green-400 cursor-pointer" onClick={randomJokeFetch}>
                        New Joke
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RandomJoke;