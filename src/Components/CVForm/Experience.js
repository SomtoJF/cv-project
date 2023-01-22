const Experience = (props)=>{
    const experience = props.experience;
    const addExperience = props.addExperience;
    let items = [];
    for(let i = 0; i < experience.length; i++){
        items.push(
        <div className="anExperience" key={i}>
            <label htmlFor={`position${i}`}>Postion</label>
            <input 
                name='position' 
                type='text' 
                placeholder='Software Engineer' 
                id={`position${i}`}/>
            <label htmlFor={`company${i}`}>Company</label>
            <input 
                name='company' 
                type='text' 
                placeholder='Google' 
                id={`company${i}`}/>
            <label htmlFor={`start-date${i}`}>Start-date</label>
            <input 
                name='start-date' 
                type='date' placeholder='' 
                id={`start-date${i}`}
                min='2000-01-01'/>
            <label htmlFor={`end-date${i}`}>End-date</label>
            <input 
                name='end-date' 
                type='date' 
                placeholder='' 
                id={`end-date${i}`} 
                min='2000-01-01'/>
            <label htmlFor={`description${1}`}>Job Description</label>
            <textarea 
                name='description' 
                id={`description${1}`} 
                rows="4" 
                cols="50" 
                placeholder='Job Description Here' 
                style={{resize:"none"}}></textarea>
        </div>)
    };
    return(
        <fieldset id='experience'>
            <legend>Experience</legend>
            {items}
            <button type='button' className='add' id='addExperience' onClick={addExperience}>Add</button>
        </fieldset>
    )
};

export default Experience;