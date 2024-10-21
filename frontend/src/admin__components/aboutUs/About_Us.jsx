import Arrow from "../../assets/svgs/Arrow";
import { GradientLight } from "./GradientLight";
import "./About_Us.css";
import benefitIcon1 from "../../assets/svgs/icon-1.svg";
import benefitIcon2 from "../../assets/svgs/icon-2.svg";
import benefitIcon3 from "../../assets/svgs/icon-3.svg";
import benefitIcon4 from "../../assets/svgs/icon-4.svg";
import benefitImage2 from "../../assets/images/image-2.png";

const AboutUs = () => {
  const purpose = [
    {
      id: "0",
      title: "Protect Marine Life",
      text: "Our mission is to safeguard the diverse ecosystems of the ocean by protecting endangered species and their habitats.",
      backgroundUrl: "./src/assets/benefits/conserve-1.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "1",
      title: "Restore Coral Reefs",
      text: "Through our restoration projects, we aim to revitalize damaged coral reefs and help them thrive once more.",
      backgroundUrl: "./src/assets/benefits/conserve-2.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "2",
      title: "Combat Ocean Pollution",
      text: "Join us in the fight against plastic pollution and other contaminants that harm marine life and ocean health.",
      backgroundUrl: "./src/assets/benefits/conserve-3.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "3",
      title: "Promote Sustainable Fishing",
      text: "We work with communities and governments to ensure that fishing practices are sustainable and protect biodiversity.",
      backgroundUrl: "./src/assets/benefits/conserve-4.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "4",
      title: "Educate & Inspire Action",
      text: "We raise awareness about ocean conservation and inspire individuals to take action for the future of our seas.",
      backgroundUrl: "./src/assets/benefits/conserve-5.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "5",
      title: "Support Clean Energy",
      text: "Our efforts include advocating for clean energy solutions to reduce the impacts of climate change on marine environments.",
      backgroundUrl: "./src/assets/benefits/conserve-6.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
  ];  

  return (
    <div className="bg-[#1a1b21] py-24 mt-20 rounded-[4rem]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-semibold text-white text-center mb-12 font-['Niramit',sans-serif]">
          WHAT DEFINES US
        </h2>

        <div className="grid grid-cols-1 gap-x-36 md:grid-cols-2 lg:grid-cols-3 ">
          {purpose.map((item) => (
            <div
              key={item.id}
              className="relative p-4 bg-no-repeat bg-cover rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 group"
              style={{ 
                backgroundImage: `url(${item.backgroundUrl})`,
                height: '300px',  
                width: '300px',    
              }}
            >
              <div className="bg-[#181818] rounded-2xl p-8 h-full flex flex-col transition-opacity duration-300 group-hover:bg-opacity-80">
                <h5 className="text-2xl font-bold text-white mb-4">{item.title}</h5>
                <p className="text-[#8b8d97] text-base mb-6 flex-grow">{item.text}</p>
                <div className="flex items-center justify-between mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                    className="rounded-2xl"
                  />
                  <div className="flex items-center">
                    <p className="text-white text-sm font-bold uppercase tracking-wider mr-2">
                      Explore more
                    </p>
                    <Arrow />
                  </div>
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0 z-[-1] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ clipPath: "url(#purpose)" }}
              >
                <div className="w-full h-full">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
