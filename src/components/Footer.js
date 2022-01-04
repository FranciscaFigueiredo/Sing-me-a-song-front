import { useContext } from "react";
import { FaPlay } from "react-icons/fa";
import { IoHeartDislikeOutline, IoHeartOutline } from "react-icons/io5";
import ReactPlayer from "react-player";
import { SongContext } from "../contexts/SongContext";
import { FooterContainer } from "../styles/ContainerStyle";
import { SongInfo, CurrentSong, SongReactions } from "../styles/FooterStyle";
import { Line } from "../styles/TitleStyle";

export default function Footer() {
    const { currentSong } = useContext(SongContext);

    let validationURL = currentSong?.youtube_link.match(/(http(s)?:\/\/.)?(www\.)?(youtube\.)?(com\/watch)([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);

    return (
        <FooterContainer>
            <Line style={{width: 90 + 'vw'}} />
            <CurrentSong>
                <ReactPlayer url={validationURL} controls={false} width="32vw" height="18vw" style={{borderRadius: 10 + 'px'}} />
                <SongInfo>
                    <h3>{currentSong.name}</h3>
                    <SongReactions>
                        <h2><FaPlay /></h2>
                        <h2><IoHeartDislikeOutline /></h2>
                        <h2><IoHeartOutline /></h2>
                    </SongReactions>
                </SongInfo>
            </CurrentSong>
        </FooterContainer>
    );
}
