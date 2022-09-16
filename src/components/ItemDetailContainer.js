import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import customFetch from '../utils/customFetch';
import ItemDetail from './ItemDetail';
import dataFromBD from '../utils/data';

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);
  const { idItem } = useParams();

  useEffect(() => {
      customFetch(2000, dataFromBD.find(item => item.id === parseInt(idItem)))
        .then(result => setData(result))
        .catch(err => console.log(err))
  }, [idItem]);

    return (
        <ItemDetail item={data}/>
    );
}

export default ItemDetailContainer;