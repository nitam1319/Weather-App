
import { styled } from "styled-components";


export const DivBackground = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: RGB(36,36,36);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    z-index: -2;
    position: absolute;
    color: #fff
`;
export const Image = styled.img`
    width: 100%;
    height: 100%;
    filter: blur(8px);
    z-index: -1;
    position: absolute;
`
export const DivShow = styled.div`
    width: 80%;
    height: 700px;
    background-image: url(/img/city2.jpg);
    background-position: center;
    background-size: cover;
    display: flex;
    align-items: center;
    box-shadow: 5px 5px 5px 5px rgba(55, 55, 55, 0.276);
    z-index: 1;
    @media (max-width: 768px){
        width: 100%;
    }
    @media (max-width: 540px){
        width: 100%;
        height: 100%;
        flex-direction: column;
    }
    overflow-y: auto;
    overflow-x: hidden;
`;
export const DivLeft = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: column-reverse;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 540px){
        width: 100%;

    }
`;
export const DivRight = styled(DivLeft)`
    width: 20%;
    min-width: 300px;
    background-color: rgba(0, 0, 0, 0.153);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    @media (max-width: 540px){
        width: 100%;
        background-color:rgba(0, 0, 0, 0.58);
    }
`;
export const SearchDiv = styled.div`
    width: 80%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;
export const Icon = styled.img`
    width: 90px;
    height: 90px;
`;
export const P = styled.p`
    color: #d8d8d8
`;

export const DivData = styled.div`
    width: 70%;
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-bottom: 50px;
    /* background-color: rgba(0, 0, 0, 0.285); */
`;
export const H = styled.h1`
    font-size: 100px;
    margin: 0;
    padding: 0;
`;
export const H1 = styled(H)`
    font-size: 50px;
`;
