import styled from '@emotion/styled';
import { mq } from 'styles/media-query';

export const Flex = styled.div<{
    width?: string;
}>`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1f4668;
    border-radius: 12px;
    width: ${(props: any) => props.width || '300px'};
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    cursor: pointer;
    text-align: center;
    padding: 7px;
    ${mq['sm']} {
        width: 250px;
    }
`;

export const Button = styled.p`
    padding-left: 10px;
    font-weight: 700;
    letter-spacing: 1px;
    background: none;
    border: none;
    color: #ffffff;
    font-size: 18px;
    ${(props: any) => ({ ...props })};
    ${mq['sm']} {
        ${(props: any) => ({ ...props })};
        font-size: 16px;
    }
`;
