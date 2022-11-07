import { DefaultLayout } from 'layouts/DefaultLayout';
import NewsLetter from 'components/newsletter';

const NewsPage: Page = () => (
    <main>
        <NewsLetter />
    </main>
);

NewsPage.Layout = DefaultLayout;

export default NewsPage;
