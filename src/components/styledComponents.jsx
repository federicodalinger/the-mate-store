import styled from "styled-components";

const Wrapper = styled.div`
    padding: 0.5rem 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(65,148,74);
`;

const WrapperBackground = styled.div`
    padding: 0.5rem 5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(179,92,62);
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;    
`;

const Center = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.h1`
    font-weight: bold;
    margin-left: 0rem;
    cursor: pointer;
`;

const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const MenuItem = styled.div`
    font-size: 18px;
    cursor: pointer;
    margin-left: 4rem;
`;

/*Agregado de entrega 06*/

const DetailContainer = styled.div`
    padding: 1rem 1rem;
    display: flex;
    flex-flow: column;

    align-items: center;
    justify-content: space-between;
    background-color: rgb(179,92,62);
`;

const WrapperDetail = styled.div`
    flex=1;
    padding: 1rem 1rem;
    display: flex;
    flex-flow: row;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(179,92,62);
    
`;

const ImgContainer = styled.div`
    flex=1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgb(65,148,74);
    
`;

const ImageDetail = styled.img`
    flex=1;
    padding: 0.5rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 25rem;
    height: 25rem;
    border: 0.01rem solid black;
`;

const ImageDetailCart = styled.img`
    flex=1;
    padding: 0.5rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 12.5rem;
    height: 12.5rem;
    border: 0.01rem solid black;
`;

const InfoContainer = styled.div`
    flex=1;
    padding: 1rem 1rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    direction: column;
    width: 20rem;
    
`;

const Title = styled.div`
    flex=1;
    padding: 0.25rem 0rem 0.75rem 0rem;
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    text-align: center;
    justify-content: space-between;
    font-weight: bold;
    font-size: 1.5rem;
`;

const Description = styled.p`
    flex=1;
    padding: 0rem 0rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
    text-align: justify;

`;

const DescriptionStock = styled.div`
    flex=1;
    padding: 0rem 0rem;
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    justify-content: space-between;
    font-size: 1rem;
`;

const Price = styled.div`
    flex=1;
    padding: 0.25rem 0rem 0rem 0rem ;
    display: flex;
    flex-flow: column;
    align-items: flex-end;
    font-weight: bold;
    justify-content: space-between;
    font-size: 1rem;
`;

const ItemCountContainer = styled.div`
    flex=1;
    padding: 1rem 0rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: space-between;
    font-size: 1rem;
`;

export {Wrapper, WrapperBackground, Logo, MenuItem, Left, Center, Right, DetailContainer, WrapperDetail, ImgContainer, ImageDetail, ImageDetailCart, InfoContainer, Title, Description, Price, ItemCountContainer, DescriptionStock}