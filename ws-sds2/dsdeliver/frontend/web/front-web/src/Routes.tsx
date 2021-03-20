import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Orders from './orders/Orders'
import Home from './home/index'
import Navbar from './Navbar/index'
import Footer from './footer/index'


function Routes(){
    return (
        <BrowserRouter> 
            <Navbar /> 
            <Switch>
                <Route exact={true} path="/orders">
                    <Orders />
                </Route>
                <Route  exact={true} path="/">
                    <Home />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    )
}

export default Routes