import { useContext } from "react";
import { CartContext } from "./CartContext";
import { WrapperDetail, ImgContainer, ImageDetailCart, DescriptionStock } from "./styledComponents";
import { Title, Price, InfoContainer } from "./styledComponents";
import Stack from '@mui/material/Stack';


const Cart = () => {
    const ctx = useContext(CartContext); //useState, useParams, UseEffect, todos esos son "Hooks".
    //ctx viene de abreviar context

    return (
        <>
            <h1>Cart</h1>
            <button onClick={ctx.clear}>Delete All Elements</button>

            {
                ctx.cartList.map(item=>

                        <WrapperDetail>
                            <ImgContainer>
                                <ImageDetailCart src={item.image} />
                            </ImgContainer>
                                <Stack direction="column" spacing={1} >
                                    <InfoContainer>
                                        <Stack direction="column" >
                                            <Title>{item.title}</Title> 
                                            <Price>$ {item.price}</Price>
                                            <DescriptionStock>Quantity: {item.qty}</DescriptionStock>
                                            <button onClick={() => ctx.removeItem(item.id)}>Delete this element</button>
                                        </Stack>
                                    </InfoContainer>
                                </Stack>
                        </WrapperDetail>
                )
            }
        </>
    );
}

export default Cart;