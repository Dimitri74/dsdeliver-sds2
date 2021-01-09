import React, { useEffect, useState } from 'react';
import { fetchProducts } from './api';
import ProductList from './ProductsList';
import StepsHeaders from './StepsHeaders';
import './styles.css'
import { Product } from './types';

function Orders() {
    const [products, setProduct] = useState<Product[]>([]);
    console.log(products)
    useEffect(() => {
        fetchProducts()
        .then(response => setProduct(response.data))
        .catch(error => console.log(error))
              
     },[] );
    return (
        <div className="orders-container">
           <StepsHeaders/>
           <ProductList products={products}/>
        </div>
  
    )
  }
  
  export default Orders;