import Image from '@/common/image';
import { Paragraph } from 'styles/typography';
import { ModalWrapper, Between, Icon } from './modal';
import Modal from 'react-modal';
import { ReactComponent as Close } from 'Images/svg/close.svg';
import Button from '../commonButton';
import { Link } from 'gatsby';

const customStyles = {
    content: {
        outerWidth: '600px',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '10px',
        background: '#F8FAF6',
    },
};

const Dialog = ({ open, closeModal, title }: any) => {
    return (
        <Modal
            isOpen={open}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <Between>
                <div>
                    <Image filename="logo.png" alt="logo" width="130px" mobile_width="120px" />
                </div>
                <Icon onClick={closeModal}>
                    <Close />
                </Icon>
            </Between>
            <ModalWrapper>
                <Paragraph fontSize="30px">DANKJEWEL!!</Paragraph>
                <Paragraph
                    textAlign="center"
                    lineHeight="35px"
                    maxWidth="400px"
                    fontSize="24px"
                    weight="300"
                >
                    {title}
                </Paragraph>
                <Link to="/booking">
                    <Button
                        text="plan nu jouw afspraak"
                        background-color="#FFDF2B"
                        color="#000000"
                        border="none"
                        font-size="15px"
                        text-transform="uppercase"
                        margin-top="35px"
                        shadow="none"
                    />
                </Link>
                <Link to="/diensten">
                    <Button
                        text="ontdek wat wij kunnen doen voor jou"
                        background-color="white"
                        color="#1F4668"
                        border="1px solid #000000"
                        font-size="15px"
                        text-transform="uppercase"
                        margin-top="30px"
                        shadow="none"
                    />
                </Link>
            </ModalWrapper>
        </Modal>
    );
};

export default Dialog;
