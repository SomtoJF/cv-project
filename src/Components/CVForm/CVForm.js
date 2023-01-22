import PersonalInfo from "./PersonalInfo";
import '../../Styles/CVForm/CVForm.css';

const CVForm =(props)=>{
    return(
        <form id='CVForm' className='CV'>
            <PersonalInfo personalInfo={props.cv.personalInformation} updatePersonalInfo={props.getPersonalInformation}/>
        </form>
    )
}

export default CVForm;