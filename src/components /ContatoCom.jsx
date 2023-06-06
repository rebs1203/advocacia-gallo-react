import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Popup from 'reactjs-popup';
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeadset, faComments, faAt, faPaperPlane, faFileSignature, faPhone } from "@fortawesome/free-solid-svg-icons"
import '@fontsource/public-sans';
import 'reactjs-popup/dist/index.css';
import '../styles/contato-com.css'


const ContatoCom = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_vv853tn', 'template_votbign', form.current, '6AEybsLh57p9ZhWWm')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
        };


    return (
        <>
            <h2>Entre em contato conosco</h2>
            <div className='wraps-page'>
                <div>
                    <FontAwesomeIcon icon={faHeadset} />
                    <h3>Por telefone</h3>
                    <p>Telefones de contato (EUA):<br/> +1 (561) 812-9369 e +1 (561) 888-2485<br/><br/>Telefone de contato (BR - Somente WhatsApp):<br/> +55 (27) 99991-4550</p>
                </div>
                <div>
                    <FontAwesomeIcon icon={faComments} />
                    <h3>Nos envie uma mensagem</h3>
                    <Popup contentStyle={{background: '#4aa8ef', width: '50%', maxWidth: '600px'}} arrowStyle={{display: 'none'}} trigger={<button className='button-contato'>Começar</button>} position="top center">
                        <div style={{display: 'flex', flexDirection: "column"}}>
                            <form ref={form} onSubmit={sendEmail}>
                                <Input startDecorator={<FontAwesomeIcon icon={faFileSignature} style={{color: '#085cbc'}} />} color="neutral" size="md" placeholder='Nome' name="user_name"/><br/>
                                <Input startDecorator={<FontAwesomeIcon icon={faPhone} style={{color: '#085cbc'}} />} color="neutral" size="md" placeholder='Telefone Celular' name='user_phone'/><br/>
                                <Input startDecorator={<FontAwesomeIcon icon={faAt} style={{color: '#085cbc'}}/>} color="neutral" size="md" placeholder='E-mail' name="user_email"/><br/>
                                <Textarea minRows={5} startDecorator={<FontAwesomeIcon icon={faPaperPlane} style={{color: '#085cbc'}}/>} color="neutral" size="lg" placeholder="Mensagem" name="message"/><br/>
                                <Button type='submit' style={{width: '100%'}}>Enviar</Button>
                            </form>
                        </div>
                </Popup>
                </div>
            </div>
        </>
    )
}

export default ContatoCom