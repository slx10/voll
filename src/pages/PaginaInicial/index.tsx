import styled from "styled-components";
import Banner from "./Banner";
import Pesquisa from "./Pesquisa"
import Atividades from "./Atividades"
import Depoimentos from "./Depoimentos";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default function PaginaIncial() {
    return (
        <>
            <Banner />
            <Container>
                <Pesquisa />
                <Atividades />
                <Depoimentos />
            </Container>
        </>
    )
}