import styled from '@emotion/styled';
import { mq } from 'styles/media-query';

export const ModalWrapper = styled.div`
    width: 600px;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding-top: 20px;
    ${mq['md']} {
        width: 500px;
    }
    ${mq['sm']} {
        width: 320px;
    }
`;
export const Icon = styled.div`
    cursor: pointer;
`;
export const Between = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
