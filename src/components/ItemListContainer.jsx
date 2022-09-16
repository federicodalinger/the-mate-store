// // import ItemCount from './ItemCount';
import ItemList from './ItemList';
// // import { Wrapper } from './styledComponents';
import customFetch from "../utils/customFetch";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import dataFromBD from '../utils/data';

const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();

    console.log(idCategory);

    //componentDidUpdate
    useEffect(() => {
        customFetch(2000, dataFromBD.filter(item => {
            if (idCategory === undefined) return item;
            return item.categoryId === parseInt(idCategory)
        }))
            .then(result => setDatos(result))
            .catch(err => console.log(err))
    }, [idCategory]);

    // // const onAdd = (qty) => {
    // //     alert("You have selected " + qty + " items.");
    // // }

    return (
        <>  
            <ItemList items={datos} />
        </>
    );
}

export default ItemListContainer;