import styled from 'styled-components'
import { ReactComponent as MagnifyingGlass } from '../../assets/lupa.svg'
// import { ReactComponent as CloseDoor } from '../../assets/puerta_cerrada.svg'
// import { ReactComponent as OpenDoor } from '../../assets/puerta_abierta.svg'

// #58FAF4

export const SearchInput = styled.input`
   width: 50%;
   padding: 12px 20px;
   border: solid #58FAF4 1px;
   border-radius: 7px 7px 7px 7px;
   box-sizing: border-box;
   box-shadow: inset 0 0 5px #808080;`;

export const SearchIcon = styled(MagnifyingGlass)`
   width: 20px;
   height: 20px;
   fill: #000000;
   &:hover {
      scale: 1.2;
   }`;

export const SearchIconBox = styled.div`
   position: relative;
   display: flex;
   aling-items: center;
   justify-content: center;
   cursor: pointer;
   background-color: white;
   padding: 12px;
   border: solid #58FAF4 1px;
   border-radius: 50%;
   box-shadow: inset 0 0 5px #808080;
   &:hover {
      bos-shadow: inset 0 0 10px #58FAF4;
   }`;

export const NavContainer = styled.nav`
   h3{
      color: white;
      font-weight: 400;
      span{
         font-weight: bold;
      }
   }
   padding: .4rem;
   backgraund-color: #000000;
   display: flex;
   align-items: center;
   justify-content: space-between;
`