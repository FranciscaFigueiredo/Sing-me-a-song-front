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

const ContainerContent = styled.div`
    max-width: 95vw;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    margin: 160px auto 0;

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

const SongsContainer = styled.div`
    width: 95vw;
    height: auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    margin: 10px auto 140px;
`;

const Container = styled.div`
    width: 95vw;
    height: auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    margin: 10px auto 140px;

    h2 {
        margin-left: 2.5vw;
    }
`;

const SongCardContainer = styled.div`
    width: 42vw;
    height: 38vw;

    background-color: #383838;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin: 10px auto;
    padding: 10px;

    h4 {
        font-size: 16px;
        font-weight: normal;

        margin: 5px auto;
    }
`;

const FooterContainer = styled.div`
    width: 100vw;
    height: 140px;

    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;

    position: fixed;
    bottom: 0;
    left: 0;
`;

export {
    ContainerPage,
    ContainerContent,
    HeaderContainer,
    LineContainer,
    SongsContainer,
    Container,
    SongCardContainer,
    FooterContainer,
};
