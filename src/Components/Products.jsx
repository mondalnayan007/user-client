import React, { use } from 'react';
import ProductsCard from './ProductsCard';




const Products = ({ productsPromise }) => {

    const products = use(productsPromise);
    console.log(products);
    return (
        <div>
            <div className='grid grid-cols-3 gap-3'>
                {
                    products.map(product => <ProductsCard key={product.id} product={product}></ProductsCard>)
                }


            </div>
            <div>
                <form >
                    
                </form>
            </div>
        </div>
    );
};

export default Products;