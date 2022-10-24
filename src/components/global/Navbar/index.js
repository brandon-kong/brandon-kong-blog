import * as React from "react"
import styled from "styled-components"

const Container = styled.div`
    min-height: 65px;
    box-shadow: rgba(99, 99, 99, 0.15) 0px 1px 1px 0px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Logo = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-size: 1.4rem;

`

const LinkContainer = styled.ul`
    display: flex;
    list-style: none;
    align-items: center;
    gap: 2rem;
`

const LinkItem = styled.li`
    color: black;
    font-family: 'Raleway', sans-serif;
`

const Nav = () => {
  return (
    <Container>
      <Logo>brandon kong blogs</Logo>
      <LinkContainer>
        <LinkItem>Home</LinkItem>
        <LinkItem>About Me</LinkItem>
      </LinkContainer>
    </Container>
  )
}

export default Nav