import PersonalInformation from './PersonalInformation';
import WorkExperience from './WorkExperience';
import EducationHistory from './EducationHistory';
import MySkills from './MySkills';
import '../../Styles/CVPreview/CVPreview.css';

const CVPreview = (props)=>{
    const personalInformation = props.state.personalInformation;
    const experience  = props.state.experience;
    const education = props.state.education;
    const skills = props.state.skills;

    return(
        <div id='preview' className='CV'>
            <PersonalInformation information={personalInformation} />
            <WorkExperience experience={experience} />
            <EducationHistory education={education}/>
            <MySkills skills={skills} />
        </div>
    )
}

export default CVPreview;