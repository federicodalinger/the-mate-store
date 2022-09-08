import { Wrapper } from "./styledComponents";
import ItemCount from "./ItemCount"

const ItemListContainer = ({greeting}) => {

    // // const onAdd = (rate) => {
    // //     console.log(rate);
    // //     alert("You have added some items." + rate);
    // // }

    return (
        <>
            <Wrapper>{greeting}</Wrapper>
            <ItemCount 
                stock = {10} //ahora esta hardcodeado
                initial = {1}
                // // onAdd={onAdd}
            />
        </>
    );
}

export default ItemListContainer;