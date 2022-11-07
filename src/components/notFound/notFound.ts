import styled from '@emotion/styled';
import { mq } from 'styles/media-query';

export const NotFoundWrapper = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    min-height: 80vh;
    // margin:auto
    margin-left: 250px;
    margin-right: 250px;
    ${mq['lg']} {
        margin-left: 24px;
        margin-right: 24px;
    }
    ${mq['md']} {
        margin-left: 20px;
        margin-right: 20px;
    }
`;

export const BtnWrapper = styled.p`
    ${mq['md']} {
        margin: 0;
    }
`;

export const NotfoundImage = styled.div`
    margin-top: 50px;
    margin-bottom: 50px;
`;
