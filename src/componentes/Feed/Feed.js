import './Feed.css';
import './componentes/Post/Post';
import'./componentes/Post/componentes/Post_inferior'
import Post from './componentes/Post/Post';
//perfil
import imgP1 from './img/bluediamond1.jpeg'
import imgP2 from './img/katara1.jpeg'
import imgP3 from './img/raven1.jpeg';
import imgP4 from './img/azula2.jpeg';
import imgP5 from './img/bob2.jpeg';
//conteudo
import img1 from './img/bluediamond2.jpeg'
import img2 from './img/katara2.jpeg';
import img3 from './img/raven2.jpeg';
import img4 from './img/azula1.jpeg';
import img5 from './img/bob1.jpeg';




export default function Feed(props) {
    return (
        <div className="Feed"> 
            <Post NomePerfil="BlueDiamond" ImagemPost={img1} ImagemPerfil={imgP1} horas="2h"  Curtida="blue_pearl" NumerosComents='1874' Legenda=" Minha querida perola..."/>
            <Post NomePerfil="Katara" ImagemPost={img2} ImagemPerfil={imgP2} horas="8h" Curtida="TophBeifong" Legenda="Você não é a única que tira a força da lua." NumerosComents='823'/>
            <Post NomePerfil="Ravena"  ImagemPost={img3} ImagemPerfil={imgP3} horas="12h" Curtida="Dick" Legenda="Azarath, Metrion, Zintus" NumerosComents='978'/>
            <Post NomePerfil="Azula"ImagemPost={imgP4} ImagemPerfil={ img4} horas="1d" Curtida="Zuko" Legenda="Festinha na praia hahaha" NumerosComents='2971'/>
            <Post NomePerfil="SrBobEsponja"ImagemPost={imgP5} ImagemPerfil={ img5} horas="1d" Curtida="SirPatrick" Legenda="Ihaaa " NumerosComents='650'/>
        </div>
    )
}