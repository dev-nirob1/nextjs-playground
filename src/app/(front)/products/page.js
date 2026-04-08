import React from 'react';

const Products = async (props) => {
    const query = await props.searchParams;
    const category = query.category
    const quantity = query.quantity
    const page = query.page
    // const category = query.get('category')
    //    const quantity = query.get('quantity')
    //    const page = query.get('page')
    // console.log(query.get('category'));
    return (
        <div>
            Products category: {category} <br />
            Products quantity: {quantity} <br />
            Products page: {page} <br /> 
        </div>
    );
};

export default Products;