import { IconType } from "react-icons";
import { content} from '../../data/constants';
interface iProps {
    skill: {
        id: number,
        title: string,
        description: string,
        icon: IconType,
        modalDes: string
    },
    openModal:(val:any)=>void,
}

export default function Skill(props: iProps) {
  const {skill} = props;
  return (
    <div
      className="bg-white sm:cursor-pointer 
       relative group w-full flex items-center
        gap-5 p-5 max-w-sm rounded-md border-2 border-slate-200"
    >
      <div>
        {
          skill?.icon && 
            <skill.icon className="text-4xl"/>
        }
      </div>
      <div>
        <h6>{props.skill?.title}</h6>
        <p className="italic">{props?.skill?.description}</p>
        <div className="text-xl absolute top-3 right-3" onClick={props.openModal}>
          {<content.skills.arrowIcon />}
        </div>
      </div>
    </div>
  );
}
