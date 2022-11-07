import { Button } from './commonButton';
interface Props {
    text?: string;
    [rest: string]: any;
}

const CommonButton = ({ text, ...rest }: Props) => {
    return (
        <Button {...rest} value="Send" type="submit">
            {text}
        </Button>
    );
};

export default CommonButton;
