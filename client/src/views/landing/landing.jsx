import styled from 'styled-components'
import { Link } from "react-router-dom";
import { ReactComponent as CloseDoor } from '../../assets/puerta_cerrada.svg'
import './landing.css'

export const EnterIcon = styled(CloseDoor)`
width: 55%;
padding: 10px 11px;
margin-top: 3px;
border-radius: 3px;
&:hover {
   scale: 1.2;
}`;

export const IconBox = styled.div`
   width: 50px;
   margin-top:20%;
   margin-left:50%;
   position: absolute;
   aling-items: center;
   border-radius: 7px 7px 7px 7px;
   justify-content: center;
   cursor: pointer;
   background-color: white;
   border: solid #58FAF4 1px;
   border-radius: 50%;
   box-shadow: inset 0 0 5px #808080;
   &:hover {
      bos-shadow: inset 0 0 10px #58FAF4;
}`;

function Landing() {
   return (
      <body className="backgroundL">
         <div className="welcome">
            <h2>Proyect Dogs</h2>
         </div>
         <Link to='/home'>
            <IconBox>
               <EnterIcon />
            </IconBox>
         </Link>
      </body>
   )
}

export default Landing;