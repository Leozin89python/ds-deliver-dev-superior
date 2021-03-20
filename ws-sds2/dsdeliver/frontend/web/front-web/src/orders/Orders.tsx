import './styles.css'

import StepsHeader from './StepsHeader'
import ProductsList from './ProductsList'
import ProductCard from './ProductCard'

function Orders(){
    return(
        <div className="Orders-container">
            <StepsHeader />
            <ProductsList />
        </div>
    )
}
export default Orders