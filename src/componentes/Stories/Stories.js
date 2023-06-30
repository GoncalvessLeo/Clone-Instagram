import './Stories.css';
import{ useRef} from 'react'
import Story from './componentes/Story';
import Story1 from './img/storyArgos.jpeg';
import Story2 from './img/storyBolha.jpeg';
import Story3 from './img/ben10.jpg';
import Story4 from './img/storyRabbit.jpeg';
import Story5 from './img/storyKurama.jpeg';
import Story6 from './img/ellie.jpg';
import Story7 from './img/storyBackardigans.jpeg';
import Story8 from './img/storyBlueJade.jpeg';
import Story9 from './img/jake.jpg';
import Story10 from './img/kratos.jpg';
import Story11 from './img/storyHarry.jpeg';
import Story12 from './img/logan.jpg';
import Story13 from './img/mk.jpg';
import Story14 from './img/storyHiei.jpeg';
import Story15 from './img/storyMike.jpeg';
import Story16 from './img/patria.jpg';
import Story17 from './img/rock-lee.jpg';
import Story18 from './img/storyLadybug.jpeg';
import Story19 from './img/sherek.jpg';
import Story20 from './img/superchoque.jpg';
import Story21 from './img/trevor.jpg';
import Story22 from './img/storyLucio.jpeg';
import Story23 from './img/storyTom.jpeg';
import Story24 from './img/storyYusuke.jpeg';

import {AiOutlineLeftCircle} from 'react-icons/ai';

function Stories(props) {
    
    const carrossel = useRef(null);

    const Left = (e) =>{
        e.preventDefault();
        carrossel.current.scrollLeft -= carrossel.current.offsetWidth
    }
    const Right = (e) =>{
        e.preventDefault();
        carrossel.current.scrollLeft += carrossel.current.offsetWidth
    }
    return (
        <>
        <div className='Stories' ref={carrossel}>
            <Story ImgPerfil={Story1} NomeDaConta="Argos"/>
            <Story ImgPerfil={Story2} NomeDaConta="O_Bolha"/>
            <Story ImgPerfil={Story3} NomeDaConta="tennyson10"/>
            <Story ImgPerfil={Story4} NomeDaConta="Rabbit_Noir"/>
            <Story ImgPerfil={Story5} NomeDaConta="Kurama"/>
            <Story ImgPerfil={Story6} NomeDaConta="ellieWilliams"/>
            <Story ImgPerfil={Story7} NomeDaConta="OficialUniqua"/>
            <Story ImgPerfil={Story8} NomeDaConta="Blue_e_Jade"/>
            <Story ImgPerfil={Story9} NomeDaConta="jake"/>
            <Story ImgPerfil={Story10} NomeDaConta="god_of_war"/>
            <Story ImgPerfil={Story11} NomeDaConta="HarryPotter "/>
            <Story ImgPerfil={Story12} NomeDaConta="llogan-X"/>
            <Story ImgPerfil={Story13} NomeDaConta="skorpion_mKzin"/>
            <Story ImgPerfil={Story14} NomeDaConta="Hiei"/>
            <Story ImgPerfil={Story15} NomeDaConta="Mike_Wazowski"/>
            <Story ImgPerfil={Story16} NomeDaConta="cap_patria"/>
            <Story ImgPerfil={Story17} NomeDaConta="lee36"/>
            <Story ImgPerfil={Story18} NomeDaConta="LadyBug"/>
            <Story ImgPerfil={Story19} NomeDaConta="Shrek"/>
            <Story ImgPerfil={Story20} NomeDaConta="virgil_shock"/>
            <Story ImgPerfil={Story21} NomeDaConta="trevor_philips"/>
            <Story ImgPerfil={Story22} NomeDaConta="Malfoy_Lucio"/>
            <Story ImgPerfil={Story23} NomeDaConta="Tom_Riddle"/>
            <Story ImgPerfil={Story24} NomeDaConta="Yusuke"/>
            
            
            
            
        </div>
        <div className='buttons'>
                <button onClick={Left}><AiOutlineLeftCircle/></button>
                <button onClick={Right}><AiOutlineLeftCircle/></button>
            </div>
        </>
    )
}

export default Stories;