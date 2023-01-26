import PersonalInformation from './PersonalInformation';
import '../../Styles/CVPreview/CVPreview.css';

const CVPreview = (props)=>{
    const personalInformation = props.state.personalInformation;

    return(
        <div id='preview' className='CV'>
            <PersonalInformation information={personalInformation} />
            {/* <WorkExperience /> */}
            {/* <EducationHistory /> */}
        </div>
    )
}

export default CVPreview;