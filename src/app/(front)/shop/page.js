'use client';

import { useSearchParams } from "next/navigation";

const Shop = () => {
    const params = useSearchParams();
    const company = params.get('company');
    console.log('params', company);
    return (
        <div>
            shop page
        </div>
    );
};

export default Shop;