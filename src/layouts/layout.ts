import styled from '@emotion/styled';
import { mq } from 'styles/media-query';

export const Container = styled.div`
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 200px;
    ${mq['lg']} {
        margin-top: 100px;
    }
`;

export const Layout = styled.div<{
    sidebar: boolean;
}>`
    overflow: ${props => (props.sidebar ? 'hidden' : 'auto')};
    background-color: #f8faf6;
`;
