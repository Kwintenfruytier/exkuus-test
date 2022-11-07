import { DefaultLayout } from 'layouts/DefaultLayout';
import NotFound from 'components/notFound';

const NotFoundPage: Page = () => (
    <main>
        <NotFound />
    </main>
);

NotFoundPage.Layout = DefaultLayout;

export default NotFoundPage;
