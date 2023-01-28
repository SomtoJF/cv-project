import '../../Styles/CVPreview/MySkills.css';

const MySkills = (props)=>{
    const skills = props.skills;
    const items = skills.map((item, index)=>(
        <li key={index+1000}>{toTitleCase(item)}</li>
    ));

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

    if(skills.length > 0){
        return(
            <div id="my-skills">
                <h4 className='new-font'>SKILLS</h4>
                <ul>
                    {items}
                </ul>
            </div>
        )
    }
}

export default MySkills;