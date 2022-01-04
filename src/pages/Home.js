import { useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Songs from "../components/Songs";
import { SongContext } from "../contexts/SongContext";
import { ContainerContent, ContainerPage } from "../styles/ContainerStyle";
import { Button } from "../styles/Interactives";

export default function Home() {
    const { currentSong } = useContext(SongContext);

    const songs = [];


    return (
        <ContainerPage>
            <Header />
            <ContainerContent>
                <Button>Tocar aleatoriamente</Button>
                <Button>Postar recomendações</Button>
                <Songs songs={ songs } />
                {
                    currentSong ?
                        <Footer />
                    :   ''
                }
            </ContainerContent>
        </ContainerPage>
    );
}
