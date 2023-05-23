import SectionTitle from "../../../Shared/SectionTitle";
import featuredImg from '../../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <div>
            <section className="featured bg p-20 bg-black bg-opacity-60 bg-fixed">
                <SectionTitle subHeading={'Check it out'} heading={'Featured'}/>
               <div className="flex  gap-8 mx-20">
               <img className="w-2/6" src={featuredImg} alt="" />
                <div className="mx-12 text-white">
                    <h3 className=" text-md ">March 23,2023</h3>
                    <h2 className="uppercase text-xl">Where can i get some?</h2>
                    <p className="font-semibold">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio eaque deleniti, nostrum rem distinctio nobis provident incidunt nemo unde sunt architecto dignissimos eius aliquam. Voluptatum nobis quidem quasi autem dignissimos.</p>
                    <button className="btn my-2 btn-outline text-white border-0 border-b-4">Read More</button>
                </div>
               </div>
            </section>
            
        </div>
    );
};

export default Featured;