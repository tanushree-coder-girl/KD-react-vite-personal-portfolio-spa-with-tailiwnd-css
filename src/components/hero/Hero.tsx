import { content } from "../../data/constants";

interface iProps {
  activeColor: string;
}

export default function Hero(props: iProps) {
  const { home } = content;
  const { activeColor } = props;

  return (
    <section id="home">
      <div className="min-h-screen relative flex lg:flex-row flex-col-reverse lg:items-end justify-center items-center">
        <div
          data-aos="slide-left"
          className="absolute h-full  lg:w-4/12 w-6/12 top-0 right-0 bg-lightBgColor bottom-0 -z-10"
        >
          <h1 className="rotate-90 absolute top-[40%] md:right-[-30%] xl:right-[-40%] right-[-128px] sm:right-[-110px] text-[#EAF2FA] select-none">
            {home.bannerText}{" "}
            <span className="text-dark_primary">{home.bannerTextSpan}</span>
          </h1>
        </div>

        <div data-aos="slide-right"
          className={`absolute top-[30%] left-5 z-[999] w-[3%] flex flex-col items-center justify-center gap-7 cursor-pointer`}
        >
          {home?.home_social_icon_items?.map((item) => (
            <a
              key={item.id}
              target="_blank"
              href={item.link}
              className="duration-700 bg-lightBgColor hover:bg-yellow-300 text-slate-700 rounded-full p-3 text-md md:text-xl"
            >
              {<item.icon />}
            </a>
          ))}
        </div>

        <div data-aos="fade-down" className="lg:h-[500px] mt-10 lg:mt-0 w-[80%] lg:w-[32%] text-center lg:text-right select-none">
          <p className="text-xl text-slate-600"> Hey there, It's </p>
          <h2 className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl sm:text-5xl md:text-6xl">
            {" "}
            {home.fullName}{" "}
          </h2>
          <p className="text-lg text-slate-700  leading-[40px]">
            {home.profession}
          </p>

          <button className="btn_outlined mt-5"> Hire Me </button>
        </div>

        <div data-aos="slide-up" className="md:h-[37rem] sm:h-100 h-92 select-none">
          <img
            src={`${
              activeColor === "yellow"
                ? home.heroImg
                : activeColor === "blue"
                ? home.homeImgBlueTheme
                : activeColor === "pink"
                ? home.homeImgPinkTheme
                : activeColor === "green"
                ? home.heroImgForMob
                : activeColor === "orange"
                ? home.heroImg
                : home.heroImg
            }`}
            className="h-full lg:block hidden"
          />
          <img
            src={home.heroImgForMob}
            className="h-full object-cover max-w-[244px] sm:max-w-sm lg:hidden"
          />
        </div>
      </div>
    </section>
  );
}
