import React from 'react';

const Loading = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="animate-spin h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full text-5xl text-center"> Loading ...</div>
        </div>
    );
};

export default Loading;