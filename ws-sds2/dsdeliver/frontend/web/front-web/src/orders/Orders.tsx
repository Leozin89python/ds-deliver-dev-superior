import './styles.css'

import {useEffect, useState} from 'react'

import StepsHeader from './StepsHeader'
import ProductsList from './ProductsList'
import ProductCard from './ProductCard'

import {Product} from './types'
import { fetchProducts } from '../api'
import OrderLocation from './orderLocation'

function Orders(){
    const [products,setProducts] = useState<Product []>([])

    useEffect(() =>{
        fetchProducts()
                    .then(response => setProducts( response.data))
                    .catch(error => console.log(error))
    }, []) 
    
    return(
        <div className="Orders-container">
            <StepsHeader />
            <ProductsList products={products}/>
            <OrderLocation />
        </div>
    )
}
export default Orders