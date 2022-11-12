import styled from '@emotion/styled';
import { mq } from 'styles/media-query';

export const HomeWrapper = styled.div`
    margin-top: 20px;
    margin-bottom: 80px;
    display: flex;
    flex-flow: column;
    min-height: 80vh;
    // margin:auto
    // margin-left: 250px;
    // margin-right: 250px;
    ${mq['xl']} {
        margin-left: 24px;
        margin-right: 24px;
    }
    ${mq['md']} {
        // margin-left: 20px;
        // margin-right: 20px;
    }
`;

export const VideoWrapper = styled.div`
    overflow: hidden;
    margin-top: 50px;
    margin-bottom: 50px;
    width: 100%;
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
        width: 100%;
        padding: 20px 0;
    }
`;
export const Right_Section = styled.div`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-left: 30px;
    ${mq['lg']} {
        width: 90%;
        margin-top: 20px;
    }
    ${mq['md']} {
        padding-left: 0;
    }
`;
export const Video = styled.div`
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    ${mq['lg']} {
        width: 90%;
    }
`;
export const Center = styled.div``;

export const Flex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ScrollWrapper = styled.div`
    margin: 50px auto;
    width: 100%;
    display: flex;
    max-width: 1200px;
    align-items: center;
    flex-wrap: wrap;
    ${mq['md']} {
        display: flex;
        justify-content: start;
        flex-wrap: noWrap;
        overflow-x: scroll;
    }
`;
export const QuoteWrapper = styled.div`
    display: flex;
    justify-content: start;
`;
export const Quote = styled.div<{
    bg?: string;
    width?: string;
    height?: string;
}>`
    width: ${props => props.width || '300px'};
    height: ${props => props.height || '250px'};
    display: flex;
    justify-content: start;
    align-items: center;
    padding: 10px;
    margin: 20px;
    background-color: ${props => props.bg || '#000000'};
    color: ${props => props.color || '#000000'};
    ${mq['md']} {
        margin: 10px;
    }
`;

export const FlexCol = styled.div`
    display: flex;
    flex-flow: column;
    font-size: 16px;
    line-height: 24px;
`;

export const MidWrapper = styled.div`
    margin: 50px auto;
`;
export const ArrowContainer = styled.div<{
    mobileWidth?: string;
}>`
    margin: 0 auto;
    max-width: 450px;
    display: flex;
    ${props => `${mq['md']} {
        ${props.mobileWidth && `width: ${props.mobileWidth}`};
        align-items: center;
    }`}
`;
export const SeperatorThin = styled.div`
    display: none;
    ${mq['sm']} {
        border-top: 2px solid black;
    }
`;

export const ArrowText = styled.div<{
    center?: string;
}>`
    display: flex;
    align-items: center;
    ${mq['sm']} {
        justify-content: ${props => props.center || 'center'};
    }
`;
export const MR_image = styled.div<{
    marginright?: string;
}>`
    margin-right: ${(p: marginright) => (p.marginright ? p.marginright : '6px')};
    margin-top: 5px;
`;

export const FormWrapper = styled.form`
    display: flex;
    flex-flow: column;
    margin-top: 20px;
`;

export const Home = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mq['sm']} {
        width: 98%;
    }
`;
export const Left_Section = styled.div`
    width: 100%;
    ${mq['sm']} {
        width: 40%;
    }
`;
export const Home_Image = styled.div`
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    ${mq['sm']} {
        width: 65%;
    }
`;
export const Heading = styled.p`
    font-family: Text Me One;
    font-weight: bold;
    font-size: 42px;
    letter-spacing: 2.25px;
    color: #000000;
    width: 400px;

    ${mq['md']} {
        width: auto;
    }
    ${mq['sm']} {
        line-height: 26px;
        font-size: 24px;
        letter-spacing: 2.25px;
        padding-right: 0.5em;
    }
`;
