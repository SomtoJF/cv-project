import '../../Styles/CVPreview/EducationHistory.css';

const EducationHistory = (props)=>{
    const education = props.education;

    function toTitleCase(string){
        string = string.split(' ');
        for(let i = 0; i < string.length; i++){
            if(string[i] == string[i].toUpperCase()){

            }
            else{
            string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
            };
        };
        string = string.join(' ');
        return string;
    };

    const items = education.map((item, index)=>(
        <div className="education-item" key={index + 200}>
            <h4>{item.degree.toUpperCase()}</h4>
            <h4>{item.startDate + ' to ' + item.endDate}</h4>
            <p style={{fontWeight: 600}}>{toTitleCase(item.school)}</p>
            <p>{item.description}</p>
        </div>
    ));
    return(
        <div id='education-history'>
            <h4 className="new-font">EDUCATION</h4>
            {items}
        </div>
    )
}

export default EducationHistory;