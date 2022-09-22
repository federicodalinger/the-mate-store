import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

import {BrowserRouter, Routes, Route} from "react-router-dom";

import Cart from './components/Cart';

function App() {
  return <>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:idCategory" element={<ItemListContainer />} />
        <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      {/* <ItemDetailContainer /> */}
    </BrowserRouter>
  </>;

}
export default App;