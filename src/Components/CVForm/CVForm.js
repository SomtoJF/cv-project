import PersonalInfo from "./PersonalInfo";
const CVForm =(props)=>{
    return(
        <form id='CVForm'>
            <PersonalInfo updatePersonalInfo={props.getPersonalInformation}/>
        </form>
    )
}

export default CVForm;