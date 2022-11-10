import styled from '@emotion/styled';
import { mq } from 'styles/media-query';

export const Hero_ = styled.div`
    margin-bottom: 50px;
    width: 90%;
    margin-right: auto;
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mq['lg']} {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
    ${mq['md']} {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
`;
export const Left_Section = styled.div`
    font-family: Text Me One;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
`;
export const Heading = styled.p`
    font-family: Text Me One;
    font-weight: 700;
    font-size: 42px;
    letter-spacing: 2.25px;
    color: #000000;
    text-align: left;
    width: 100%;
    margin: 20px auto;
    ${mq['md']} {
        font-size: 24px;
    }
`;
export const Sub_Heading = styled.p`
    font-weight: 100;
    font-size: 34px;
    line-height: 47px;
    letter-spacing: 2.25px;
    color: #000000;
    text-align: center;
`;
export const Sub_HeadingColor = styled.span`
    font-weight: 900;
    font-size: 58px;
    line-height: 59px;
    letter-spacing: 2.25px;
    color: #1f4668;
`;
export const Hero_Image = styled.div`
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    ${mq['sm']} {
        width: 50%;
    }
`;
export const Hide = styled.div`
    display: block;
    ${mq['sm']} {
        display: none;
    }
`;
export const Mobile_Heading = styled.div`
    display: none;
    font-family: Text Me One;
    ${mq['sm']} {
        display: block;
        margin-left: 32px;
        margin-top: 34px;
        margin-bottom: 20px;
        width: 208px;
        font-weight: 700;
        font-size: 26px;
        line-height: 21.5px;
        letter-spacing: 2.25px;
        color: #000000;
    }
`;
export const Mobile_Sub_Heading = styled.div`
    font-family: Text Me One;
    display: none;
    ${mq['sm']} {
        display: block;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-left: auto;
        margin-right: auto;
        margin-top: 30px;
        width: 230px;
        font-weight: 700;
        font-size: 26px;
        line-height: 27px;
        letter-spacing: 2.25px;
        color: #000000;
    }
`;
export const Mobile_Sub_HeadingColor = styled.div`
    display: none;

    ${mq['sm']} {
        display: block;
        font-weight: 700;
        font-size: 34px;
        margin-top: 10px;
        letter-spacing: 2.25px;
        color: #1f4668;
    }
`;
