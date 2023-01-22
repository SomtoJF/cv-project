import { Component } from "react";
import '../Styles/Main.css';
import CVForm from './CVForm/CVForm';

class Main extends Component
{
    constructor()
    {
        super();

        this.state = {
            CV:{
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
            }
        };
    };

    updatePersonalInfoState = (e) => {
        const id = e.target.id;
        // console.log(id);
        switch(id)
        {
            case 'firstname':
                this.setState({
                    CV:{
                        personalInformation:{
                            firstName: e.target.value
                        }
                    }
                });
                // console.log(this.state.CV.personalInformation.firstName)
            break;
            case 'lastname':
                this.setState({
                    CV:{
                        personalInformation:{
                            lastName: e.target.value
                        }
                    }
                })
            break;
            case 'job-title':
                this.setState({
                    CV:{
                        personalInformation:{
                            title: e.target.value
                        }
                    }
                })
            break;
            case 'email':
                this.setState({
                    CV:{
                        personalInformation:{
                            email: e.target.value
                        }
                    }
                })
            break;
            case 'address':
                this.setState({
                    CV:{
                        personalInformation:{
                            address: e.target.value
                        }
                    }
                })
            break;
            case 'phone':
                this.setState({
                    CV:{
                        personalInformation:{
                            phone: e.target.value
                        }
                    }
                })
            break;
        };
    };

    addNewExperience = ()=>{
        this.setState({
            CV:{
                experience: this.state.CV.experience.concat([{
                    position: '',
                    company: '',
                    startDate: '',
                    endDate: '',
                    description: ''
                }])
            }
        });
    }

    render()
    {
        return(
            <div id='main'>
                <CVForm cv={this.state.CV} 
                    getPersonalInformation={this.updatePersonalInfoState}
                    addExperience={this.addNewExperience}
                />
            </div>
        )
    }
}

export default Main;