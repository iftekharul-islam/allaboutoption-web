import transform_image from '../assets/transform_image.png';

const Transform = () => {
  return (
    <section className="bg-[#F7F7F7] py-20 px-4 md:px-20">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 max-w-7xl mx-auto">
        
        {/* Text Content */}
        <div className="text-center lg:text-left max-w-xl">
          <h2 className="text-3xl md:text-4xl font-extrabold text-indigo-600 mb-4">
            Watch your trading skills transform
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            At Trading Mentorship Program, we help you overcome your challenges and maximize your trading potential.
            <br /><br />
            Having trained over 4000+ traders, we are sure that the tools &amp; techniques designed will help you emerge as a trader who can trade in any market condition.
          </p>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end w-full lg:w-1/2">
          <img
            src={transform_image} // ← replace with your actual image path
            alt="Trading Transformation"
            className="w-full max-w-md md:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Transform;
