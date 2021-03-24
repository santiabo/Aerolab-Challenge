import { Nav, Header, Div, Title, TitleWrapper } from "./styled"
import banner from "../../images/header-x1.png"

const Banner = () => {
  return (
    <>
      <Nav>
      
        <Header src={banner}></Header>
        <TitleWrapper>
        <Title>Electronics</Title>
        </TitleWrapper>
        <Div />
       
      </Nav>
    </>
  )
};

export default Banner;