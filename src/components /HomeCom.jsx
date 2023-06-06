import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Popup from 'reactjs-popup';
import Input from '@mui/joy/Input';
import Textarea from '@mui/joy/Textarea';
import Button from '@mui/joy/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAt, faPaperPlane, faFileSignature, faPhone } from '@fortawesome/free-solid-svg-icons';
import '@fontsource/public-sans';
import 'reactjs-popup/dist/index.css';
import '../styles/home-com.css'


const HomeCom = () => {

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
        <div className="background-pic">
            <h1 className="title">ADVOCACIA GALLO</h1>
        </div>
        <div>
            <h2 className='nossa-visao'>NOSSA VISÃO</h2>
            <img src="virtual-courts2.png" className="virtual-court"></img>
            <p className='nossa-visao-text'>Bem vindo ao meu website! Me chamo Luiz Felipe e sou advogado, com mais de 20 anos de atuação no mercado jurídico brasileiro, especializado em processos eletrônicos. Sou um profissional comprometido em oferecer serviços jurídicos de alta qualidade e eficiência, utilizando as mais modernas tecnologias disponíveis para garantir a excelência nos resultados.<br/><br/>Tenho como foco exclusivo a atuação em processos eletrônicos, o que me permite oferecer um atendimento personalizado e especializado em todas as fases do processo, desde o início até o desfecho final. Conto com uma equipe capacitada e experiente, que está sempre atualizada em relação às mudanças legislativas e tecnológicas, para oferecer as melhores soluções jurídicas aos nossos clientes.<br/><br/>Além disso, prezo pelo relacionamento de confiança e transparência com meus clientes, buscando sempre manter uma comunicação clara e objetiva. Se você procura um advogado especializado em processos eletrônicos, comprometido em oferecer um atendimento personalizado e de qualidade, entre em contato conosco e agende uma consulta. Estamos prontos para ajudá-lo.</p>
            <Popup contentStyle={{background: '#4aa8ef', width: '50%', maxWidth: '600px'}} arrowStyle={{display: 'none'}} trigger={<button className='button'>Entre em contato</button>} position="top center">
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
        </>
    )
}

export default HomeCom