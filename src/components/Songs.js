import SongCard from "./SongCard";
import { Container, SongsContainer } from "../styles/ContainerStyle";
import { Line } from "../styles/TitleStyle";

export default function Songs({ songs }) {
    return (
        <Container>
            <h2>Top músicas</h2>
            <Line style={{marginLeft: 2.5 + 'vw', marginTop: 10 + 'px'}} />
            <SongsContainer>
                {
                    songs.length ?
                        songs.map((song, index) => <SongCard key={index} song={song} />)
                    :   <h3>Não há músicas registradas</h3>
                }
            </SongsContainer>
        </Container>
    );
}
