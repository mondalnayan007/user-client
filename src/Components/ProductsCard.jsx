import React from 'react';

const ProductsCard = ({ product }) => {
    // Uporer data structure theke properties destructuring
    const { title, description, price,url } = product;

    return (
        /* Minimalist Card Container for White Background */
        <div className="w-full max-w-sm rounded-2xl bg-white border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden group transition-all duration-300 hover:shadow-[0_12px_30px_rgba(0,0,0,0.06)] hover:-translate-y-1">
            
            {/* Product Image Section */}
            <div className="relative h-56 w-full overflow-hidden bg-slate-50">
                <img 
                    src={url} 
                    alt={title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Product Content Section */}
            <div className="p-5 flex flex-col justify-between h-48">
                <div>
                    {/* Product Title */}
                    <h3 className="text-lg font-bold text-slate-800 tracking-tight line-clamp-1 group-hover:text-indigo-600 transition-colors duration-200">
                        {title}
                    </h3>
                    
                    {/* Product Description (Limit to 2 lines) */}
                    <p className="text-sm text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Card Footer: Price & Add Button */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-slate-50">
                    <div>
                        <span className="text-xs text-slate-400 font-medium block">Price</span>
                        <span className="text-xl font-extrabold text-slate-900">${price}</span>
                    </div>
                    
                    {/* Minimalist Action Button */}
                    <button className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg transition-all duration-200 active:scale-95 focus:outline-none shadow-sm">
                        Add to Cart
                    </button>
                </div>
            </div>

        </div>
    );
};

export default ProductsCard;