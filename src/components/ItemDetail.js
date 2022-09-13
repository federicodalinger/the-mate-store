import ItemCount from "./ItemCount";
import Stack from '@mui/material/Stack';
import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Description, Price, DescriptionStock } from "./styledComponents"


const ItemDetail = ({ item }) => {

    return (
        <>
        {
            item.image?
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
                                <ItemCount stock={item.stock} initial = {1} />
                            </Stack>
                    </WrapperDetail>
                </DetailContainer>
                :
                <p>Loading...</p>
        }
        </>
    );
}

export default ItemDetail