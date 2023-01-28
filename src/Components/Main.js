import { Component } from "react";
import '../Styles/Main.css';
import CVForm from './CVForm/CVForm';
import CVPreview from "./CVPreview/CVPreview";

class Main extends Component
{
    constructor()
    {
        super();

        this.state = {
            personalInformation: {
                firstName: '',
                lastName: '',
                title: '',
                email: '',
                address: '',
                phone: ''
            },
            experience:[
                {
                    position: '',
                    company: '',
                    startDate: '',
                    endDate: '',
                    description: ''
                },
            ],
            education: [
                {
                    school: '',
                    degree: '',
                    startDate: '',
                    endDate: '',
                    description: '',
                }
            ],
            skills: []
            
        };
    };

    updatePersonalInfoState = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
           personalInformation: {
                firstName: this.state.personalInformation.firstName,
                lastName: this.state.personalInformation.lastName,
                title: this.state.personalInformation.title,
                email: this.state.personalInformation.email,
                address: this.state.personalInformation.address,
                phone: this.state.personalInformation.phone,
               [name]: value,
           }
        });
    };

    updateExperienceState = (e, indexValue) =>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
           experience: this.state.experience.map((item, index)=> {
               if(index === indexValue)
               {
                   return {
                    position: item.position,
                    company: item.company,
                    startDate: item.startDate,
                    endDate: item.endDate,
                    description: item.description,
                    [name]: value,
                   }
               }
               else{
                   return item
               }
           })
        });
    };

    updateEducationState = (e, indexValue) =>{
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
           education: this.state.education.map((item, index)=> {
               if(index === indexValue)
               {
                   return {
                    school: item.school,
                    degree: item.degree,
                    startDate: item.startDate,
                    endDate: item.endDate,
                    description: item.description,
                    [name]: value,
                   }
               }else{
                   return item
               };
           })
        });
    };

    updateSkillState = (e, indexValue)=>{
        const value = e.target.value;
        this.setState({
            skills: this.state.skills.map((skill, index)=>{
                if(index === indexValue){
                    return value;
                }
                return skill;
            })
        });
    };

    addNewEducation = () =>{
        this.setState({
            education: this.state.education.concat([{
                school: '',
                degree: '',
                startDate: '',
                endDate: '',
                description: '',
            }])
        });
    };

    addNewSkill = ()=>{
        this.setState({
            skills: this.state.skills.concat('')
        });
    };

    deleteSkill = (key)=>{
        this.setState({
            skills: this.state.skills.filter((item, index)=> key !== index)
        });
    };

    deleteEducation = (key)=>{
        console.log(`key: ${key}`)
        this.setState({
            education: this.state.education.filter((item, index)=> key !== index)
        })
    };

    addNewExperience = ()=>{
        this.setState({
            experience: this.state.experience.concat([{
                position: '',
                company: '',
                startDate: '',
                endDate: '',
                description: ''
            }])
            
        });
    };

    deleteExperience = (key)=>{
        this.setState({
            experience: this.state.experience.filter((item, index)=> key !== index)
        })
    };

    render()
    {
        return(
            <div id='main'>
                <CVForm cv={this.state} 
                    getPersonalInformation={this.updatePersonalInfoState}
                    getExperience={this.updateExperienceState}
                    getEducation={this.updateEducationState}
                    getSkill={this.updateSkillState}
                    addEducation={this.addNewEducation}
                    addExperience={this.addNewExperience}
                    addSkill={this.addNewSkill}
                    deleteExperience={this.deleteExperience}
                    deleteEducation={this.deleteEducation}
                    deleteSkill = {this.deleteSkill}
                />
                <CVPreview state={this.state} />
            </div>
        )
    }
}

export default Main;