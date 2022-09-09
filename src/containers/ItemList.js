import { useState, useEffect } from 'react'
import Item from '../components/Item';
import customFetch from '../utils/customFetch';
import dataFromBD from '../utils/data';

const ItemList = () => {
  const [data, setData] = useState([])
  //componentDidMount
  useEffect(() => {
      // aqui hago lo que quiero hacer cuando el componente se monte en el DOM
      // en este caso, consulto a la BD
      customFetch(2000, dataFromBD)
        .then(datos => setData(dataFromBD))
        .catch(err => console.log(err))
  }, []);

    return (
        <>
        {
          data.length ? 
              data.map(item => (
                <Item
                        key={item.id}
                        start={0}
                        title={item.title}
                        dateAdded={item.dateAdded}
                        channel={item.channel}
                        thumbnail={item.thumbnail}
                        description={item.description}
                        stock={item.stock}
                        initial={1} 
                        
                />
              ))
              : <p>Cargando datos....</p>
        }
        </>
    );
}

export default ItemList;