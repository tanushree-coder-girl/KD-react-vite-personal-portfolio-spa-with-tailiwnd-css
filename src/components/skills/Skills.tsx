import Heading from "../common/Heading";
import { useState } from 'react';
import Skill from './Skill';
import { content } from '../../data/constants';
import SkillModal from './SkillModal';

export default function Skills() {
  const [selectedSkill, setSelectedSkill] = useState();
  const [open, setopen] = useState(false);
    const { skills } = content

    const openModal = (data: any) => {
      setSelectedSkill(data);
      setopen(true);
    }

    const closeModal = () => {
      setopen(false);
    }

  return (
    <section id="skills">
      <div className="md:container px-5 py-14">
      <SkillModal open={open} selectedSkill={selectedSkill} closeModal={closeModal} />

      <Heading title={skills.title} subtitle={skills.subtitle} />

        <div className="flex flex-wrap gap-4 mt-12 justify-center">
            {
                skills.skill_items.map((skill, index)=>(
                    <Skill key={index} skill={skill} openModal={()=>openModal(skill)} />
                ))
            }
        </div>
      </div>
    </section>
  );
}
