import React from "react";
import { Container, Description, Img, Itens } from "./styles";
import { FaArrowRight, FaMapMarkedAlt } from "react-icons/fa";

const Card = () => {
    return(
        <Container>
            <Img>
            <img src="https://media.istockphoto.com/id/487313304/pt/foto/luxuosa-sala-de-estar.jpg?b=1&s=612x612&w=0&k=20&c=62mFeqUYFqo6DqQQ4Q2_a4m9alEGEwbxVu9bM4rgIoA=" alt="" />  
            </Img>
            <Description>
                <h4>Apartamento</h4>
                <Itens>
                    <span><FaMapMarkedAlt /> Vila Buarque, São Paulo</span>
                    <span>R$2.400,00 / mês</span>
                </Itens>
                <a href="#">Detalhes <FaArrowRight /></a>
            </Description>
        </Container>
    )
}

export default Card;