import '../../Styles/CVForm/PersonalInfo.css'

const PersonalInfo= ({updatePersonalInfo}) =>{

    return(
        <fieldset id='personal-info'>
            <legend id='personal-info-legend'>Personal Information</legend>
            <label htmlFor='firstname'> First Name</label>
            <input type='text' 
                name='firstname' 
                id='firstname' 
                maxLength={20} 
                placeholder='John' 
                onInput={updatePersonalInfo}
            />
            <label htmlFor='lastname'> Last Name</label>
            <input type='text' 
                name='lastname' 
                id='lastname' 
                maxLength={20} 
                placeholder='Doe'
                onInput={updatePersonalInfo}
            />
            <label htmlFor='title'> Title</label>
            <input 
                type='text' 
                name='title' 
                id='title' 
                maxLength={20} 
                placeholder='Senior Software Developer'
                onInput={updatePersonalInfo}
            />
            <label htmlFor='email'> Email</label>
            <input 
                type='email' 
                name='email' 
                id='email' 
                maxLength={30} 
                placeholder=''
                onInput={updatePersonalInfo}
            />
            <label htmlFor='address'> Address</label>
            <input 
                type='text' 
                name='address' 
                id='address' 
                maxLength={50} 
                placeholder='21, Boulevard Avenue, Los-Angeles, California'
                onInput={updatePersonalInfo}
            />
            <label htmlFor='phone'> Tel</label>
            <input 
                type='tel' 
                name='phone' 
                id='phone'
                onInput={updatePersonalInfo}
            />
        </fieldset>
    )
}

export default PersonalInfo;