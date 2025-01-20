import { Container, Logo, Menu } from "./styles";
import Logoimg  from "..\\..\\assets\\Logo.png";

const Header = () => {
    return(
        <Container>
            <Logo>
                <img src={Logoimg} alt="Logo" />
            </Logo>
            <Menu>
                <ul>
                    <li><span>Cadastro/Login</span></li>
                </ul>
            </Menu>
        </Container>
    )
}

export default Header