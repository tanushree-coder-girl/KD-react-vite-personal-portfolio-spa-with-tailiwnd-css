import { IconType } from "react-icons";
import { BsEnvelopeOpen } from "react-icons/bs";
interface iProps {
    info: {
        icon: IconType,
        text: string,
    }
}
export default function ContactInfo(props :iProps) {
    const {info} = props;
  return (
    <div
      className="bg-white sm:cursor-pointer 
       relative group flex items-center
        gap-5 p-5 w-full lg:max-w-sm rounded-md border-2 border-slate-200"
    >
      <div>
        <info.icon className="text-2xl" />
      </div>
      <div>
        <h5> {info.text} </h5>
      </div>
    </div>
  );
}
