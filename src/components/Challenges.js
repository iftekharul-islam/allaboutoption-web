
import challenge_1 from '../assets/challenges/challenge_1.png';
import challenge_2 from '../assets/challenges/challenge_2.png';
import challenge_3 from '../assets/challenges/challenge_3.png';
import challenge_4 from '../assets/challenges/challenge_4.png';
import challenge_5 from '../assets/challenges/challenge_5.png';
import challenge_6 from '../assets/challenges/challenge_6.png';

const Challenges = () => {
  const challenges = [
  { icon: challenge_1, title: "Fear of Market volatility" },
  { icon: challenge_2, title: "Difficulty in Identifying Profitable Trades" },
  { icon: challenge_3, title: "Inconsistent Trading Results" },
  { icon: challenge_4, title: "Lack of Effective Risk Management" },
  { icon: challenge_5, title: "Inadequate Knowledge and Skills" },
  { icon: challenge_6, title: "Inadequate Knowledge and Skills" },
];

  return (
    <section className="bg-white py-16 px-20 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-3">
        Overcoming Trading Challenges
      </h2>
      <p className="text-gray-600 mb-10">
        70% of traders are failing to make money because of these common hurdles.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center px-40">
        {challenges.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-4 hover:shadow-lg transition"
          >
            <img src={item.icon} alt={item.title} className="w-12 h-12" />
            <span className="text-gray-800 text-left font-medium">{item.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Challenges;
