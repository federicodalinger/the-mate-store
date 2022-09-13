import NavBar from './components/NavBar';
// import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return <>
    {/* //Aca ponemos el NavBar dentro de ./src/components/ */}
    <NavBar />
    {/* <ItemListContainer greeting="En esta sección se encuentran los mates a la venta:"/> */}
    <ItemDetailContainer />
  
  </>;

}
export default App;