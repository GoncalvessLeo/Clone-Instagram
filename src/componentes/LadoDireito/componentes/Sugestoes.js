import './Sugestoes.css'
export default function Sugestao(props){
    return(
        <div className='sugestao'>
            
            <img src={props.imgSuges}/>
            <p>{props.nomeSuges}</p>
            <p>Seguir</p>
        </div>
    )
}