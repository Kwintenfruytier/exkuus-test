import styled from '@emotion/styled';

export const TitleStyled = styled.h1`
    color: ${({ theme }) => theme.colors.green1};
`;

export const Title: React.FC<{ children: React.ReactNode }> = props => {
    const { children } = props;

    return <TitleStyled>{children}</TitleStyled>;
};
