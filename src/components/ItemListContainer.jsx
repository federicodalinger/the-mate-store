import { Wrapper } from "./styledComponents";
// // import ItemCount from "./ItemCount";
import ItemList from "../containers/ItemList";

const ItemListContainer = ({greeting}) => {

    return (
        <>
            <Wrapper>{greeting}</Wrapper>
            {/* <ItemCount 
                stock = {10} 
                initial = {1}
            /> */}
            <ItemList/>
        </>
    );
}

export default ItemListContainer;