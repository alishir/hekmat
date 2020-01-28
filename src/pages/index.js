import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

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


export default ({ data }) => {
  console.log(data)
  return(
      <Wrapper>
      <Link to="/about/">about</Link>
      <Title>
      السلام علیکم و رحمة الله و برکاته
    </Title>
      </Wrapper>
  )
}

export const query = graphql`
query {
  allHekmatsJson {
    edges {
      node {
	ar
	fields {
          slug
        }
      }
    }
  }
}`
