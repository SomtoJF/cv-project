import PersonalInfo from "./PersonalInfo";
import '../../Styles/CVForm/CVForm.css';
import Experience from './Experience';
import Education from './Education';

const CVForm =(props)=>{
    return(
        <form id='CVForm' className='CV'>
            <PersonalInfo 
                personalInfo={props.cv.personalInformation} 
                updatePersonalInfo={props.getPersonalInformation}
            />
            <Experience 
                experience={props.cv.experience} 
                deleteExperience={props.deleteExperience} 
                addExperience={props.addExperience} 
                updateExperience={props.getExperience}
            />
            <Education 
                education={props.cv.education}
                addEducation={props.addEducation}
                deleteEducation={props.deleteEducation}
                updateEducation={props.getEducation}
            />
        </form>
    )
}

export default CVForm;