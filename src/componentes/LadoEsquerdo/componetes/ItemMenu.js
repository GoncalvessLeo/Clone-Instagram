import './ItemMenu.css'
export default function ItemMenu(props){
    return(
        <div className="ItemMenu">
             <p>
                    <span className='icone'>{props.icone}</span>
                    <span className='texto'>{props.texto}</span>
                </p>
        </div>
    )
}