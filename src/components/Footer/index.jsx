import React, { Fragment } from "react";
import { Container, Item, Copy } from "./styles";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Logoimg  from "..\\..\\assets\\Logo.png";


const Footer = () => {
    return(
        <Fragment>
            <Container>
                <Item>
                    <img src={Logoimg} alt="Logo Imagem" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industri's</p>
                    <nav>
                        <li><span><FaFacebook size={32}/></span></li>
                        <li><span><FaInstagram size={32}/></span></li>
                        <li><span><FaWhatsapp size={32}/></span></li>
                    </nav>
                </Item> 
                <Item>
                    <ul>
                        <h3>Our Services</h3>
                        <li><span>Comprar</span></li>
                        <li><span>Alugar</span></li>
                        <li><span>Vender</span></li>
                    </ul>
                </Item> 
                <Item>
                    <ul>
                        <h3>Our Services</h3>
                        <li><span>Comprar</span></li>
                        <li><span>Alugar</span></li>
                        <li><span>Vender</span></li>
                    </ul>
                </Item> 
                <Item>
                    <ul>
                        <h3>Our Services</h3>
                        <li><span>Comprar</span></li>
                        <li><span>Alugar</span></li>
                        <li><span>Vender</span></li>
                    </ul>
                </Item> 
            </Container>
            <Copy>
                <p>© Copyright 2025 - Samir RWZ All Rights Reserved</p>
                <ul>
                    <li><span>Termos de Uso</span></li>
                    <li><span>Política de Privacidade</span></li>
                    <li><span>Política de Cookies</span></li>
                </ul>
            </Copy>
        </Fragment>
    )
}

export default Footer;