
import { Nav, Logo, Wrapper, PointsWrapper, Coin, Name, Points } from "./styled"
import logo from "../../images/aerolab-logo.svg"
import { useSelector } from "react-redux";


const Header = () => {

  const userName = useSelector((state)=> state.user.name);
  const userPoints = useSelector((state)=> state.user.points)


  return (
    <>
      <Nav>
        <Logo src={logo} alt="Logo" />
        <Wrapper>
          <Name>{userName}</Name>
          <PointsWrapper>
            <Points>{userPoints}</Points>
            <Coin></Coin>
          </PointsWrapper>
        </Wrapper>

      </Nav>
    </>
  )
};

export default Header;
