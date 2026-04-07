import React from 'react';

const PostDetails = async ({ params }) => {
    const { id } = await params
    console.log('id is here', id);
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json()
    // console.log( params.id);
    return (
        <div><span>{data.id}</span>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
        </div>
    );
};

export default PostDetails;