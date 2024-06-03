const PageTitle = ({ heading, subHeading }) => {
    return (
        <div className="w-5/12 text-center mx-auto pt-20">
            <h2 className="text-4xl text-fuchsia-600 font-semibold  py-4 uppercase">{heading}</h2>
            <h3 className="mb-3 text-xl">{subHeading}</h3>
        </div>
    );
};

export default PageTitle;