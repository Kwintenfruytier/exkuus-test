import { DefaultLayout } from 'layouts/DefaultLayout';
import Nieuwsbrief from 'components/nieuwsbrief';

const NewsPage: Page = () => (
    <main>
        <Nieuwsbrief />
    </main>
);

NewsPage.Layout = DefaultLayout;

export default NewsPage;
