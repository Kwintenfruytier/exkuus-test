import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { mq } from 'styles/media-query';

export const Collapse_ = styled.div`
    display: flex;
    /* justify-content: center; */
    align-items: center;
    cursor: pointer;

    ${mq['sm']} {
        display: flex;
        justify-content: start;
        align-items: center;
    }
`;
export const Logo = styled.div`
    margin-top: 35px;
    margin-left: 32px;
    margin-right: 32px;
    ${mq['sm']} {
        margin-top: 25px;
    }
`;
const breatheAnimation = keyframes`
 from { height: 500px }
 to { height:0 }
`;

export const Faq_div = styled.div`
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin-left: auto;
    margin-right: auto;
    ${mq['sm']} {
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
`;

export const ArrowContainer = styled.div``;

export const Answer = styled.div`
    animation-name: ${breatheAnimation};
    animation-duration: 0.5s;
`;

export const Answer_desc = styled.p`
    font-size: 24px;
    font-weight: 300;
    ${mq['sm']} {
        font-size: 24px;
        font-weight: 400;
    }
    ${mq['md']} {
        font-size: 16px;
        font-weight: 400;
    }
`;

export const Faq = styled.div``;
export const Answer_wraper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-self: flex-start;
`;
