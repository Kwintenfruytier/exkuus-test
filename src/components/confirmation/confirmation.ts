import styled from '@emotion/styled';
import { mq } from 'styles/media-query';

export const ConfirmationWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    margin-left: 250px;
    margin-right: 250px;
    ${mq['lg']} {
        margin-left: 24px;
        margin-right: 24px;
    }
`;

export const Image_m = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const Flex = styled.div`
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;
