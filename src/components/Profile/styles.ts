import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    flex-direction: column;

    color: ${props => props.theme.colors.text};
`;

export const Img = styled.img`
    width: 350px;
    margin-top: 50px;
    border-radius: 100%;


    :hover{
        width: 340px;
    };
`;

export const Title = styled.h1`
    margin: 20px 0 20px 0;
    font-size: 30px;

    @media (max-width: 800px) {
        font-size: 24px;    
    }
`;

export const SessionTitle = styled.h1`
    
    margin: 25px 0 20px 0;
    
    font-size: 22px;

    color: ${props => props.theme.colors.text2};

    @media (max-width: 800px) {
        font-size: 18px;    
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 20px;
    padding: 15px;

    @media (max-width:1200px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const Description = styled.div`
    margin: 30px;
    padding: 20px;

    background-color:${props => props.theme.colors.tertiary};

    border-radius: 50px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.3);

    @media (max-width: 1000px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const ContentItem = styled.div`

    width: 350px;

    margin: 10px;
    padding: 20px;

    border-radius: 20px;

    background: ${props => props.theme.colors.quaternary};

    :hover {
        width: 365px;
    }

    @media (max-width:800px) {
        width: 100%;
        
        :hover {
            width: 100%;
            background: ${props => props.theme.colors.secundary};
        }
    }
`;

export const Item = styled.div`
    padding-left: 10px;
    margin-bottom: 5px;
    font-size: 14px;

    @media (max-width: 800px) {
        font-size: 12px;    
    }
`;

export const Link = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 40px;

    text-decoration: none;
    border: none;
    border-radius: 15px;

    background-color: ${props => props.theme.colors.but};

    margin-bottom: 10px;
    color: #f5f5f5;

    :hover{
        background-color: ${props => props.theme.colors.hover};
        height: 50px;
    }
`;