import styled from '@emotion/styled';
import { mq } from 'styles/media-query';

export const FooterContainer = styled.div`
    padding-top: 50px;
    ${mq['sm']} {
        padding-top: 30px;
    }
`;

export const Grid = styled.div`
    border-color: black;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 5px;
    ${mq['md']} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 5px;
        justify-content: center;
        align-items: center;
    }
`;
export const Item = styled.div`
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 0.5rem;
    font-size: 18px;

    flex-direction: column;
    ${mq['sm']} {
        max-width: 500px;
    }
`;
export const Paragraph = styled.div<{
    width: string;
}>`
    padding-top: 20px;
    text-align: center;
    ${(props: any) => ({ ...props })};
    ${mq['sm']} {
        padding-top: 20px;
        max-width: 500px;
        width: ${p => (p.width ? p.width : '84px')};
    }
`;
export const SocialIcon = styled.div`
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Icon = styled.div`
    cursor: pointer;
    margin-right: 10px;
`;
export const Text = styled.div`
    font-family: 'Cario';
    font-size: 16px;
    font-weight: 300;
    padding-top: 20px;
    text-align: center;
    letter-spacing: 1.5px;
    color: #000000;
    ${(props: any) => ({ ...props })};
    ${mq['sm']} {
        max-width: 500px;
        width: 124px;
        text-align: center;
        ${(props: any) => ({ ...props })};
    }
`;
export const FooterBottom = styled.div`
    text-align: center;
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const SeperatorThin = styled.div`
    border-top: 2px solid;
    padding-bottom: 20px;
`;
export const SeperatorLight = styled.div`
    border-bottom: 1px solid;
    padding-top: 20px;
`;
export const Hidden = styled.div`
    display: block;
    ${mq['sm']} {
        max-width: 500px;
        display: none;
    }
`;
export const Item_hidden = styled.div<{
    display?: string;
}>`
    display: block;
    display: ${props => (props.display ? props.display : 'flex')}
    justify-content: center;
    align-items: center;
    ${mq['sm']} {
        max-width: 500px;
        display: none;
    }
`;
export const Hidden_socialicons = styled.div`
    display: none;
    ${mq['sm']} {
        display: block;
    }
`;
export const Desktop_hidden = styled.div`
    display: none;
    ${mq['sm']} {
        justify-content: flex-start;
        max-width: 500px;
        display: block;
        overflow: visible;
        margin-left: 40px;
    }
`;
export const Margin_Top = styled.div`
    margin-top: 0px;
    ${mq['sm']} {
        margin-top: 20px;
    }
`;

export const Hidden_desktop = styled.div`
    display: none;
    ${mq['sm']} {
        display: block;
    }
`;
