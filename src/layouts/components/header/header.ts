import styled from '@emotion/styled';
import { mq } from 'styles/media-query';
import { keyframes } from '@emotion/react';
export const Container = styled.div`
    margin-right: 30px;
    margin-left: 30px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${mq['sm']} {
        padding-bottom: 10px;
    }
    ${mq['sm']} {
        margin-right: 10px;
        margin-left: 10px;
    }
`;
export const StickyHeader = styled.div`
    position: fixed;
    width: 100%;
    background: #f8faf6;
    z-index: 99999;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 41px;
    padding-right: 2rem;
`;
export const Promotion = styled.div`
    font-family: Cairo, sans-serif,
    font-weight: 800;
    display: flex;
    background-color: #ffdf2b;
    color: black;
    justify-content: center;
    text-align: center;
    padding: 1rem;
    letter-spacing: 1.25px;
    
    
`;
export const Calender = styled.div`
    background-color: #ffdf2b;
    cursor: pointer;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    font-size: 16px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: none;
    padding-right: 20px;
    padding-left: 20px;
    border-radius: 12px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mq['sm']} {
        font-size: 13px;
        max-width: 500px;
        width: 74px;
        padding-top: 5px;
        padding-bottom: 4px;
        border: none;
        padding-right: 2em;
        padding-left: 2em;
        border-radius: 12px;
        text-align: center;
    }
`;
export const MR_image = styled.div<{
    marginRight?: string;
    marginTop?: string;
}>`
    margin-right: ${p => (p.marginRight ? p.marginRight : '6px')};
    ${p => p.marginTop && `margin-top: ${p.marginTop}`};
`;

export const MobileButton = styled.div`
    background-color: #ffdf2b;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 2.25px;
    margin-bottom: 70px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.4);
    border: none;
    border-radius: 6px;
    font-weight: 700;
    display: flex;
    align-items: center;
    text-align: center;
    padding: 15px 32px;
    ${mq['sm']} {
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: start;
        align-items: center;
    }
`;
export const MobileHeaderWrapper = styled.div`
    display: none;

    ${mq['lg']} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 16px;
    }
`;

export const MobileToggler = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const breatheAnimation = keyframes`
 from { left: 100% }
 to { left:0 }
`;

export const MobileModal = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
    background-color: #f8faf6;
    z-index: 999;
    animation-name: ${breatheAnimation};
    animation-duration: 0.2s;
    height: 100vh;
`;

export const LogoWrapper = styled.div`
    position: absolute;
    top: 15px;
    left: 16px;
`;

export const CloseIconWrapper = styled.div`
    position: absolute;
    top: 15px;
    right: 20px;
`;

export const MenuOptions = styled.div`
    display: flex;
    justify-content: start;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 80px;
    width: 90%;
`;

export const MenuItem = styled.p`
    margin: 0px;
    font-weight: 700;
    font-size: 14px;
    line-height: 33px;
    color: #000;
    text-transform: uppercase;

    display: flex;
    align-items: center;
`;
export const NavLinks = styled.div`
    border-bottom: 2px solid;
    border-color: lightgrey;
    margin-top: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 30%;

    ${mq['lg']} {
        display: none;
        border: none;
    }
`;
export const AnchorLink = styled.a`
    textdecoration: none;
`;
