import getYouTubeID from "get-youtube-id";
import { SongCardContainer } from "../styles/ContainerStyle";

export default function SongCard({ song }) {
    const {
        name,
        youtube_link,
    } = song;
    const youtubeLink = youtube_link;

    const idVideo = getYouTubeID(youtubeLink);
    const imageSrc = `http://img.youtube.com/vi/${idVideo}/maxresdefault.jpg`

    return (
        <SongCardContainer>
            <video src={ youtubeLink } poster={imageSrc} width='100%' height='100%' style={{marginTop: 0 + 'px', borderRadius: 10 + 'px'}} />
            <h4>{ name }</h4>
        </SongCardContainer>
    );
}
