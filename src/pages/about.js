import React from "react"
import styled from "styled-components"
import Header from "../components/header"

const Title = styled.h1`
  font-size: 1.5em;
  font-family: Noto Naskh Arabic UI;
  text-align: center;
  color: palevioletred;
`

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`


export default () =>
  <Wrapper>
  <Header headerText="در مورد هدر"/>
    <Title>
  در مورد این سایت
    </Title>
  </Wrapper>
