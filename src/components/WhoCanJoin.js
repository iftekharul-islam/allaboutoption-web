import join_img from '../assets/join_img.png'; // Replace with your actual image

const WhoCanJoin = () => {
  const joinCards = [
    {
      title: "Recent college Graduate",
      description:
        "Start your financial journey on the right note by acquiring trading skills that can help you build a strong financial foundation.",
    },
    {
      title: "Recent college Graduate",
      description:
        "Start your financial journey on the right note by acquiring trading skills that can help you build a strong financial foundation.",
    },
    {
      title: "Recent college Graduate",
      description:
        "Start your financial journey on the right note by acquiring trading skills that can help you build a strong financial foundation.",
    },
    {
      title: "Recent college Graduate",
      description:
        "Start your financial journey on the right note by acquiring trading skills that can help you build a strong financial foundation.",
    },
  ];
  return (
    <section className="bg-[#0e0e11] text-white py-20 px-4 md:px-20">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-indigo-400 mb-4">
          Who can join this program?
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Trading is no longer exclusive to a select few. Our program is designed to help individuals from various professions and age groups discover their potential in the world of multi-asset trading. We firmly believe that anyone can learn and succeed in trading, regardless of their background or experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
        {joinCards.map((item, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] p-4 rounded-2xl shadow hover:shadow-lg transition"
          >
            <img
              src={join_img}
              alt={item.title}
              className="rounded-xl w-full h-[180px] object-cover mb-4"
            />
            <h4 className="text-white font-semibold mb-2">{item.title}</h4>
            <p className="text-gray-400 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhoCanJoin;
