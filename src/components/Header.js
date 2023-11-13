import { Link } from "react-router-dom";
import { routes } from "../routes";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
`;
const Logo = styled.div``;
const Menu = styled.div`
  display: flex;
`;

export const Header = () => {
  return (
    <Wrap>
      <Logo>
        <Link to={routes.home}>MOIVE</Link>
      </Logo>
      <Menu>
        <li>
          <Link to={routes.detail}>Home</Link>
        </li>
        <li>
          <Link to={routes.search}>search</Link>
        </li>
      </Menu>
    </Wrap>
  );
};
