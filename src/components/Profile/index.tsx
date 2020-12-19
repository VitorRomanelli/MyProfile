import React from 'react';

import Image from '../../img/Vitor2.jpg';
import { Container, Img, Title, SessionTitle, Description, Content, ContentItem, Item, Link } from './styles'

const Profile: React.FC = () => {
    return (
        <Container>

            <Content>
                <Img src={Image}></Img>

                <Description>
                    <ContentItem>
                        <Title>Vitor Romanelli</Title>
                        <Item>19 Anos</Item>
                        <Item>Contato: (24) 22461055 (24) 988764216</Item>
                        <Item>E-mail: vitorvromanelli@gmail.com</Item>
                        <Item>Endereço: Mosela, Petrópolis.</Item>
                        <SessionTitle>Links</SessionTitle>
                        <Item>
                            <Link href="https://github.com/VitorRomanelli">GitHub</Link>
                            <Link href="https://www.linkedin.com/in/vromanelli/">LinkedIn</Link>
                        </Item>
                    </ContentItem>

                </Description>
            </Content>

            <Content>

                <Description>
                    <ContentItem>
                        <SessionTitle>Tecnologias:</SessionTitle>
                        <Item><h4>JavaScript</h4></Item>
                        <Item><h4>NodeJS</h4></Item>
                        <Item><h4>ReactJS</h4></Item>
                        <Item><h4>ReactNative</h4></Item>
                        <Item><h4>TypeScript</h4></Item>
                        <Item><h4>Java</h4></Item>
                        <Item><h4>C</h4></Item>
                        <Item><h4>C++</h4></Item>
                        <Item><h4>MySQL</h4></Item>
                    </ContentItem>
                </Description>

                <Description>
                    <ContentItem>
                        <SessionTitle>Educação:</SessionTitle>
                        <Item>
                            <h4>Ensino Médio Completo</h4>
                            <p>Instituição: Colégio Estadual Cardoso Fontes</p>
                            <p>Término: 2018</p>
                        </Item>
                        <Item>
                            <h4>Cursando Tecnologia da Informação</h4>
                            <p>Instituição: FAETERJ Petrópolis</p>
                            <p>Término: ...</p>
                        </Item>

                        <SessionTitle style={{ marginBottom: 10, fontSize: 16 }}>Cursos:</SessionTitle>

                        <Item>
                            <h4>Curso Web Moderno 2020 com JavaScript</h4>
                            <p>Instituição: Udemy</p>
                            <p>Término: ...</p>
                        </Item>
                        <Item>
                            <h4>Curso GoStack</h4>
                            <p>Instituição: Rocketseat</p>
                            <p>Término: ...</p>
                        </Item>
                        <Item>
                            <h4>Curso Git e contribuições para projetos OpenSource</h4>
                            <p>Instituição: Udemy</p>
                            <p>Término: ...</p>
                        </Item>
                        <Item>
                            <h4>Curso de Inglês básico completo</h4>
                            <p>Instituição: SoS Petrópolis</p>
                            <p>Término: 2017</p>
                        </Item>
                    </ContentItem>
                    <ContentItem>
                        <SessionTitle>Experiência:</SessionTitle>
                        <Item>
                            <p>
                                Em relação a software, desenvolvo projetos nas linguagens de programação Java, C e C++ em nível intermediário,
                                com foco na linguagem Java. Já desenvolvi nas linguagens HTML5, CSS3 e JavaScript, aplicações web, e pequenos
                                projetos como APIs REST com NodeJS. Hoje tenho certo domínio de bibliotecas como React e ReactNative para desenvolvimento web e mobile, assim como TypeScript
                            </p>
                        </Item>
                        <Item>
                            <p>
                                Convido a conhecer alguns de meus projetos OpenSource no GitHub!
                            </p>
                        </Item>
                        <Item>
                            <p>
                                Tenho experiencia na montagem de computadores, assim como em eletrônica, com base em projetos feitos por
                                conta própria e exercícios práticos da faculdade e em atividades próprias como profissional autônomo;
                                Trabalhei em algumas manutenções de aparelhos eletrônicos como autônomo e prestador de serviços. Tive
                                experiencia na área de elétrica predial como profissional independente e prestador de serviços.
                            </p>
                        </Item>
                    </ContentItem>
                </Description>
            </Content>
        </Container>
    );
}

export default Profile;