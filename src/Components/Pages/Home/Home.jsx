import Banner from "./HomeCompo/Banner";
import CafeYousuf from "./HomeCompo/CafeYousuf";
import Category from "./HomeCompo/Category";
import ChefRecommend from "./HomeCompo/ChefRecommend";
import Featured from "./HomeCompo/Featured";
import PopularItems from "./HomeCompo/PopularItems";
  


const Home = () => {
    return (
        <div>
         <Banner/>
         <Category/>
         <CafeYousuf/>
         <PopularItems/>
         <ChefRecommend/>
         <Featured/>
        </div>
    );
};

export default Home;