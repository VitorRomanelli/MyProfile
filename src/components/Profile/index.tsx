import React from 'react';

import Image from '../../img/Vitor2.jpg';
import { Container, Img, Title, Education, Experience, Content } from './styles'

const Profile: React.FC = () => {
    return (
        <Container>
            <Img src={Image} />

            <Title>Vitor Romanelli</Title>
            
            <Content>
                <Education>

                </Education>

                <Experience>

                </Experience>
            </Content>
        </Container>
    );
}

export default Profile;