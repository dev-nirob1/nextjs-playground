import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Project = async () => {
    const res = await fetch('http://localhost:3000/api/properties');
    const data = await res.json();
    console.log(data);
    return (
        <div>
            All property
            <div className="grid grid-cols-3 gap-8">
                {
                    data.properties.map(item => {
                        return <div key={item._id} className="border rounded overflow-hidden">
                            <div className='w-full h-48 relative'>
                                <Image className='w-full h-full' src={item.image} alt={item.title} width={400} height={200} />
                            </div>
                            <div className="p-4">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <Link href={`/project/${item._id}`} className="p-2 block bg-blue-500 text-white rounded hover:bg-blue-600">View Details</Link>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Project;