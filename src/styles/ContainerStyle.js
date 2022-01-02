import styled from "styled-components";

const ContainerPage = styled.div`
    max-width: 95vw;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 auto;

    overflow: 0;

    form {
        text-align: center;
        margin: 20px auto 0;
    }

    a {
        color: #ffffff;
        font-size: 18px;
        font-weight: bold;
        line-height: 21px;
    }
`;

const HeaderContainer = styled.div`
    width: 100vw;
    height: 120px;

    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 0 auto;

    position: fixed;
    top: 0;
    left: 0;
`;

const LineContainer = styled.div`
    width: 90vw;
    height: 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 10px;
`;

export {
    ContainerPage,
    HeaderContainer,
    LineContainer,
};
