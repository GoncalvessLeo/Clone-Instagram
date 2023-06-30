import './LadoDireito.css'
import s1 from './componentes/img/liloestich.jpeg';
import s2 from './componentes/img/patolino.jpeg';
import s3 from './componentes/img/lulamolusco.jpeg';
import s4 from './componentes/img/garfield.jpeg';


import imgPerfil from '../LadoEsquerdo/img/aang.jpeg'
import Sugestao from './componentes/Sugestoes';
export default function LadoDireito() {
    return (
        <div className='LadoDireito'>
            <div className='MeuPerfil'>

                <img src={imgPerfil} />
                <div className='textPerfil'>
                    <p>AvatarAang</p>
                    <p>Aang🌪</p>
                </div>
                <span>Mudar</span>

            </div>
            <div className='suges'>
                <p>Sugestões para você</p>
                <span>Ver tudo</span>

            </div>
            
            <Sugestao imgSuges={s1} nomeSuges="Lilo & Stitch"/>
            <Sugestao imgSuges={s2} nomeSuges="Patolino"/>
            <Sugestao imgSuges={s3} nomeSuges="SenhorMolusco"/>
            <Sugestao imgSuges={s4} nomeSuges="Garfield"/>
        
            

            <div className='parteInferiorD'>
                <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •</p> <p>Termos • Localizações • Idioma •  Meta • Verified</p>
                <p>© 2023 INSTAGRAM FROM META</p>
            </div>




        </div>


    )
}