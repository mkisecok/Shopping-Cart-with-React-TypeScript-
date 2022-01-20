import styled from 'styled-components';

export const Wrapper = styled.div`
display:flex;
justify-content:space-between;
flex-direction:column;
width:100%;
border:1px solid lightgrey;
border-radius:10px;
height:100%;

button { 
    border-radius: 0 0 20px 20px;
 }
 img{
     max-height:250px;
     object-fit:cover;
     border-radius: 10px 10px 0 0;
 }

 div{
     font-family:'Courier New', Courier, monospace;
     padding:1rem ;
     height:100%
 }
`;