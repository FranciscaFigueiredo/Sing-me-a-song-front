import styled from "styled-components";

const CurrentSong = styled.div`
    width: 95vw;
    height: 140px;

    padding: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
`;

const SongInfo = styled.div`
    width: 50vw;

    padding: 10px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;
`;

const SongReactions = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding-top: 15px;
`;

export {
    CurrentSong,
    SongInfo,
    SongReactions,
};
