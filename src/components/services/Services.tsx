import Heading from "../common/Heading";
import {content} from "../../data/constants";
import Service from "./Service";

export default function Services() {
    const { services } = content;
  return (
    <section id="services">
      <div className="md:container px-5 py-14">

      <Heading title={services.title} subtitle={services.subtitle} />

        <div className="flex flex-wrap gap-4 mt-12 justify-center">
        {
            services.services_items.map((serive)=>(
                <Service key={serive.id} service={serive} />
            ))
        }
        </div>
      </div>
    </section>
  );
}
