import '../../Styles/CVForm/Education.css';

const Education = (props)=>{
    const education = props.education;
    const addEducation = props.addEducation;
    const deleteEducation = props.deleteEducation;
    const updateEducation = props.updateEducation;
    let items = education?.map((item, index)=>(
        <div className="anEducation" key={index}>
            <label htmlFor={`position${index}`}>School</label>
            <input 
                name='school' 
                type='text' 
                placeholder='Babcock University' 
                id={`school${index}`}
                value={education.position}
                onChange={(e)=>{
                    updateEducation(e, index)
                }}/>
            <label htmlFor={`degree${index}`}>Degree</label>
            <input 
                name='degree' 
                type='text' 
                placeholder='Software Engineering' 
                id={`degree${index}`}
                value={education.degree}
                onChange={(e)=>{
                    updateEducation(e, index)
                }}/>
            <label htmlFor={`From${index}`}>From</label>
            <input 
                name='startDate' 
                type='date' placeholder='' 
                id={`From${index}`}
                min='2000-01-01'
                value={education.startDate}
                onChange={(e)=>{
                    updateEducation(e, index)
                }}/>
            <label htmlFor={`To${index}`}>To</label>
            <input 
                name='endDate' 
                type='date' 
                placeholder='' 
                id={`To${index}`} 
                min='2000-01-01'
                value={education.endDate}
                onChange={(e)=>{
                    updateEducation(e, index)
                }}/>
            <label htmlFor={`education-description${index}`}>Course Description</label>
            <textarea 
                name='description' 
                id={`education-description${index}`} 
                rows="4" 
                cols="50" 
                placeholder='Brief Narration of Coursework' 
                value={education.description}
                onChange={(e)=>{
                    updateEducation(e, index)
                }}
                style={{width: '100%'}} 
            />
            {index > 0? <button type='button' onClick={()=>deleteEducation(index)}>delete</button>: ''}
            <hr />
        </div>
    ));

    return(
        <fieldset id='education'>
            <legend>Education</legend>
            { items }
            <button type='button' className='add' id='addEducation' onClick={addEducation}>Add</button>
        </fieldset>
    )
}

export default Education;