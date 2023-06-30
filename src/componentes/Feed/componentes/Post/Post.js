import './Post.css';
import PostInferior from './componentes/Post_inferior';
export default function Post(props) {
    return (
        <div className='Post'>
            <div className="BarraSuperior">
                <div className="ImagemPerfilAutor"><img className="ImagemPerfilAutor" src={props.ImagemPerfil} /></div>
                <div className="NomePerfilAutor">{props.NomePerfil}</div>
                <div className='horas'><p>{`•${props.horas}`}</p></div>
                <div className="MenuBarraSuperior">...</div>
            </div>
            <div className="ConteudoPost"><img src={props.ImagemPost} /></div>
            <PostInferior NomePerfil={props.NomePerfil} Curtida={props.Curtida} Legenda={props.Legenda} NumerosComents={`Ver todos os ${props.NumerosComents} comentários`} />


        </div>

    )
}