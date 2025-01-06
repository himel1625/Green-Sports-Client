import 'react-responsive-carousel/lib/styles/carousel.min.css';
import OurHappyClient from '../Components/OurHappyClient';
import ProductSection from '../Components/Productsection';
import SportsCategories from '../Components/SportsCategories';
import Banner from '../Page/Banner';

const Home = () => {
  return (
    <div>
      <div className='text-center mx-auto '>
        <Banner />
      </div>
      <SportsCategories />
      <ProductSection />
      <OurHappyClient />
    </div>
  );
};

export default Home;
