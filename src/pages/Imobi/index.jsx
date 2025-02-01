import React, {Fragment} from "react";
import Input from "../../components/Input";
import TextArea from "../../components/TextArea";
import Button from "..//../components/Button"
import { Container, Descripton, Left, Profile, ProfileContact, ProfileDescription, ProfileImg, Right, Thumb, ProfileFormContact } from "../Imobi/style";
import TopBanner from "../../components/TopBanner";

const Imobi = () => {
    return(
        <Fragment>
            <TopBanner />
            <Container>
                <Left>
                    <Thumb>
                        <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" />
                    </Thumb>
                    <Descripton>
                        <h2>Apartamento / Alugar</h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </Descripton>
                </Left>
                <Right>
                    <Profile>
                        <ProfileImg>
                            <img src="https://images.unsplash.com/placeholder-avatars/extra-large.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" alt="" />
                        </ProfileImg>
                        <ProfileDescription>
                            <h3>Jhon Due</h3>
                            <p>Descrição do usuário</p>
                        </ProfileDescription>
                    </Profile>
                    <ProfileContact>
                        <h3>Informações para contato: </h3>
                        <p>(11) 111-1111</p>
                        <p>teste@teste.com</p>
                    </ProfileContact>
                    <ProfileFormContact>
                        <h3>Contate o anúnciante</h3>
                        <form>
                            <Input type="text" placeholder="Nome:" />
                            <Input type="text" placeholder="E-mail:" />
                            <TextArea placeholder="Mensagem:"></TextArea>
                            <Button>Enviar mensagem</Button>
                        </form>
                    </ProfileFormContact>
                </Right>
            </Container>   
        </Fragment>
    )   
}

export default Imobi;