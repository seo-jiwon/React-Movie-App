import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";

const StyledHeader = styled.header`
  background-color: #000000;
  width: 100%;
  padding: 0px 12px 5px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  li{
    padding: 0px 10px 0px 0px;
  }
  .nav-logo {
    padding: 10px 10px;
    .nav-logo-link {
      text-decoration: none;
      font-size: 30px;
      font-weight: bold;
      color: #FF004F;
    }
  }
  .menuToggleBtn {
    padding: 5px 10px;
    display: none;
    color: white;
    font-size: 25px;
    position: absolute;
    right: 20px;
    top: 15px;
    cursor: pointer;
    box-sizing: content-box;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    .menuToggleBtn {
      display: block;
    }
  }
`;
const NavMenu = styled.ul`
  list-style: none;
  display: flex;
  
  li {
    &:hover {
      cursor: pointer;
      background: #FF004F;
      border-radius: 1px;
    }
  }
  .nav-menu-list {
    text-decoration: none;
    color: white;
    display: block;
    padding: 5px 10px;
    font-weight: bold;
  }
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isToggleOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 0 0 10px;
    z-index: 1;
  }
`;

const Header = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false);

    const handleToggleOpen = () => {
        setIsToggleOpen(!isToggleOpen);
    };
    return (
        <>
            <StyledHeader>
                <div className="nav-logo">
                    <Link to={"/"} className="nav-logo-link">
                        Z PLAY
                    </Link>
                </div>

                <NavMenu isToggleOpen={isToggleOpen}>
                    <li>
                        <Link to={"/movie"} className="nav-menu-list">
                            MOVIE
                        </Link>
                    </li>
                    <li>
                        <Link to={"/movie/sci-fi"} className="nav-menu-list">
                            SCIENCE FICTION
                        </Link>
                    </li>
                    <li>
                        <Link to={"/movie/animation"} className="nav-menu-list">
                            ANIMATION
                        </Link>
                    </li>
                    <li>
                        <Link to={"/movie/romance"} className="nav-menu-list">
                            ROMANCE
                        </Link>
                    </li>
                </NavMenu>
                <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
            </StyledHeader>
        </>
    );
};

export default Header;
