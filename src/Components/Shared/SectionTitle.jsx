

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className="w-4/12 mx-auto text-center my-8">
            <h2 className="text-yellow-400 my-2">__{subHeading}__</h2>
            <h3 className="text-4xl py-4 border-y-4 uppercase">{heading}</h3>
        </div>
    );
};

export default SectionTitle;