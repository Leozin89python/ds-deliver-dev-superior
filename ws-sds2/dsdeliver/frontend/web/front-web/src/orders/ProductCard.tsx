import { Product } from './types'


type props = {
    product : Product,
    isSelected :boolean,
    onSelecteProduct :(product :Product) => void
}

function formatPrice(price: number){
    const formatter = new   Intl.NumberFormat('pt-BR',{
        style:'currency',
        currency:'BRL'
    })
    return formatter.format(price)
}
                        
function ProductCard({ product, onSelecteProduct, isSelected }: props) {
    return(
        <div 
            className={`order-card-container ${isSelected ? 'selected' : ''}`}
            onClick={() => onSelecteProduct(product)}
        >
            <h3 className="order-card-title">
                {product.name}
            </h3>
            <img 
                src={product.imageUri}
                className="order-card-image"
                />
            <h3 className="order-card-price">
                { formatPrice(product.price)}
            </h3>
            <div className="order-card-description">
                <h3>Descrição</h3>
                <p>
                    {product.description}
                </p>
            </div>
        </div>
    )
}

export default ProductCard