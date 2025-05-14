
import partner_1 from '../assets/partners/partner_1.png';
import partner_2 from '../assets/partners/partner_2.png';
import partner_3 from '../assets/partners/partner_3.png';
import partner_4 from '../assets/partners/partner_4.png';
import partner_5 from '../assets/partners/partner_5.png';
import partner_6 from '../assets/partners/partner_6.png';


const Partners = () => {
  const partners = 
  [
    {
      name: "Visual Composer",
      logo: partner_1,
      alt: "Visual Composer",
    },
    {
      name: "Divi Builder",
      logo: partner_2,
      alt: "Divi Builder",
    },
    {
      name: "Crypto Partner",
      logo: partner_3,
      alt: "Crypto Logo",
    },
    {
      name: "Growth Partner",
      logo: partner_4,
      alt: "Growth Logo",
    },
    {
      name: "Cloud Partner",
      logo: partner_5,
      alt: "Cloud Logo",
    },
    {
      name: "Bull Logo",
      logo: partner_6,
      alt: "Bull Logo",
    },
  ];

  return (
    <section className="bg-black text-white py-4 px-20">
      <div className="text-center mb-2">
        <h2 className="text-3xl font-bold">Partners</h2>
        <p className="text-[#6756FE]">
          Trusted by several companies around the world.
        </p>
      </div>

      <div className="flex flex-wrap justify-between items-center px-40">
        {partners.map((partner, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <img
              src={partner.logo}
              alt={partner.alt}
              className="h-12 object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
