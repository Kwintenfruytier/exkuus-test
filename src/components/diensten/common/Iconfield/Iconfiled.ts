import styled from '@emotion/styled';
import { mq } from 'styles/media-query';

export const FieldIcon = styled.div`
    display: flex;
    margin-bottom: 24px;

    justify-content: start;
    align-items: center;
    ${mq['sm']} {
        margin-bottom: 24px;
        display: flex;
        justify-content: start;
        align-items: center;
        max-width: 317px;

        margin-right: auto;
    }
`;
export const Paragraph = styled.div<{
    marginleft?: string;
}>`
    margin-left: ${props => props.marginleft || '24px'};
    font-size: 22px;
    font-weight: 400;

    letter-spacing: 2.25px;
    ${mq['sm']} {
        font-size: 15px;
    }
`;
export const Logo = styled.div`
    ${mq['md']} {
        margin-right: -15px;
        margin-left: 15px;
    }
`;
