import './Story.css'

export default function Story(props){
    return(
        
            <div className='Story'>
                <div className='imgStory'>
                    <img alt='' src={props.ImgPerfil}/>
                </div>
                <div className='nomeStory'>
                    <span>{props.NomeDaConta}</span>
                </div>
            </div>
        
    )
    
}