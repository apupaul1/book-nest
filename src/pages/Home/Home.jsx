import TopPicks from './TopPicks';
import FeaturedBookSection from './FeaturedBookSection';
import Banner from './Banner';

const Home = () => {
    return (
        <div className='min-h-screen'>
            <Banner></Banner>
            <TopPicks></TopPicks>
            <FeaturedBookSection></FeaturedBookSection>
        </div>
    );
};

export default Home;
