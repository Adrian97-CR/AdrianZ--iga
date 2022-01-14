import React from 'react'
import useForm from '../../hooks/useForm'

export const ContactScreen = () => {
    const [formValues, setFormValues] = useForm({
        name:'',
        email:'',
        subject:'',
        message:''
    });
    const { name, email, subject, message} = formValues;
    const handleSubmit = () => {
    }

    return (
        <div className='contactScreen'>
            <h1 className='scrTitle'>Contact me</h1>
            <form onSubmit={handleSubmit}>
                <div className='inputContactContainer'>
                    <hr/>
                    <p className='rowIn contactText'>
                        I’m interested in freelance opportunities, especially ambitious or large projects. However, 
                        if you want to know more about me or want to contact me, don’t hesitate to use the form and I will gladly answer you as soon as possible.
                        Contactame, simpre estoy atento a nuevos e interesantes proyectos, simpre en busca de nuevos retos y superarme a mi mismo
                        </p>
                    <hr/>
                    <div className="form-group half1">
                        <input
                            type="text row"
                            className={`newForm inputContact`}
                            placeholder="Name"
                            name="name"
                            value={name}
                            autoComplete="off"
                            onChange={setFormValues}
                        />
                    </div>
                    <div className="form-group half2">
                        <input
                            type="text"
                            className={`newForm inputContact`}
                            placeholder="Email"
                            name="email"
                            value={email}
                            autoComplete="off"
                            onChange={setFormValues}
                        />
                    </div>
                    <div className="form-group rowIn">
                        <input 
                            type="text" 
                            className={`newForm inputContact`}
                            placeholder="Subject"
                            name="subject"
                            value={subject}
                            autoComplete="off"
                            onChange={setFormValues}
                        />
                    </div>
                    <div className="form-group rowIn">
                        <textarea 
                            type="text" 
                            className="newForm inputContact"
                            placeholder="Message"
                            name="message"
                            value={message}
                            rows="5"
                            onChange={setFormValues}
                        ></textarea>
                    </div>
                </div>
            </form>
        </div>
    )
}
