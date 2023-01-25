import { Component } from "react";
import '../Styles/Main.css';
import CVForm from './CVForm/CVForm';

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
            ]
            
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
        // console.log(this.state)
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
        console.log(`key: ${key}`)
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
                    addEducation={this.addNewEducation}
                    addExperience={this.addNewExperience}
                    deleteExperience={this.deleteExperience}
                    deleteEducation={this.deleteEducation}
                    

                />
            </div>
        )
    }
}

export default Main;