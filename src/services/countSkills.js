import filterBySkill from "./filterBySkill";

const countSkills = (users, skills) => {
    return skills.map((skill)=>{
        let filteredBySkill = filterBySkill(users, skill);
        return {name: skill.name, label: skill.label, count: filteredBySkill.length};
    })
}


export default countSkills;