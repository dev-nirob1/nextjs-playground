import { useState } from "react";

const CounterApp = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="bg-gray-200 p-10">
            <h1 className="text-3xl text-center font-bold">Counter App</h1>
            <div className="flex gap-4 items-center justify-center p-4">
                <button className="px-5 py-2 bg-red-500" onClick={() => setCount(count - 1)}>Decrease</button>
                <span className="text-2xl font-bold">{count}</span>
                <button className="px-5 py-2 bg-blue-500" onClick={() => setCount(count + 1)}>Increase</button>
            </div>

        </div>
    )
}
export default CounterApp;