import   React from 'react';
import axios from 'axios';



import Square from '../Shared/_SquareGraphic'

class Contact extends React.Component {

    state = {
        name: '',
        message: '',
        email: '',
        sent: false,
        buttonText: 'Send Message'
    }


    formSubmit = (e : any) => {
        e.preventDefault()
      
        this.setState({
            buttonText: '...sending'
        })
      
        let data = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        
        axios.post('https://robcs-backend-dc8pcjgfw.vercel.app', data)
        .then( res => {
            //@ts-ignore
            this.setState({ sent: true }, this.resetForm())
        })
        .catch( () => {
          console.log('Message not sent')
        })
      }

      resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: '',
            buttonText: 'Message Sent'
        })
    }

    render() {
        return(
            <form className="contact-form" onSubmit={ (e) => this.formSubmit(e)}>
                  <Square width={25} height={70} top={15} left={42.5} />
                <h1>Get in touch!</h1>
                <label className="message-name" htmlFor="message-name">Your Name</label>
                <input onChange={e => this.setState({ name: e.target.value})} name="name" className="message-name"  placeholder="Your Name" value={this.state.name}/>
            
                <label className="message-email" htmlFor="message-email">Your Email</label>
                <input onChange={(e) => this.setState({ email: e.target.value})} name="email" className="message-email"  placeholder="your@email.com" required value={this.state.email} />
                
                <label className="message" htmlFor="message-input">Your Message</label>
                <textarea onChange={e => this.setState({ message: e.target.value})} name="message" className="message-input"  placeholder="Please write your message here" value={this.state.message} required/>
            
                <div className="button--container">
                    <button type="submit" className="hollow">{ this.state.buttonText }</button>
                </div>
          </form>
        );
    }
}

export default Contact;