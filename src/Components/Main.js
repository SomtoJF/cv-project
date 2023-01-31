import { useState } from "react";
import '../Styles/Main.css';
import CVForm from './CVForm/CVForm';
import CVPreview from "./CVPreview/CVPreview";

const Main = ()=>
{

    const [personalInformation, setPersonalInformation] = useState({
        firstName: '',
        lastName: '',
        title: '',
        email: '',
        address: '',
        phone: ''
    })
    const [experience, setExperience] = useState([
        {
            position: '',
            company: '',
            startDate: '',
            endDate: '',
            description: ''
        },
    ]);
    const [education, setEducation] = useState([
        {
            school: '',
            degree: '',
            startDate: '',
            endDate: '',
            description: '',
        }
    ]);
    const [skills, setSkills] = useState([]);
        

    const updatePersonalInfoState = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPersonalInformation({
            ...personalInformation,
            [name]: value,
        });
    };

    const updateExperienceState = (e, indexValue) =>{
        const name = e.target.name;
        const value = e.target.value;
        setExperience(
            experience.map((item, index)=> {
               if(index === indexValue)
               {
                   return {
                    ...item,
                    [name]: value,
                   }
               }
               else{
                   return item
               };
           })
        );
    };

    const updateEducationState = (e, indexValue) =>{
        const name = e.target.name;
        const value = e.target.value;
        setEducation(
            education.map((item, index)=> {
               if(index === indexValue)
               {
                   return {
                    ...item,
                    [name]: value,
                   }
               }else{
                   return item
               };
           })
        );
    };

    const updateSkillState = (e, indexValue)=>{
        const value = e.target.value;
        setSkills(
            skills.map((skill, index)=>{
                if(index === indexValue){
                    return value;
                }
                return skill;
            })
        );
    };

    const addNewEducation = () =>{
        setEducation(
            education.concat([{
                school: '',
                degree: '',
                startDate: '',
                endDate: '',
                description: '',
            }])
        );
    };

    const addNewSkill = ()=>{
        setSkills(skills.concat(''));
    };

    const deleteSkill = (key)=>{
        setSkills(skills.filter((item, index)=> key !== index));
    };

    const deleteEducation = (key)=>{
        console.log(`key: ${key}`)
        setEducation(education.filter((item, index)=> key !== index))
    };

    const addNewExperience = ()=>{
        setExperience(
            experience.concat([{
                position: '',
                company: '',
                startDate: '',
                endDate: '',
                description: ''
            }])  
        );
    };

    const deleteExperience = (key)=>{
        setExperience(experience.filter((item, index)=> key !== index))
    };

    
    let state = {personalInformation:personalInformation, education:education, experience:experience, skills:skills};
    return(
        <div id='main'>
            <CVForm cv={state} 
                getPersonalInformation={updatePersonalInfoState}
                getExperience={updateExperienceState}
                getEducation={updateEducationState}
                getSkill={updateSkillState}
                addEducation={addNewEducation}
                addExperience={addNewExperience}
                addSkill={addNewSkill}
                deleteExperience={deleteExperience}
                deleteEducation={deleteEducation}
                deleteSkill = {deleteSkill}
            />
            <CVPreview state={state} />
        </div>
    )
};


export default Main;