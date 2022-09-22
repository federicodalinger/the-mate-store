import ItemCount from "./ItemCount";
import Stack from '@mui/material/Stack';
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Description, Price, DescriptionStock } from "./styledComponents"
import { Link } from "react-router-dom";
import {Button} from "@mui/material";
import { useState } from 'react';


const ItemDetail = ({ item }) => {

    const [itemCount, setItemCount] = useState(0);

    const onAdd = (qty) => {
        setItemCount(qty);
    }

    return (
        <>
        {
            item && item.image?
                <DetailContainer>
                    <WrapperDetail>
                        <ImgContainer>
                            <ImageDetail src={item.image} />
                        </ImgContainer>
                            <Stack direction="column" spacing={1} >
                                <InfoContainer>
                                    <Stack direction="column" >
                                        <Title>{item.title}</Title> 
                                        <Description>{item.description}</Description>
                                        <Price>$ {item.price}</Price>
                                        <DescriptionStock>Stock: {item.stock} unidades</DescriptionStock>
                                    </Stack>
                                </InfoContainer>

                                {
                                    itemCount===0
                                    ? <ItemCount stock={item.stock} initial = {itemCount} onAdd={onAdd} />
                                    : <Button variant="contained" size="small" style={{textDecoration:"none"}} as={Link} to={'/cart'}>Checkout</Button>
                                }
                            
                            
                            </Stack>
                    </WrapperDetail>
                </DetailContainer>
                :
                <p>Cargando mate...</p>
        }
        </>
    );
}

export default ItemDetail