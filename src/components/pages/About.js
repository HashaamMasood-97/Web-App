import React from 'react'

 function About() {
    return (
        <header style={Style1}>
            <h1>
                Background and Description
            </h1>
            <p> Project Background and Description Statement
              We will be developing a medical web app which will provide initial consultation between the users (patients) and the hospital to treat the patients that cannot visit the hospital or want home medical services. The app will allow users to book an appointment based on the illness. This consultation can be through instant messages or video calling.
              The web app will also provide details and schedules of every doctor according to their field and patients will be able to input their symptoms and find out the best doctor available at that time for their treatment. One general physician will be available at all times in case of unavailability of a specialist doctor.
             Moreover, we will be including symptom checker. By adding your symptoms, the application will determine the cause of illness and all possible solutions to cure the illness.
             </p>

             <h1>Problem Statement</h1>
             <p>The application is beneficial for the patients that cannot visit the hospital for the treatment. The symptom checker is one of the easiest ways to get diagnosed just by sitting in front of your smart device. Not all can afford the doctor’s fees and bills hence, the self-diagnosis using the internet has the potential to solve this issue.</p>
        </header>
    )
}

const Style1={
    padding: '15px',
}

export default About;