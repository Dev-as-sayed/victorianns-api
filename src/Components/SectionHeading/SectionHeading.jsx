
const SectionHeading = ({heading, subHeading}) => {
    return (
        <div className="w-fit mb-8 mx-auto">
            <p className="text-yellow-500 text-center pb-2">---{heading}---</p>
            <h3 className="text-3xl py-4 px-5 border-y-2  border-gray-500">{subHeading}</h3>
        </div>
    );
};

export default SectionHeading;