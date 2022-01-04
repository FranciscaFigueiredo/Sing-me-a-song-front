import SongCard from "./SongCard";
import { SongsContainer } from "../styles/ContainerStyle";
import { Line } from "../styles/TitleStyle";

export default function Songs({ songs }) {
    return (
        <>
            <h2>Top músicas</h2>
            <Line />
            <SongsContainer>
                {
                    songs.length ?
                        songs.map((song) => <SongCard song={song} />)
                    :   <h3>Não há músicas registradas</h3>
                }
            </SongsContainer>
        </>
    );
}
