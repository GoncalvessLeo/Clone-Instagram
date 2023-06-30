import { render } from '@testing-library/react';
import './LadoEsquerdo.css';
import ItemMenu from './componetes/ItemMenu';
import { AiFillHome } from "react-icons/ai";
import { AiOutlineSearch} from "react-icons/ai";
import { ImCompass2} from "react-icons/im";
import {MdSlowMotionVideo} from "react-icons/md";
import {FaRegCommentDots}from 'react-icons/fa'
import {AiOutlineHeart} from "react-icons/ai";
import {MdAddCircleOutline} from "react-icons/md";
import {CiMenuBurger} from "react-icons/ci";
import Perfil from './img/aang.jpeg'

export default function LadoEsquerdo(props){
    return(
        <div className='LadoEsquerdo'>
            <div className='Logo'>
                <img src={props.logo}/>
            </div>
            <div className='menu-principal'>
                <ItemMenu icone={<AiFillHome />} texto='Página inicial' />
                <ItemMenu icone={<AiOutlineSearch />} texto='Pesquise' />
                <ItemMenu icone={<ImCompass2 />} texto='Explorar' />
                <ItemMenu icone={<MdSlowMotionVideo />} texto='Reels' />
                <ItemMenu icone={<FaRegCommentDots/>} texto='Mensagens' />
                <ItemMenu icone={<AiOutlineHeart />} texto='Notificações' />
                <ItemMenu icone={<MdAddCircleOutline />} texto='Criar' />
                <ItemMenu icone = {<img src = {Perfil} />} texto='Perfil' />
                <ItemMenu icone={<CiMenuBurger />} texto='Mais' />
            </div>
        </div>
    )
}