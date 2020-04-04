import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  background: #FFFFF;
  display: flex;
  justify: space-between;
`;

const MenuBtn = styled.button`
  display: block;
  border: #00000;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  color: black;
`;

const Links = styled.div`
  display: block;
`;

const PageLink = styled.li`
  padding: 0.5rem;
  text-color: black;
`;

function Header() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <HeaderContainer>
      <MenuBtn onClick={() => toggleExpansion(!isExpanded)}>Menu</MenuBtn>

      <Links>
        {[
          { title: "Home", route: "/" },
          { title: "About", route: "/about" },
          { title: "Work", route: "/work" }
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
