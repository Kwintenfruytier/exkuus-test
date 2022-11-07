import styled from '@emotion/styled';
import { mq } from 'styles/media-query';

export const BookingDetailWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    min-height: 80vh;
    margin-left: 250px;
    margin-right: 250px;
    ${mq['lg']} {
        margin-left: 0px;
        margin-right: 0px;
    }
    ${mq['md']} {
        margin-left: 0px;
        margin-right: 0px;
    }
`;
export const Grid = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 80vw;
    ${mq['xl']} {
        flex-wrap: wrap;
        min-width: 90%;
        justify-content: center;
    }
    ${mq['sm']} {
        justify-content: center;
    }
`;
export const LeftGrid = styled.div`
    width: 30vw;
    ${mq['xl']} {
        min-width: 300px;
    }
    ${mq['lg']} {
        min-width: 500px;
    }
    ${mq['sm']} {
        min-width: 300px;
    }
`;
export const RightGrid = styled.div`
    width: 30vw;
    ${mq['xl']} {
        min-width: 300px;
    }
    ${mq['lg']} {
        min-width: 500px;
    }
    ${mq['sm']} {
        min-width: 320px;
    }
`;

export const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    padding: 0;
`;
export const MR = styled.div`
    margin-right: 8px;
    width: 20px;
    height: 18px;
`;
export const C = styled.div`
    text-align: center;
`;
export const SeperatorThin = styled.div`
    display: none;
    ${mq['sm']} {
        display: block;
        border-top: 2px solid black;
        padding-bottom: 20px;
        width: 100%;
        margin-top: 50px;
    }
`;
