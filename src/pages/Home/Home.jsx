import TopPicks from './TopPicks';
import FeaturedBookSection from './FeaturedBookSection';
import Banner from './Banner';
import PopularBooks from './PopularBooks';
import FeaturedCategories from './FeaturedCategories';

const Home = () => {

    return (
        <div className='min-h-screen'>
            <Banner></Banner>
            <PopularBooks></PopularBooks>
            <FeaturedCategories></FeaturedCategories>
            <TopPicks></TopPicks>
            <FeaturedBookSection></FeaturedBookSection>
        </div>
    );
};

export default Home;
