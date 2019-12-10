import styled from 'styled-components'

export const ButtonContainer=styled.button`
text-transform:capitalize;
background:transparent;
border:0.05rem solid var(--lightBlue);
border-color:${props=>props.cart? "var(--mainYellow)" : "var(--lightBlue)"};
color:${props=>props.cart? "var(--mainyellow)" : "var(--lightBlue)"};
padding:0.2rem 0.5rem;
border-radius:0.2rem;
/* box-shadow:0px 0px 7px 0px black; */
transition:all 0.1s ease-in-out;
&:hover{
background:${props=>props.cart? "var(--mainyellow)" : "var(--lightBlue)"};
color:white;

}
`