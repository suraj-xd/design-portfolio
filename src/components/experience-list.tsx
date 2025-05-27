import ExperienceCard from "./experience-card";
import { experienceList } from "~/constants/experience";

export default function ExperienceList() {
  return (
    <div className="flex w-full flex-col gap-3">
      {experienceList.map((experience) => (
        <ExperienceCard key={experience.name} {...experience} />
      ))}
    </div>
  );
}
