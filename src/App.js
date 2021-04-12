
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "bootswatch/dist/materia/bootstrap.min.css";
import './App.css'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import NavbarCom from './components/NavbarCom';
import OffersProduct from './components/OffersProducts'
import ProductsContextProvider from './Global/ProductsContext'
import Cart from './components/Cart'
import Grocery from './components/Grocery'
import Clothes from './components/Clothes'
import Gadgets from './components/Gadgets'
import PageNotFound from './components/PageNotFound'
import CartContextProvider from './Global/CartContext'


function App() {
  return (
    <div>
    <ProductsContextProvider>
    <CartContextProvider>
      <Router>
      <NavbarCom/>
        <Switch>
          <Route path='/React-Grocery-Ecommerce-site' exact component={OffersProduct}/>
          <Route path='/cart' exact component={Cart}/>
          <Route path='/grocery' exact component={Grocery}/>
          <Route path='/clothes' exact component={Clothes}/>
          <Route path='/gadgets' exact component={Gadgets}/>
          <Route  component={PageNotFound}/>
        </Switch>
      </Router>
      </CartContextProvider>
     </ProductsContextProvider>
    </div>
  );
}

export default App;
