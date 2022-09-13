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

export {Wrapper, WrapperBackground, Logo, MenuItem, Left, Center, Right}