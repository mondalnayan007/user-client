import React, { use, useState } from 'react';
import ProductsCard from './ProductsCard';




const Products = ({ productsPromise }) => {

    const products = use(productsPromise);

    const [product,setProduct]= useState(products)


    const handleAddNewProduct = (e) => {
       e.preventDefault();
       const title = e.target.title.value;
       const description = e.target.description.value;
       const price = e.target.price.value;
       const url = e.target.url.value;
       console.log(title,description,price,url,typeof(price));

       const newProduct = {title,description,price,url};


       fetch('http://localhost:4000/products',{
             method: 'POST',
             headers: {
                'Content-type': 'application/json'
             },
             body: JSON.stringify(newProduct)
       })
       .then(res => res.json())
       .then(data => {
             const newProduct = [...product,data];
             setProduct(newProduct);
             e.target.reset();
       })

    }

    
    console.log(products);
    return (
        <div>
            <div className='grid grid-cols-3 gap-3'>
                {
                    product.map(product => <ProductsCard key={product.id} product={product}></ProductsCard>)
                }


            </div>
            <div className="w-full max-w-md mx-auto p-8 rounded-3xl bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">

                {/* Form Heading (Optional summary text) */}
                <div className="mb-6">
                    <h2 className="text-xl font-bold text-slate-800 tracking-tight">Create New Product</h2>
                    <p className="text-xs text-slate-400 mt-1">Fill up the details to list a brand new item.</p>
                </div>

                <form onSubmit={handleAddNewProduct} className="space-y-4">
                    {/* Title Input */}
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Product Title</label>
                        <input
                            type="text"
                            name="title"
                            required
                            placeholder="Enter the product title"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-800 placeholder-slate-400 text-sm font-medium transition-all duration-200 outline-none focus:bg-white focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
                        />
                    </div>

                    {/* Description Input */}
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Description</label>
                        <input
                            type="text"
                            name="description"
                            required
                            placeholder="Enter the product Description"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-800 placeholder-slate-400 text-sm font-medium transition-all duration-200 outline-none focus:bg-white focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
                        />
                    </div>

                    {/* Price Input */}
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Price (USD)</label>
                        <input
                            type="number"
                            name="price"
                            required
                            placeholder="Enter the product price"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-800 placeholder-slate-400 text-sm font-medium transition-all duration-200 outline-none focus:bg-white focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
                        />
                    </div>

                    {/* Image URL Input */}
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Image URL</label>
                        <input
                            type="text"
                            name="url"
                            required
                            placeholder="Enter the product image URL"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-800 placeholder-slate-400 text-sm font-medium transition-all duration-200 outline-none focus:bg-white focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                        <button className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl transition-all duration-200 active:scale-[0.98] focus:outline-none shadow-md shadow-slate-900/10">
                            Add New Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Products;