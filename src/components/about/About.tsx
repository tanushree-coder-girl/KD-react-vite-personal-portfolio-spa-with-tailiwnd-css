import { content } from "../../data/constants";
import Heading from "../common/Heading";

export default function () {
  const { about } = content;
  
  return (
    <section id="about" className=" bg-[#ffff0003]">
      <div className="md:container flex-col md:flex-row px-5 py-14 flex md:gap-20">
        <div className="w-[90%] md:w-[55%] mt-5">
        <Heading title={about.title} subtitle={about.subtitle} />

          <div className="mt-5 leading-7 text-base text-justify">
            <p className="text-justify">{about.summary}</p>
            <div className="mt-5">
              Personal Information -
              <ul className="flex flex-col gap-2 mt-2">
                {about?.personal_info?.map((info) => (
                  <li
                    key={info.key}
                    className="flex items-center justify-between w-[90%]"
                  >
                    <span className="font-medium"> {info.key} </span>
                    <span className="w-[55%]"> : {info.value} </span>
                  </li>
                ))}
              </ul>
            </div>

            <button className="btn_outlined my-5"> Download CV </button>
          </div>
        </div>
        <div className="w-full flex flex-row flex-wrap md:flex-col md:justify-center items-center md:mt-12">
          {about?.facts?.map((fact) => (
            <div
              key={fact.id}
              className={`${
                fact.id == 2
                  ? "md:w-[70%] justify-end"
                  : (fact.id == 4
                  ? "md:w-[55%] justify-end"
                  : "md:w-[50%]")
              } flex  gap-4 items-center p-5`}
            >
              <h3> {fact.value} </h3>
              <h5 className="text-xl mg:text-2xl text-slate-600"> {fact.key}</h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
