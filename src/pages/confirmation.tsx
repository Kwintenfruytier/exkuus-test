import { DefaultLayout } from 'layouts/DefaultLayout';
import Confirmation from 'components/confirmation';

const ConfirmationPage: Page = () => (
    <main>
        <Confirmation />
    </main>
);

ConfirmationPage.Layout = DefaultLayout;

export default ConfirmationPage;
