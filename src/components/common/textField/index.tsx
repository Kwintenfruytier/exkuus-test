import { Input } from './textField';
interface Props {
    text?: string;
    [rest: string]: any;
}

const TextFieldComponent = ({ name, text, ...rest }: Props) => {
    return <Input {...rest} placeholder={text} type="text" name={name} />;
};

export default TextFieldComponent;
