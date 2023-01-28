import '../../Styles/CVForm/Skills.css';

const Skills = (props)=>{
    const skills = props.skills;
    const addSkill = props.addSkill;
    const updateSkill = props.updateSkill;
    const deleteSkill = props.deleteSkill;

    const items = skills.map((item, index)=>(
        <div className="skill-item" key={index + 500}>
            <input type='text' 
                maxLength='20' 
                value={skills[index]} 
                onChange={(e)=>updateSkill(e, index)}
                placeholder={`Skill ${index+1}`}  
            />
            <button type='button' onClick={e=>deleteSkill(index)}>delete</button>
        </div>
    ))

    return (
        <fieldset id='skills'>
            <legend>Skills</legend>
            { items }
            <button type='button' onClick={addSkill}>Add</button>
        </fieldset>
    )
}

export default Skills;