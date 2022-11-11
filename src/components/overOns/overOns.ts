import styled from '@emotion/styled';
import { mq } from 'styles/media-query';

export const OverOnsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    min-height: 80vh;
    margin-left: 25px;
    margin-right: 25px;
    ${mq['lg']} {
        margin-left: 24px;
        margin-right: 24px;
    }
    ${mq['md']} {
        margin-left: 20px;
        margin-right: 20px;
    }
`;

export const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    flex-wrap: wrap;
    margin-top: 30px;
    width: 100%;
    text-align: left;
    position: relative;
    over-flow: hidden;
`;

export const MainComp = styled.div<{
    position?: string;
    top?: string;
    align?: string;
    m_top?: string;
}>`
    padding-top: 40px;
    width: 95%;
    display: flex;
    flex-flow: column;
    justify-content: start;
    align-items: ${props => props.align || 'start'};

    position: ${props => props.position || 'relative'};
    top: ${props => props.top || '0'};
    color: ${props => props.color || '#000000'};
    ${mq['lg']} {
        width: 95%;
    }
    ${mq['md']} {
        width: 95%;
    }
    ${mq['sm']} {
        width: 100%;
        top: ${props => props.m_top || '0'};
    }
`;

export const VerticalTags = styled.div<{
    justify?: string;
    margin?: string;
    direction?: string;
    mb_margin?: string;
    mb_marginRight?: string;
}>`
    display: flex;
    justify-content: ${props => props.justify || 'start'};
    width: 500px;
    margin-left: ${props => props.margin || '0px'};
    flex-direction: ${props => props.direction || 'row'};
    margin-right: 0px;
    ${mq['lg']} {
        width: 250px;
        margin-left: ${props => props.mb_margin || '-70px'};
        margin-right: ${props => props.mb_marginRight || '0px'};
    }
`;
export const Tag = styled.div<{
    bg?: string;
}>`
    height: 350px;
    width: 190px;

    background: ${props => props.bg || 'aqua'};
    color: ${props => props.color || 'black'};
    overflow: auto;
    border-radius: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mq['lg']} {
        height: 260px;
        width: 130px;
    }
`;
export const Connector = styled.div`
    display: flex;
    align-items: center;
`;

export const Connector2 = styled.div`
    background: #b3b3b3;
    width: 16px;
    height: 16px;
    border-radius: 100px;
    ${mq['lg']} {
        margin-left: 0;
        width: 12px;
        height: 12px;
    }
`;
export const Clip = styled.div`
    background: #b3b3b3;
    width: 40px;
    height: 12px;
    border-radius: 20px;
    ${mq['lg']} {
        width: 16px;
        height: 8px;
    }
`;
export const Line = styled.div<{
    bg?: string;
    margin?: string;
}>`
    position: relative;
    background: ${props => props.bg || 'aqua'};
    border-radius: 8px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mq['lg']} {
        width: 26px;
    }
`;

export const Arrow = styled.div`
    height: 80px;
    width: 60px;
    background: #16a1fa;
    clip-path: polygon(100% 0, 0 0, 51% 62%);
    margin-top: -8px;
    ${mq['lg']} {
        height: 60px;
        width: 40px;
        margin-left: -1px;
    }
`;

export const Rotate = styled.p<{
    top?: string;
}>`
    position: absolute;
    top: ${props => props.top || '65%'};
    left: 20%;
    transform: translate(50%, -50%);
    white-space: nowrap;
    transform: rotate(270deg);
    transform-origin: 0 0;
    font-weight: 100;
    font-size: 18px;
    color: ${props => props.color || 'black'};
    ${mq['lg']} {
        font-size: 13px;
    }
`;

export const Teams = styled.div``;
export const Members = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    margin-top: 80px;
    ${mq['md']} {
        flex-wrap: wrap;
        justify-content: center;
    }
`;
export const Member_Img = styled.div`
    grid-area: image;
    width: 400px;
    height: 450px;
    background: lightgray;
    ${mq['lg']} {
        width: 350px;
        height: 350px;
    }
    ${mq['sm']} {
        width: 330px;
        height: 350px;
    }
`;
export const MemberIntro = styled.div<{
    bg?: string;
}>`
    grid-area: text;
    width: 390px;
    height: 440px;
    background: ${props => props.bg || 'gray'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5px;
    ${mq['lg']} {
        width: 340px;
        height: 340px;
    }
    ${mq['sm']} {
        width: 320px;
        height: 340px;
    }
`;
