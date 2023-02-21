import { content } from "../../data/constants";
import Heading from "../common/Heading";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  const { contact } = content;

  return (
    <section id="contact">
      <div className="md:container px-5 py-14">
      
      <Heading title={contact.title} subtitle={contact.subtitle} />

        <div className="flex md:gap-3 gap-10 justify-center md:flex-row flex-col-reverse items-center my-5">
          <div className="md:w-[40%] gap-5 flex flex-col">
            {
              contact.contact_info.map((info, index)=>(
                <ContactInfo key={index} info={info} />
              ))
            }

          </div>
          <div className="md:w-[50%]">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
