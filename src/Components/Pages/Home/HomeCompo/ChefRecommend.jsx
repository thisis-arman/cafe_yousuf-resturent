
import SectionTitle from "../../../Shared/SectionTitle";
import salads from '../../../../assets/home/slide1.jpg'
import soup from '../../../../assets/home/slide2.jpg'
import pizza from '../../../../assets/home/slide3.jpg'

const ChefRecommend = () => {
  return (
    <div>
      <section className="my-16">
        <SectionTitle subHeading={"Should try"} heading={"chef recommends"} />

        {/* cards */}
        <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
        <div className=" w-[340] bg-base-100 shadow-xl">
          <figure className="">
            <img
            className="w-full h-48 object-cover"
              src={salads}
              alt="salads"
            />
          </figure>
          <div className="card-body flex justify-center text-center">
           <div>
           <h2 className="font-semibold">Caeser Salad</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div>
              <button className="btn my-2 btn-outline border-0 border-b-4">Add to Card</button>
            </div>
           </div>
          </div>
        </div>
        <div className=" w-[340] bg-base-100 shadow-xl">
          <figure className="">
            <img
            className="w-full h-48 object-cover"
              src={soup}
              alt="salads"
            />
          </figure>
          <div className="card-body flex justify-center text-center">
           <div>
           <h2 className="font-semibold">Vagetables Soups</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div>
              <button className="btn my-2 btn-outline border-0 border-b-4">Add to Card</button>
            </div>
           </div>
          </div>
        </div>
        <div className=" w-[340] bg-base-100 shadow-xl">
          <figure className="">
            <img
            className="w-full h-48 object-cover"
              src={pizza}
              alt="salads"
            />
          </figure>
          <div className="card-body flex justify-center text-center">
           <div>
           <h2 className="font-semibold">Italian Pizza</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div>
              <button className="btn my-2 btn-outline border-0 border-b-4">Add to Card</button>
            </div>
           </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default ChefRecommend;
