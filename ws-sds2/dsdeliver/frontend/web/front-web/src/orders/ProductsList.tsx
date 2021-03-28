import { checkIsSelected } from './helpers'
import ProductCard from './ProductCard' 
import { Product } from './types'

type props = {
    products :Product[],
    selectedProducts :Product[],
    onSelecteProduct :(product :Product) => void
}

function ProductsList({ products, onSelecteProduct, selectedProducts }: props) {
    return(
        <div className="orders-list-container">
            <div className="orders-list-items">
               {
                   
                    products.map(product =>(
                        <ProductCard 
                            key={product.id} 
                            product={product}
                            onSelecteProduct={onSelecteProduct}
                            isSelected={checkIsSelected(selectedProducts, product)}/>
                    ))


                }
            </div>
        </div>
    )
}

export default ProductsList