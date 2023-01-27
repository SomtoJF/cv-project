import PersonalInformation from './PersonalInformation';
import WorkExperience from './WorkExperience';
import EducationHistory from './EducationHistory';
import '../../Styles/CVPreview/CVPreview.css';

const CVPreview = (props)=>{
    const personalInformation = props.state.personalInformation;
    const experience  = props.state.experience;
    const education = props.state.education;

    return(
        <div id='preview' className='CV'>
            <PersonalInformation information={personalInformation} />
            <WorkExperience experience={experience} />
            <EducationHistory education={education}/>
        </div>
    )
}

export default CVPreview;