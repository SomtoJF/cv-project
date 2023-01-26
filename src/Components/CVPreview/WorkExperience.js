import '../../Styles/CVPreview/WorkExperience.css';

const WorkExperience = (props)=>{
    const items = props.experience.map((item, index)=>(
        <div className='work-experience-item' key={index + 100}>
            <h4>{item.position.toUpperCase()}</h4>
            <h4>{item.startDate + ' to ' + item.endDate}</h4>
            <p style={{fontWeight: 600}}>{item.company}</p>
            <p>{item.description}</p>
        </div>
    ))

    return(
        <div id='work-experience'>
            <h4 className='new-font'>WORK EXPERIENCE</h4>
            {items}
        </div>
    )
}

export default WorkExperience;