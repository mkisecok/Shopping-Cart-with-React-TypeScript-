import styled from 'styled-components';

export const Wrapper = styled.div`
display:flex;
font-family:'Courier New', Courier, monospace;
justify-content:space-between;
flex-direction:column;
width:100%;
border:1px solid lightgrey;
border-radius:10px;
height:100%;

button { 
    border-radius: 0 0 10px 10px;
 }
 img{
     max-height:250px;
     object-fit:cover;
     border-radius: 10px 10px 0 0;
 }

 div{
    
     padding:1rem ;
     height:100%;
     display:flex;
     flex-direction:column;
   
     
    
 }
 h4{
    color:green;
    align-self:flex-end;
    justify-self:flex-end;
    padding:1rem ;
 }
`;