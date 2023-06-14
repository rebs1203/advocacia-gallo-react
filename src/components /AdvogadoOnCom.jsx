import image from '../assets/img_profile.jpeg'
import '../styles/advogado-on-com.css'


const AdvogadoOnCom = () => {
    return (
        <div>
            <h2 className="title-ad">Advogado Online</h2>
            <img className="personal-pic" src={image} alt="foto pessoal do profissional" />
            <p className="text-ad">Dr. Luiz Felipe é um profissional altamente qualificado com mais de 20 anos de experiência, especializado em atendimento virtual e processos eletrônicos nas áreas Cível, Imobiliária, Empresarial, Inventário, Família e Contratos em casos situados no Brasil. Além disso, ele também oferece atendimento presencial na área de Direito de Imigração em casos situados nos Estados Unidos.<br/>Com uma trajetória profissional sólida, Dr. Luiz Felipe tem um histórico de sucesso no atendimento a uma ampla gama de clientes e organizações, fornecendo serviços e soluções excepcionais de acordo com os princípios da Justiça. Sua paixão genuína pela Advocacia o impulsiona a superar expectativas e entregar resultados excepcionais.<br/>Para agendar consultas, você pode entrar em contato pelos números de telefone +1 (561) 812-9369 e +1 (561) 888-2485.</p>
        </div>
    )
}

export default AdvogadoOnCom