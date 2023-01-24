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
        // console.log(this.state)
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
                    addExperience={this.addNewExperience}
                    deleteExperience={this.deleteExperience}
                />
            </div>
        )
    }
}

export default Main;