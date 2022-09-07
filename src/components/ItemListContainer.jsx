import { Wrapper } from "./styledComponents";
import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting}) => {

    const onAdd = () => {
        alert("You have added some items.");
    }

    return (
        <>
            <Wrapper>{greeting}</Wrapper>
            <ItemCount 
                stock = {10} //ahora esta hardcodeado
                initial = {1}
                onAdd={onAdd}
            />
        </>
    );
}

export default ItemListContainer;