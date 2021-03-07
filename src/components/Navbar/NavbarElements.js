import styled from "styled-components";
import { FcGraduationCap } from "react-icons/fc";

export const NavbarContainer = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  min-width: 100vw;
  max-width: 100vw;
  position: fixed;
  z-index: 999;
  background: rgba(0, 0, 0, 0.7);
  transition: 0.5s;

  &.scroll-up {
    transition: 0.5s;
    transform: translateY(0);
  }
  &.scroll-down {
    transition: 0.5s;
    transform: translateY(-100%);
  }
`;

export const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 90%;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

export const NavLogo = styled.a`
  display: flex;
  align-items: center;
  letter-spacing: 3px;
  font-family: "Patua One", cursive, sans-serif;
  font-weight: 600;
  margin-left: clamp(1.2rem, 4vw, 1.7rem);
  font-size: clamp(1.4rem, 4vw, 2rem);
  cursor: pointer;
  color: #ffc;
  text-shadow: 0 1px #808d93, -1px 0px #cdd2d5, -1px 2px #808d93,
    -2px 1px #cdd2d5, -2px 3px #808d93, -3px 2px #cdd2d5, -4px 3px #808d93;

  &:hover {
    text-decoration: none;
    color: #fff;
  }
  & > a {
    color: #fff;
    text-decoration: none;
  }
`;

export const Icon = styled(FcGraduationCap)`
  margin-right: 0.5rem;
  font-size: clamp(1.8rem, 4vw, 2rem);
`;

export const NavMenu = styled.ul`
  display: flex;
  height: 100%;
  align-items: center;
  margin: 0;
  @media screen and (max-width: 1400px) {
    padding-right: 2rem;
  }
  @media screen and (max-width: 992px) {
    padding-right: 1rem;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 60px;
    width: 100%;
    margin: 0 auto;
    background: rgba(0, 0, 0, 0.7);
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease-in-out;
    height: 200px;
    z-index: -1;
    opacity: ${(props) => (props.isOpen ? "1" : "0")};
    top: ${(props) => (props.isOpen ? "60px" : "-100vh")};
    border-bottom-left-radius: 10% 10px;
    border-bottom-right-radius: 10% 10px;
  }
`;

export const NavbarItem = styled.li`
  display: flex;
  align-items: center;
  transition: all 0.8s linear;
  padding: ${(props) => (props.selected ? "0.5rem 1rem" : "0 1rem")};
  margin: 0 1.5rem;
  font-family: "Patua One", cursive, sans-serif;
  cursor: pointer;
  color: #fff;
  user-select: none;
  border-radius: 10px;
  color: ${(props) => (props.selected ? "cyan" : "#fff")};
  border-bottom: 2px solid
    ${(props) => (props.selected ? "cyan" : "transparent")};
  border-top: 2px solid ${(props) => (props.selected ? "cyan" : "transparent")};
  @media screen and (max-width: 992px) {
    font-family: 1rem;
    padding: ${(props) => (props.selected ? "0.3rem 0.5rem" : "0 0.5rem")};
    margin: 0 0.5rem;
  }
  @media screen and (max-width: 768px) {
    padding: 0.2rem 2rem;
    margin: 0.5rem 0;
  }
`;

export const Bars = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fff;
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    cursor: pointer;
    margin-right: clamp(1.2rem, 4vw, 1.7rem);
  }
`;

export const ScrollTop = styled.button`
  background: #db0f27;
  outline: none;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  line-height: 40px;
  font-size: 16px;
  width: 40px;
  height: 40px;
  position: fixed;
  right: 16px;
  bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  z-index: 999;
  transition: all 0.5s ease;
  transform: translateY(100px);
  opacity: 0;
  color: #fff;
  border: 5px solid transparent;
  &.showBtn {
    opacity: 1;
    transform: translateY(0);
  }

  &:focus {
    outline: none;
  }

  & span {
    width: 100%;
    height: 100%;
    position: absolute;
    background: red;
    z-index: -1;
    transform: scale(0);
    border-radius: 50%;
    transition: 0.5s;
  }
  &:hover {
    font-weight: bold;
    transform: rotate(360deg);
    box-shadow: 0 0 2px 2px red, 0 0 7px 7px red;
    border: 5px solid rgba(0, 0, 0, 0.5);
  }
  &:hover span {
    transition: 0.5s;
    transform: scale(1) rotate(360deg);
  }
`;
