

const SingleItem = ({item}) => {
    const {name,price,image,recipe}=item;
    console.log(item)
    return (
        <div className="flex gap-5">
            <img style={{borderRadius:'0 200px 200px 200px '}} className="w-[90px]" src={image} alt="" />
            <div>
                <p className="text-md font-semibold uppercase">{name}------------</p>
                <p>{recipe}</p>
            </div>
            <p className="text-yellow-400 inline-block font-bold">${price}</p>
            
        </div>
    );
};

export default SingleItem;