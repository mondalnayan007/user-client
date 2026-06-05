import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateProduct = () => {
    const productData = useLoaderData();
    console.log(productData);


    const handleUpdateProduct =(e)=>{
         e.preventDefault();
       const title = e.target.title.value;
       const description = e.target.description.value;
       const price = e.target.price.value;
       const url = e.target.url.value;
     

       const updateProduct = {title,description,price,url};

       fetch(`http://localhost:4000/products/${productData._id}`,{
        method:'PATCH',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateProduct)

       })
       .then(res=>res.json())
       .then(data => {
        console.log('after update',data);
       })
    }
    return (
        <div>
            <div className="w-full max-w-md mx-auto p-8 rounded-3xl bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)]">

                {/* Form Heading (Optional summary text) */}
               
                   <p className='text-xl font-bold'>Update the product</p>
                   
                

                <form onSubmit={handleUpdateProduct} className="space-y-4">
                    {/* Title Input */}
                    <div>
                        <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1.5">Product Title</label>
                        <input
                            type="text"
                            name="title"
                            required
                            defaultValue={productData.title}
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
                            defaultValue={productData.description}
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
                            defaultValue={productData.price}
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
                            defaultValue={productData.url}
                            placeholder="Enter the product image URL"
                            className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200/60 text-slate-800 placeholder-slate-400 text-sm font-medium transition-all duration-200 outline-none focus:bg-white focus:border-slate-900 focus:ring-4 focus:ring-slate-900/5"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                        <button className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm rounded-xl transition-all duration-200 active:scale-[0.98] focus:outline-none shadow-md shadow-slate-900/10">
                            Update Product
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;