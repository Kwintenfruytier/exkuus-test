import { DefaultLayout } from 'layouts/DefaultLayout';
import Contact from 'components/contact';

const ContactPage: Page = () => (
    <main>
        <Contact />
    </main>
);

ContactPage.Layout = DefaultLayout;

export default ContactPage;
