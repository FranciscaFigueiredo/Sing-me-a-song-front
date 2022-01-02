import { HeaderContainer, LineContainer } from "../styles/ContainerStyle";
import { Line, Title1, Title2 } from "../styles/TitleStyle";

import { IoMdMusicalNote } from "react-icons/io";

export default function Header() {
    return (
        <HeaderContainer>
            <Title1>Sing Me</Title1>
            <Title2>A Song</Title2>
            <LineContainer>
                <Line />
                <IoMdMusicalNote />
                <Line />
            </LineContainer>
        </HeaderContainer>
    );
}
