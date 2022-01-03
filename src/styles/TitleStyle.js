import styled from "styled-components";

const Title1 = styled.div`
    width: 50vw;
    height: 40px;

    color: #fab23d;
    font-size: 30px;
    font-family: 'Permanent Marker', cursive;

    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const Title2 = styled.div`
    width: 50vw;
    height: 40px;
    
    color: #ffc812;
    font-size: 36px;
    font-family: 'Permanent Marker', cursive;

    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Line = styled.div`
    width: 40vw;
    height: 2px;
    
    background-color: #ffc812;
`;

export {
    Title1,
    Title2,
    Line,
};
