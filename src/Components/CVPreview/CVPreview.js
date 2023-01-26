import PersonalInformation from './PersonalInformation';
import WorkExperience from './WorkExperience'
import '../../Styles/CVPreview/CVPreview.css';

const CVPreview = (props)=>{
    const personalInformation = props.state.personalInformation;
    const experience  = props.state.experience;

    return(
        <div id='preview' className='CV'>
            <PersonalInformation information={personalInformation} />
            <WorkExperience experience={experience} />
            {/* <EducationHistory /> */}
        </div>
    )
}

export default CVPreview;