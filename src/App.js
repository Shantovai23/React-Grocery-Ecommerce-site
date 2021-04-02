
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import "bootswatch/dist/materia/bootstrap.min.css";
import './App.css'
import NavbarCom from './components/NavbarCom';
import Slider from './components/Slider'
import OffersProduct from './components/OffersProducts'
import ProductsContextProvider from './Global/ProductsContext'

function App() {
  return (
    <div>
     <NavbarCom/>
     <Slider/>
     <ProductsContextProvider>
     <OffersProduct/>
     </ProductsContextProvider>
    </div>
  );
}

export default App;
