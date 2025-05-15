import join_img_1 from '../assets/join_image/join_img_1.png';
import join_img_2 from '../assets/join_image/join_img_2.png';
import join_img_3 from '../assets/join_image/join_img_3.png';
import join_img_4 from '../assets/join_image/join_img_4.png';

const WhoCanJoin = () => {
  const joinCards = [
    {
      image: join_img_1,
      title: "🎓 Recent College Graduate",
      description:
        "Start your financial journey strong with real-world trading skills that lay the foundation for long-term independence.",
    },
    {
      image: join_img_2,
      title: "💼 Working Professional",
      description:
        "Whether you're in tech, the trades, or freelancing—this program is built for busy professionals, digital nomads, and blue-collar workers ready to grow their income potential.",
    },
    {
      image: join_img_3,
      title: "🏡 Stay-at-Home Parent",
      description:
        "Balance family life and finances. Learn to trade from home and build lasting skills that support your household's future.",
    },
    {
      image: join_img_4,
      title: "🧓 Retiree or Near-Retirement",
      description:
        "Turn your experience and savings into smarter income. This program helps you trade with confidence, no matter your age.",
    },
  ];
  return (
    <section className="bg-[#0e0e11] text-white py-20 px-4 md:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-4">
          Who Can Join This Trading Options Program?
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Option Trading is no longer exclusive to a select few. Our program is designed to help individuals from various professions and age groups discover their potential in the world of multi-asset trading. We firmly believe that anyone can learn and succeed in trading, regardless of their background or experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
        {joinCards.map((item, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] p-4 rounded-2xl shadow hover:shadow-lg transition"
          >
            <img
              src={item?.image}
              alt={item?.title}
              className="rounded-xl w-full h-[180px] object-cover mb-4"
            />
            <h4 className="text-white font-semibold mb-2">{item?.title}</h4>
            <p className="text-gray-400 text-sm">{item?.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoCanJoin;
