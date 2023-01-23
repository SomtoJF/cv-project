import '../../Styles/CVForm/PersonalInfo.css'

const PersonalInfo= ({personalInfo, updatePersonalInfo}) =>{
    return(
        <fieldset id='personal-info'>
            <legend id='personal-info-legend'>Personal Information</legend>
            <label htmlFor='firstname'> First Name</label>
            <input type='text' 
                name='firstname' 
                id='firstname' 
                maxLength={20} 
                placeholder='John' 
                value={personalInfo.firstName}
                onChange={updatePersonalInfo}
            />
            <label htmlFor='lastname'> Last Name</label>
            <input type='text' 
                name='lastname' 
                id='lastname' 
                maxLength={20} 
                placeholder='Doe'
                value={personalInfo.lastName}
                onChange={updatePersonalInfo}
            />
            <label htmlFor='job-title'> Title</label>
            <input 
                type='text' 
                name='job-title' 
                id='job-title' 
                maxLength={20} 
                placeholder='Senior Software Developer'
                value={personalInfo.title}
                onChange={updatePersonalInfo}
            />
            <label htmlFor='email'> Email</label>
            <input 
                type='email' 
                name='email' 
                id='email' 
                maxLength={30} 
                placeholder='username@example.com'
                value={personalInfo.email}
                onChange={updatePersonalInfo}
            />
            <label htmlFor='address'> Address</label>
            <input 
                type='text' 
                name='address' 
                id='address' 
                maxLength={50} 
                placeholder='21, Boulevard Avenue, Los-Angeles, California'
                value={personalInfo.address}
                onChange={updatePersonalInfo}
            />
            <label htmlFor='phone'> Tel</label>
            <input 
                type='tel' 
                name='phone' 
                id='phone'
                value={personalInfo.phone}
                onChange={updatePersonalInfo}
            />
        </fieldset>
    )
}

export default PersonalInfo;