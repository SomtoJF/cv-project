const Experience = (props)=>{
    const experience = props.experience;
    const addExperience = props.addExperience;
    const deleteExperience = props.deleteExperience;
    let items = experience?.map((item, index)=>(
        <div className="anExperience" key={index}>
            <label htmlFor={`position${index}`}>Postion</label>
            <input 
                name='position' 
                type='text' 
                placeholder='Software Engineer' 
                id={`position${index}`}/>
            <label htmlFor={`company${index}`}>Company</label>
            <input 
                name='company' 
                type='text' 
                placeholder='Google' 
                id={`company${index}`}/>
            <label htmlFor={`start-date${index}`}>Start-date</label>
            <input 
                name='start-date' 
                type='date' placeholder='' 
                id={`start-date${index}`}
                min='2000-01-01'/>
            <label htmlFor={`end-date${index}`}>End-date</label>
            <input 
                name='end-date' 
                type='date' 
                placeholder='' 
                id={`end-date${index}`} 
                min='2000-01-01'/>
            <label htmlFor={`description${index}`}>Job Description</label>
            <textarea 
                name='description' 
                id={`description${index}`} 
                rows="4" 
                cols="50" 
                placeholder='Job Description Here' 
                style={{width: '100%'}} 
            />
            {index > 0? <button type='button' onClick={()=>deleteExperience(index)}>delete</button>: ''}
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