import PersonalInfo from "./PersonalInfo";
import '../../Styles/CVForm/CVForm.css';
import Experience from './Experience';
import Education from './Education';
import html2pdf from 'html2pdf.js';

const CVForm =(props)=>{
    function printCV (){
        const outputCV = document.getElementById('preview');
        let opt = {
            filename:     'myCv.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2 },
            jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
          };
        html2pdf().set(opt).from(outputCV).save();
    };

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
            <button type='button' id='print' onClick={printCV}>Print PDF</button>
        </form>
    )
}

export default CVForm;