import Link from 'next/link';
import React from 'react';

const Posts = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    console.log(data)
    return (
        <div className='container mx-auto py-16'>
            <div className="grid grid-cols-3 gap-8">
               { data.map((post) => (
                    <div className="p-4 border rounded-md" key={post.id}>
                        <h3 className="text-2xl font-bold">
                            {post.title}
                        </h3>
                        <p>{post.body}</p>
                        <Link href={`/posts/${post.id}`} className="text-blue-500 hover:underline">
                            Read more
                        </Link>
                    </div>
                ))}
            </div>
            posts route
        </div>
    );
};

export default Posts;