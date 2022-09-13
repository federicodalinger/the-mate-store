import { useState, useEffect } from 'react'
import customFetch from '../utils/customFetch';
import ItemDetail from '../components/ItemDetail';
import dataFromBD from '../utils/data';

const ItemDetailContainer = () => {
  const [data, setData] = useState([])

  useEffect(() => {
      customFetch(2000, dataFromBD[0])
        .then(result => setData(result))
        .catch(err => console.log(err))
  }, []);

    return (
        <ItemDetail item={data}/>
    );
}

export default ItemDetailContainer;