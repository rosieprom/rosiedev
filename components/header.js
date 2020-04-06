import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
`;

const MenuIcon = styled.button`
  @media (min-width: 700px) {
    display: none;
  }
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${props => props.theme.text.primary};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const Links = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;

  @media (max-width: 700px) {
    display: flex;
    background: ${props => props.theme.bg.secondary};
    flex-direction: column;
    justify-content: center;
    padding: 1rem;
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
    transition: transform 0.3s ease-in-out;
  }
`;

const PageLink = styled.li`
  padding: 2rem;
  font-family: "FiraSans";
  font-weight: 500;
  list-style-type: none;

  a {
    color: ${props => props.theme.text.primary};
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;

    display: inline-block;
    padding: 15px 20px;
    position: relative;
  }

  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: ${props => props.theme.text.primary};
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  a:hover:after {
    width: 100%;
    left: 0;
    color: ${props => props.theme.text.primary};
  }
`;

function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <HeaderContainer>
      <title> Rosalie Prom</title>
      <meta
        name="description"
        content="Rosalie Prom | Software Developer | Front end developer"
      />
      <MenuIcon open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </MenuIcon>
      <Links open={open}>
        {[
          { title: "Rosalie Prom", route: "/" },
          { title: "Projects", route: "/projects" },
          { title: "Volunteering", route: "/volunteering" }
        ].map(navigationItem => (
          <PageLink key={navigationItem.title}>
            <Link href={navigationItem.route}>
              <a>{navigationItem.title}</a>
            </Link>
          </PageLink>
        ))}
      </Links>
    </HeaderContainer>
  );
}

export default Header;
