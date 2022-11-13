import styled from '@emotion/styled';
import { mq } from './media-query';

export const Paragraph = styled.h1<{
    fontSize?: string;
    weight?: string;
    maxWidth?: string;
    lineHeight?: string;
    textAlign?: string;
}>`
    font-family: 'Cario';
    font-display: swap;
    font-weight: ${props => props.weight || '700'};
    font-size: ${props => props.fontSize || props.theme.fontSizes.h2};
    line-height: ${props => props.lineHeight || '24px'};
    letter-spacing: 2.25px;
    color: ${props => props.color || 'black'};
    max-width: ${props => props.maxWidth || '100%'};
    text-align: ${props => props.textAlign || 'left'};
`;

export const Description = styled(Paragraph)`
    margin-left: 90px;
`;

export const Collapse_Paragraph = styled.p`
    font-weight: 400;
    font-size: 30px;
    letter-spacing: -0.25 px;
    ${mq['sm']} {
        font-size: 16px;
    }
`;

export const HeaderTitle = styled.p`
    ${(props: any) => ({ ...props })};
    font-style: normal;
    font-weight: 700;
    font-size: 35px;
    text-align: center;

    margin: 0;
    margin-top: 5%;
    ${mq['md']} {
        margin-top: 10%;
    }
    ${mq['sm']} {
        margin-top: 10%;
    }
`;

export const Header = styled.p<{
    weight?: string;
    mb?: string;
    padding_bottom?: string;
    maxWidth?: string;
    fontSize?: string;
    mobileFontSize?: string;
}>`
    font-family: Text Me One;
    font-display: swap;
    padding-bottom: ${props => props.padding_bottom || '0px'};
    ${props => props.maxWidth && `max-width: ${props.maxWidth}`};
    font-weight: ${props => props.weight || '700'};
    font-size: ${props => props.fontSize || '38px'};
    letter-spacing: 0.2em;

    margin: 0;
    margin-top: 5%;
    margin-bottom: ${props => props.mb || '0'};
    ${props => `${mq['md']} {
        font-size: ${props.mobileFontSize || '22px'};
        margin-top: 10%;
        letter-spacing: 0.1em;
        ${(props: any) => ({ ...props })};
    }`}
`;

export const Desc = styled(Header)`
    font-size: 26px;
    font-weight: 300;
    margin-top: 5%;
    ${(props: any) => ({ ...props })};
    ${mq['md']} {
        font-size: 20px;
        margin-top: 10%;
    }
    ${mq['sm']} {
        font-size: 18px;
        margin-top: 10%;
    }
`;
export const Content = styled.span`
    color: #00000080;

    font-size: 18px;
    letter-spacing: 0px ${mq['sm']} {
        font-size: 8px;
    }
    ${mq['sm']} {
        font-size: 12px;
    }
`;
export const TextBlue = styled.span<{
    fontSize?: string;
    mobileFontSize?: string;
    fontWeight?: string;
}>`
    color: #1f4668;
    font-weight: ${props => props.fontWeight || '400'};
    ${props => props.fontSize && `font-size: ${props.fontSize}`};
    ${mq['md']} {
        ${props => props.mobileFontSize && `font-size: ${props.mobileFontSize}`};
    }
`;
export const TextYellow = styled.span<{
    border?: string;
}>`
    border-bottom: ${props => props.border || 'none'};
    color: #ffdf2b;
    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;
`;
export const Header_Link = styled.h5<{
    active?: boolean;
}>`
    &:hover {
        border-color: #0047ab;
    }
    height: 20px;
    text-decoration: none;
    font-weight: 400;
    font-size: ${props => props.theme.fontSizes.h5};
    color: ${props => props.color || '#000000'};
    line-height: 10px;
    letter-spacing: 2.25px;
    text-align: Center;
    border-bottom: 2px solid;
    border-color: ${props => (props.active ? '#0047ab' : 'transparent')};
    ${(props: any) => ({ ...props })};
    ${mq['md']} {
        max-width: 1100px;
        display: block;
    }
`;
export const ContentV2 = styled.h5`
    font-weight: 700;
    font-size: ${props => props.theme.fontSizes.h5};
    color: ${props => props.color || '#000000'};
    text-align: Center;
    margin: 0px;
    ${(props: any) => ({ ...props })};
`;

export const H2 = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes.h2};
    line-height: 72px;
    letter-spacing: 0.25em;
`;

export const H3 = styled.h3`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes.h3};
    font-display: swap;
    line-height: 54px;
    letter-spacing: 0.25em;
`;

export const P = styled.p<{
    textAlign?: string;
    weight?: string;
    size?: string;
    border_bottom?: string;
    padding_top?: string;
    padding_bottom?: string;
    width_mb?: string;
    textAlign_mob?: string;
    mobileSize?: string;
    tabletSize?: string;
    margin_top_mb?: string;
}>`
    font-style: normal;
    font-weight: ${props => props.weight || '400'};
    font-size: ${props => props.size || '18px'};
    text-align: ${props => props.textAlign || 'left'};
    color: ${props => props.color || 'black'};

    padding-top: ${props => props.padding_top || '0px'};
    padding-bottom: ${props => props.padding_bottom || '0px'};
    line-height: 24px;
    letter-spacing: 2px;
    margin: 5px;
    border-bottom: ${props => props.border_bottom || '0px'};
    ${mq['lg']} {
        font-size: ${({ theme, tabletSize }) => tabletSize || theme.fontSizes.p};
    }
    ${mq['sm']} {
        text-align: ${props => props.textAlign_mob || 'start'};
        width: ${props => props.width_mb || '192px'};
        margin-left: auto;
        margin-right: auto;
        font-size: ${({ theme, mobileSize }) => mobileSize || theme.fontSizes.p};
        margin-top: ${props => props.margin_top_mb || '0px'};
    }
`;

export const Bold = styled.span`
    font-weight: 700;
`;

export const H4 = styled.h4<{
    center?: string;
}>`
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 29px;
    text-align: ${props => props.center || 'center'} ${mq['sm']} {
        font-size: ${({ theme }) => theme.fontSizes.h4};
    }
`;

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 8px 32px;
`;

export const Banner_img = styled.div<{
    margin_top?: string;
}>`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: ${p => (p.margin_top ? p.margin_top : '100px')};
    margin-bottom: 50px;
`;
export const Diensten_title = styled.h3`
    font-weight: '700';
    font-size: 30px;
    font-family: Text Me One;
    font-display: swap;
    letter-spacing: 2.25px;
    ${mq['sm']} {
        font-size: 22px;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
    }
`;
export const Diensten_description1 = styled.p`
    font-size: 24px;
    font-weight: 400;

    letter-spacing: 2.25px;
    ${mq['lg']} {
        font-size: 20px;
    }
    ${mq['md']} {
        font-size: 18px;
    }
    ${mq['sm']} {
        width: 80%;
        font-size: 15px;
    }
`;
export const Diensten_description2 = styled.p`
    font-size: 24px;
    font-weight: 400;

    letter-spacing: 2.25px;
    ${mq['lg']} {
        font-size: 20px;
    }
    ${mq['md']} {
        font-size: 18px;
    }
    ${mq['sm']} {
        width: 273px;
        margin-right: 54px;
        margin-left: 101px;
        font-size: 15px;
    }
`;
export const Diensten_statement = styled.div`
    margin-bottom: 60px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: start;

    ${mq['sm']} {
        margin-bottom: 0px;
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
    }
`;
export const BackgroundShadow = styled.div`
    height: 500px;
    width: 500px;
    position: absolute;
    z-index: -1;
    background: radial-gradient(
        50% 50% at 50% 50%,
        rgba(255, 223, 43, 0.8) 17.71%,
        rgba(255, 223, 43, 0.0666667) 99.99%,
        rgba(255, 223, 43, 0) 100%
    );
    ${mq['sm']} {
        height: 300px;
        width: 300px;
    }
`;
export const Diensten_statement_wrapper = styled.div<{
    margintop?: string;
}>`
    margin-bottom: 50px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: ${(p: margintop) => (p.margintop ? p.margintop : '0px')};
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 30px 50px;
    grid-gap: 50px;
    ${mq['sm']} {
        margin-bottom: 0px;
        width: 80%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        grid-template-rows: 0px 0px;
        grid-gap: 0px;
    }
`;
export const Diensten_paragraph = styled.div<{ mobile_width?: string }>`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    margin-top: ${(p: margintop) => (p.margintop ? p.margintop : '90px')};
    text-align: ${(p: textalign) => (p.text_align ? p.text_align : 'center')};
    font-size: ${(p: fontsize) => (p.fontsize ? p.fontsize : '26px')};

    font-weight: ${(p: font_weight) => (p.font_weight ? p.font_weight : '400')};
    margin-bottom: 80px;
    letter-spacing: 2.25px;
    ${mq['md']} {
        font-size: 18px;
    }
    ${props => `${mq['sm']} {
        ${props.mobile_width && `width: ${props.mobile_width}`};
        text-align: start;
        margin-left: auto;
        margin-right: auto;
    }`}
`;

export const Diensten_section = styled.div`
    margin-left: 40px;
    margin-top: 60px;
    margin-bottom: 60px;
    ${mq['md']} {
        margin-left: 0;
    }
`;

export const Diensten_descriptionColor = styled.div`
    margin-bottom: 50px;
    font-family: Text Me One;
    font-display: swap;
    margin-top: 50px;
    font-weight: 700;
    color: #1f4668;
    font-size: 32px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    ${mq['sm']} {
        /* display: flex;
    justify-content: start;
    text-align: center;
    align-items: flex-start; */
        width: 345px;

        margin-right: auto;
        font-size: 18px;
    }
`;
export const Dienten_Button = styled.div`
    background-color: #ffdf2b;
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.4));
    font-size: 20px;
    font-family: 'Cairo', sans-serif;
    font-weight: 700;
    font-display: swap;
    padding-top: 16px;
    padding-bottom: 16px;
    border: none;
    padding-right: 20px;
    padding-left: 20px;
    border-radius: 12px;
    font-weight: 500;
    width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto;
    ${mq['sm']} {
        font-size: 13px;
        width: 285px;
        margin-left: auto;
        margin-right: auto;
        padding-top: 5px;
        padding-bottom: 4px;
        border: none;
        padding-right: 8px;
        padding-left: 8px;
        border-radius: 12px;
        text-align: center;
    }
`;
export const Banner_img_wrapper = styled.div`
    margin-top: 40px;
    width: 80%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
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
    ${mq['sm']} {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        flex-direction: column;
    }
`;
export const Diensten_Hero_title = styled.div`
    font-size: 50px;
    font-family: Cairo;
    font-display: swap;
    line-height: 40.5px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 10rem;
    ${mq['sm']} {
        width: 233px;
        text-align: center;
        margin-right: auto;
        margin-left: auto;
    }
`;
export const Button_wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`;
export const Faq_main = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 30px auto;
    margin-bottom: 50px;
    ${mq['sm']} {
        margin-bottom: 0px;
        display: flex;
        flex-direction: column;
        width: 346px;
        margin-left: auto;
        margin-right: auto;
    }
`;
export const IconFiled_wrapper = styled.div<{
    padding_top?: string;
    maxWidth?: string;
    padding_bottom?: string;
}>`
    padding-top: ${props => props.padding_top || '0px'};
    padding-bottom: ${props => props.padding_bottom || '0px'};
    margin-left: -20px;
`;
export const Heading_width = styled.div`
    width: 40%;
    ${mq['sm']} {
        width: 100%;
    }
`;
export const Logo_close = styled.div`
    margin-right: 20px;
`;
export const Privacy_heading = styled.div`
    font-weight: 700;
    font-size: 26px;
    line-height: 47px;
    letter-spacing: 2.25px;
    color: #000000;
`;
export const PrivacyContainer = styled.div`
    width: 80%;
    margin-left: auto;
    margin-right: auto;
`;

export const Privacy_Subheading = styled.div`
    font-weight: 700;
    font-size: 18px;
    line-height: 47px;
    letter-spacing: 2.25px;
    color: #000000;
`;

export const Pinkomsten_para = styled.div`
    font-size: 16px;
    font-weight: 900;
`;
export const Diensten_data_ul = styled.div``;

export const KmoHeading = styled.h1`
    margin: 20px 0;
    font-weight: 700;
    font-size: 38px;
    line-height: 47px;
    letter-spacing: 2.25px;
    color: #000000;
    font-family: Text Me One;
    font-display: swap;
`;
export const KmoSubheading = styled.h1`
    margin: 20px 0;
    font-weight: 600;
    font-size: 26px;
    letter-spacing: 2.25px;
    color: #000000;
    font-family: Text Me One;
    font-display: swap;
`;
export const KmoPortefeuilleWrapper = styled.div`
    padding: 40px 40px;
    ${mq['sm']} {
        padding: 20px;
    }
`;
export const Listing = styled.ul`
    margin-left: 0px;
    ${mq['sm']} {
        margin-left: -40px;
    }
`;
export const BorderBlue = styled.span`
    color: blue;
    border-bottom: 2px solid;
    border-color: blue;
`;
