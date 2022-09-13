import { WrapperBackground } from "./styledComponents";

import ItemList from "../containers/ItemList";


const ItemListContainer = ({greeting}) => {

    return (
        <>
            <WrapperBackground>{greeting}</WrapperBackground>
            <ItemList/>
        </>
    );
}

export default ItemListContainer;