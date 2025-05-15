import { FaStar } from 'react-icons/fa';
import Slider from 'react-slick';
import smart_mentor from '../assets/smart_mentor.png'; // Replace with your video thumbnailx

const Testimonial = () => {
  const testimonials = [
    {
      name: 'Marvin L',
      rating: 5,
      video: smart_mentor,
      text: `Don I just want to thank you from the bottom of my heart for the help and the great calls daily.. I was at my last $80 when I found you about 4months ago and followed you..and now at $3K plus... thank you so much and im so happy to have found such a great group to be in and learn from..happy holidays from my family and I🙏🤝`,
    },
    {
      name: 'Barry B.',
      rating: 5,
      video: smart_mentor,
      text: `I just wanted to say thank you for the advice, was close to giving up and have completely turned my account around by following the stocks you keep reiterating`,
    },
    // Add more testimonials if needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-white py-20 px-4 md:px-20">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-black">
          Transformative Experiences<br />
          <span className="text-black">Hear from Our Traders</span>
        </h2>
      </div>

      <Slider {...settings}>
        {testimonials.map((item, idx) => (
          <div key={idx} >
            <div className='flex flex-row items-center justify-center w-full space-x-4'>
              <div className="bg-[#f1f1f1] w-full max-w-md rounded-2xl h-[220px] flex items-center justify-center shadow">
                <img
                  src={item.video}
                  alt="Testimonial Video"
                  className="h-full object-cover rounded-2xl"
                />
              </div>
              <div className="bg-[#1a1a1a] text-white rounded-2xl p-6 w-full max-w-md shadow h-[220px] overflow ">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-indigo-500 font-semibold">{item.name}</p>
                  <div className="flex gap-1 text-yellow-400">
                    {[1,2,3,4,5].map((_, i) => (
                      <span key={i}>
                      {i < item.rating ? (
                        <FaStar key={i} className="text-yellow-400" />
                      ) : (
                        <FaStar key={i} className="text-gray-400" />
                      )}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="max-h-40 overflow-y-auto pr-2 custom-scrollbar">
                  <p className="text-sm leading-relaxed text-gray-300">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonial;
