import '../../Styles/CVForm/Experience.css';

const Experience = (props)=>{
    const experience = props.experience;
    const addExperience = props.addExperience;
    const deleteExperience = props.deleteExperience;
    const updateExperience = props.updateExperience;
    let items = experience?.map((item, index)=>(
        <div className="anExperience" key={index}>
            <label htmlFor={`position${index}`}>Position</label>
            <input 
                name='position' 
                type='text' 
                placeholder='Software Engineer' 
                id={`position${index}`}
                value={experience.position}
                onChange={(e)=>{
                    updateExperience(e, index)
                }}/>
            <label htmlFor={`company${index}`}>Company</label>
            <input 
                name='company' 
                type='text' 
                placeholder='Google' 
                id={`company${index}`}
                value={experience.company}
                onChange={(e)=>{
                    updateExperience(e, index)
                }}/>
            <label htmlFor={`start-date${index}`}>Start-date</label>
            <input 
                name='startDate' 
                type='date' placeholder='' 
                id={`start-date${index}`}
                min='2000-01-01'
                value={experience.startDate}
                onChange={(e)=>{
                    updateExperience(e, index)
                }}/>
            <label htmlFor={`end-date${index}`}>End-date</label>
            <input 
                name='endDate' 
                type='date' 
                placeholder='' 
                id={`end-date${index}`} 
                min='2000-01-01'
                value={experience.endDate}
                onChange={(e)=>{
                    updateExperience(e, index)
                }}/>
            <label htmlFor={`description${index}`}>Job Description</label>
            <textarea 
                name='description' 
                id={`description${index}`} 
                rows="4" 
                cols="50" 
                placeholder='Job Description Here' 
                value={experience.description}
                onChange={(e)=>{
                    updateExperience(e, index)
                }}
                style={{width: '100%'}} 
            />
            {index > 0? <button type='button' onClick={()=>deleteExperience(index)}>delete</button>: ''}
            <hr />
        </div>
    ));
    
    return(
        <fieldset id='experience'>
            <legend>Experience</legend>
            { items }
            <button type='button' className='add' id='addExperience' onClick={addExperience}>Add</button>
        </fieldset>
    )
};

export default Experience;