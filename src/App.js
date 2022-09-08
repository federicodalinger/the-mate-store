import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return <>
    {/* //Aca ponemos el NavBar dentro de ./src/components/ */}
    <NavBar />
    <ItemListContainer greeting="Hola mundo y tutor de React!"/>
  
  </>;

}
export default App;