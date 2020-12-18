import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    color: ${props => props.theme.colors.text}
`;

export const Img = styled.img`
    width: 250px;
    margin-top: 50px;
    border-radius: 100%;

    transition: 0.6s;

    :hover{
        width: 260px;
    }
`;

export const Title = styled.h1`
    margin-top: 20px;
    font-size: 32px;
`;

export const Content = styled.div`
    margin: 30px;
    padding: 30px;

    background-color:${props => props.theme.colors.tertiary};

    border-radius: 50px;

    width: 800px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
`;

export const Education = styled.div`

    width: 350px;
    height: 500px;

    border-radius: 40px;

    background: ${props => props.theme.colors.secundary}
`;

export const Experience = styled.div`
width: 350px;
    height: 500px;

    border-radius: 40px;

    background: ${props => props.theme.colors.secundary}
`;