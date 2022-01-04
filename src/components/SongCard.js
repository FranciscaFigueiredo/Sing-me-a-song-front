import getYouTubeID from "get-youtube-id";
import ReactPlayer from "react-player";
import { SongCardContainer } from "../styles/ContainerStyle";

export default function SongCard({ song }) {
    const {
        name,
        youtube_link,
        score,
    } = song;
    const youtubeLink = youtube_link;

    const idVideo = getYouTubeID(youtubeLink);
    const imageSrc = `http://img.youtube.com/vi/${idVideo}/maxresdefault.jpg`

    let validationURL = youtubeLink.match(/(http(s)?:\/\/.)?(www\.)?(youtube\.)?(com\/watch)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)
    return (
        <SongCardContainer>
            <video src={ youtubeLink } poster={imageSrc} width='100%' height='100%' style={{marginTop: 0 + 'px', borderRadius: 10 + 'px'}} />
            {/* <ReactPlayer url={validationURL} controls={false} width="90%" height="60%" /> */}
            <h4>{ name }</h4>
        </SongCardContainer>
    );
}
