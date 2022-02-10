import { Form } from "./Form.syled";
import { useState } from "react";

export default function FeedbackForm(props){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const onSubmit = async e => {
        e.preventDefault();

        const response = await fetch('http://localhost:3001', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({name, email, message})
          });
        const json = await response.json();
        console.log(json);
        
        setMessage("");
        setName("");
        setEmail("");
    }

    return(
        <Form onSubmit={onSubmit}>
            <h2>Reach out to us!</h2>
            <input name='name' value={name} placeholder='Your name*' required onChange={({target:{value}}) => setName(value)}></input>
            <input name='email' value={email} type='email' placeholder='Your e-mail*' required onChange={({target:{value}}) => setEmail(value)}></input>
            <textarea name='message' value={message} placeholder="Your message*" required onChange={({target:{value}}) => setMessage(value)}></textarea>
            <button>Send message</button>
        </Form>
    )
}