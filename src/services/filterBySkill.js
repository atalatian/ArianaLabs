const filterBySkill = (users , skill) => {
    return users.filter((element)=>{
        let pass = false;
        let selectedSkills = element.selectedSkills;
        selectedSkills.map((selectedSkill)=>{
            if (skill.name === selectedSkill.name){
                pass = true;
            }
        })

        return pass;
    })

}

export default filterBySkill;