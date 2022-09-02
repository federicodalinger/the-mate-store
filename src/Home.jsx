import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';


const Home = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Hola mundo y tutor de React!"/>
    </div>
  );


}
export default Home;