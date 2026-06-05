import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateProduct = () => {
    const productData = useLoaderData();
    console.log(productData);
    return (
        <div>
            update products
        </div>
    );
};

export default UpdateProduct;