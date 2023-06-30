import './Post_inferior.css'

import { AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { SlPaperPlane } from 'react-icons/sl';
import{RiFlag2Line} from 'react-icons/ri'

export default function PostInferior(props) {
    return (
        <div className="parteInferior">
            <div className='icons'>
                <div className='coracao'>
                <AiOutlineHeart title='Curtir'/>
                </div>
                <FaRegComment title='Comentar'/>
                <SlPaperPlane title='Compartilhar publicação'/>
                <div className='save'>
                <RiFlag2Line />
                </div>
            </div>
            <div className='CurtidoPor'>
                <p>Curtido por</p>
                <span>{props.Curtida}</span>
                <p>e</p>
                <span>outras pessoas</span>
            </div>
            <div className='textoLegenda'>

                <div className="NomePerfilAutor">
                    {props.NomePerfil}

                </div>
                <div className='legenda'>
                    <p>{props.Legenda}</p>
                    
                </div>
            </div>
            <div className='comentarios'>
            <p>{props.NumerosComents}</p>
            <p></p>

            </div>
            
            <input type="text" id="lname" name="lname" placeholder='Adicione um comentário' ></input>
            
        </div>



    )
}