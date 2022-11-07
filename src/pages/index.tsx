import { DefaultLayout } from 'layouts/DefaultLayout';
import Home from 'components/home';

const HomePage: Page = () => (
    <main>
        <Home />
    </main>
);

HomePage.Layout = DefaultLayout;

export default HomePage;
