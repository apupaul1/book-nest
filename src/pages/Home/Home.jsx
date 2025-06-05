import TopPicks from './TopPicks';
import FeaturedBookSection from './FeaturedBookSection';

const Home = () => {
    return (
        <div className='min-h-screen w-10/12 mx-auto my-8'>
            <TopPicks></TopPicks>
            <FeaturedBookSection></FeaturedBookSection>
        </div>
    );
};

export default Home;
