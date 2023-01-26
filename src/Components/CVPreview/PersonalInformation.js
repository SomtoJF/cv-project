import '../../Styles/CVPreview/PersonalInformation.css';

const PersonalInformation=(props)=>{
    const firstName = props.information.firstName;
    const LastName = props.information.lastName;
    const title = props.information.title;
    const email = props.information.email;
    const address = props.information.address;
    const phone = props.information.phone;
    return(
        <div id='personalInfo-preview'>
            <div>
                <p className='new-font'>{firstName.toUpperCase() + ' ' + LastName.toUpperCase()}</p>
                <p>{title.toUpperCase()}</p>
                <hr />
            </div>
            
            <ul>
                <li>{email}</li>
                <li>{phone}</li>
                <li>{address}</li>
            </ul>
        </div>
    )
};

export default PersonalInformation;