import { toast } from 'react-toastify';
import {useEffect, useState} from 'react'
import StepsHeader from './StepsHeader'
import ProductsList from './ProductsList'
import ProductCard from './ProductCard'
import {OrderLocationData, Product} from './types'
import { fetchProducts, saveOrder } from '../api'
import OrderLocation from './orderLocation'
import OrderSummary from './OrderSummary'
import { checkIsSelected } from './helpers'
import './styles.css'


function Orders(){
    const [products,setProducts] = useState<Product []>([])
    const [selectedProducts,setSelectedProducts] = useState<Product []>([])
    const [orderLocation, setOrderLocation] = useState<OrderLocationData >()
    const totalPrice = selectedProducts.reduce((sum,item) =>{
            return sum + item.price
    },0)

    useEffect(() =>{
        fetchProducts()
                    .then(response => setProducts( response.data))
                    .catch(error => console.log(error))
    }, []) 
    
    const handleSelectProduct = (product: Product) => {
        const isAlreadySelected = checkIsSelected(selectedProducts, product);
      
        if (isAlreadySelected) {
          const selected = selectedProducts.filter(item => item.id !== product.id);
          setSelectedProducts(selected);
        } else {
          setSelectedProducts(previous => [...previous, product]);
        }
      }

      const handleSubmit = () => {
        const productsIds = selectedProducts.map(({ id }) => ({ id }));
        const payload = {
          ...orderLocation!,
          products: productsIds
        }
      
        saveOrder(payload).then((response) => {
          toast.error(`Pedido enviado com sucesso! N°${response.data.id}`);
          setSelectedProducts([]);
        })
          .catch(() => {
            toast.warning('Erro ao enviar pedido');
          })
      }

    return(
        <div className="Orders-container">
            <StepsHeader />
            <ProductsList 
                products={products}
                onSelecteProduct={handleSelectProduct}
                selectedProducts={selectedProducts}
                />
            <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
            <OrderSummary 
                amount={selectedProducts.length} 
                totalPrice={totalPrice}
                onSubmit={handleSubmit}/>
        </div>
    )
}
export default Orders