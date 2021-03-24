import styled from "styled-components"


export const Nav = styled.nav` 
  width: 100%;
  display: flex;
  justify-content: space-around;
  background: #f9f9f9;
  padding-top:30px;

`;

export const Wrapper= styled.div`

  width: 85%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(276px, 1fr));
  grid-template-rows: repeat(4,minmax(276px, 1fr));

`;

