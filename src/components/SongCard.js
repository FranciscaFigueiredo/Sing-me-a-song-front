import getYouTubeID from "get-youtube-id";
import { useContext } from "react";
import { SongContext } from "../contexts/SongContext";
import { SongCardContainer } from "../styles/ContainerStyle";

export default function SongCard({ song }) {
    const { setCurrentSong } = useContext(SongContext);

    const {
        name,
        youtube_link,
    } = song;
    const youtubeLink = youtube_link;

    const idVideo = getYouTubeID(youtubeLink);
    const imageSrc = `http://img.youtube.com/vi/${idVideo}/maxresdefault.jpg`;

    function player() {
        setCurrentSong(song);
    }

    return (
        <SongCardContainer onClick={ () => player(song) } >
            <video src={ youtubeLink } poster={imageSrc} width='100%' height='100%' style={{marginTop: 0 + 'px', borderRadius: 10 + 'px'}} />
            <h4>{ name }</h4>
        </SongCardContainer>
    );
}
