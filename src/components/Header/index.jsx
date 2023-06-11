import React from "react";
import styled from "styled-components";
import { BsMoonFill, BsMoon } from "react-icons/bs";
import { Link } from 'react-router-dom'

import { Container } from "../Container";

const HeaderEl = styled.header`
  box-shadow: var(--shadow);
  // background-color: (--color-ui-base);
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

const Title = styled(Link).attrs({
  to: "/",
})`
  color: var(--color-text);
  font-size: var(--fs-sm);
  text-decoration: none;
  font-weight: var(--fw-bold);
`;

const ModeSwitcher = styled.div`
  color: var(--color-text);
  font-size: var(--fs-sm);
  cursor: pointer;
  // font-weight: var(--fw-bold)
  text-transform: capitalize;
`;

export const Header = () => {
  const [theme, setTheme] = React.useState("light");

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  React.useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <HeaderEl>
      <Container>
        <Wrapper>
          <Title>Where is the world?</Title>
          <ModeSwitcher onClick={toggleTheme}>
            {theme === "light" ? (
              <>
                <BsMoonFill size="14px" />
                <span style={{ marginLeft: "0.75rem" }}>Dark Theme</span>
              </>
            ) : (
              <>
                <BsMoon size="14px" />
                <span style={{ marginLeft: "0.75rem" }}>Light Theme</span>
              </>
            )}
          </ModeSwitcher>
        </Wrapper>
      </Container>
    </HeaderEl>
  );
};
