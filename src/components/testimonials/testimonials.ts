import styled from '@emotion/styled';
import { mq } from 'styles/media-query';

export const TestimonialWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    min-height: 80vh;
    max-width: 1300px;
    margin: 0 auto;
    ${mq['lg']} {
        margin-left: 24px;
        margin-right: 24px;
    }
    ${mq['md']} {
        margin-left: 20px;
        margin-right: 20px;
    }
`;
export const Carousel = styled.div`
    background: yellow;
    ${mq['md']} {
        display: none;
    }
`;
export const ScrollWrapper = styled.div`
    display: none;
    ${mq['lg']} {
        margin-top: 50px;
        width: 90vw;
        display: flex;
        justify-content: start;
        align-items: center;
        flex-wrap: noWrap;
        overflow-x: scroll;
    }
`;
export const QuoteWrapper = styled.div`
    display: flex;
    justify-content: start;
`;
export const Quote = styled.div<{
    bg?: string;
    height?: string;
    width?: string;
}>`
    width: ${props => props.width || '300px'};
    height: ${props => props.height || '150px'};
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 50px 20px;
    margin: 20px;
    background-color: ${props => props.bg || '#000000'};
    color: ${props => props.color || '#000000'};
    ${mq['lg']} {
        margin-right: 20px;
        margin-left: 0px;
    }
`;

export const FlexCol = styled.div`
    display: flex;
    flex-flow: column;
    line-height: 20px;
    font-size: 16px;
`;

export const VideoWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 30px;
`;
