import Image from 'next/image';
import React from 'react';

const PropertyDetails = async ({params}) => {
    const { id } = await params;
    console.log(id);
    const res = await fetch(`http://localhost:3000/api/properties/${id}`);
    const data = await res.json();
    console.log(data);
    return (
        <div>
            <div>
                <h1 className="text-3xl text-center">Property Details</h1>
                <Image src={data?.singleProperty?.image} alt={data.singleProperty.title} width={600} height={400} />
                <h2>{data.singleProperty.title}</h2>
                <p>${data.singleProperty.price}</p>
                <p>{data.singleProperty.address}</p>
                <p>{data.singleProperty.PropertyDetails}</p>
                <p>{data.singleProperty.description}</p>
            </div>
        </div>
    );
};

export default PropertyDetails;