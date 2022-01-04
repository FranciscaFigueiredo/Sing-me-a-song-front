import { useState } from "react";
import Header from "../components/Header";
import Songs from "../components/Songs";
import { ContainerContent, ContainerPage } from "../styles/ContainerStyle";
import { Button } from "../styles/Interactives";

export default function Home() {
    const [songs, setSongs] = useState([]);


    return (
        <ContainerPage>
            <Header />
            <ContainerContent>
                <Button>Tocar aleatoriamente</Button>
                <Button>Postar recomendações</Button>
                <Songs songs={ songs } />
            </ContainerContent>
        </ContainerPage>
    );
}
