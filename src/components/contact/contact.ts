import styled from '@emotion/styled';
import { mq } from 'styles/media-query';

export const ContactWrapper = styled.div`
    display: flex;
    min-height: 93vh;
    margin-left: 100px;
    align-items: center;
    ${mq['lg']} {
        margin-left: 24px;
        margin-right: 24px;
    }
    ${mq['md']} {
        flex-wrap: wrap;
        flex-flow: column;
        align-items: center;
    }
`;

export const SocialIcon = styled.div`
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Icon = styled.div`
    margin-right: 30px;
`;

export const FormWrapper = styled.p`
    margin-top: 40px;
`;

export const AdornmentWrapper = styled.div`
    width: 70%;
    ${mq['sm']} {
        width: 100%;
    }
`;

export const TopAdornment = styled.p`
    font-weight: 500;
    font-size: 20px;
    margin-top: 40px;
    margin-bottom: 10px;
`;

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    ${mq['md']} {
        width: 100%;
    }
`;
