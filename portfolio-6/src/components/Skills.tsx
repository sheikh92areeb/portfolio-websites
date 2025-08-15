import { skillHeadline, skillItem, skillText } from "../data/appData";
import SkillCard from "./SkillCard";

const Skills = () => {
  return (
    <section className="section">
        <div className="container">
            <h2 className="headline-2 reveal-up">
                {skillHeadline}
            </h2>
            <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] reveal-up">
                {skillText}
            </p>

            <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                {skillItem.map(({imgSrc, label, desc}, key) => (
                    <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} classes="reveal-up" />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Skills
