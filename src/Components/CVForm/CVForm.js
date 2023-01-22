import PersonalInfo from "./PersonalInfo";
import '../../Styles/CVForm/CVForm.css';
import Experience from './Experience';

const CVForm =(props)=>{
    return(
        <form id='CVForm' className='CV'>
            <PersonalInfo personalInfo={props.cv.personalInformation} updatePersonalInfo={props.getPersonalInformation}/>
            <Experience experience={props.cv.experience} addExperience={props.addExperience}/>
        </form>
    )
}

export default CVForm;