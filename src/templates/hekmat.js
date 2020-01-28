import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"


const Arabic = styled.h3`
`;

const Persian = styled.h3`
`;

const Hr = styled.hr`
`;

export default class TagTemplate extends React.Component {
  render() {
    console.log(this.props.pageContext)
    const hekmat = this.props.data.hekmatsJson
    return (
	<Layout>
	<Arabic>{hekmat.ar}</Arabic>
	<Persian>{hekmat.fa}</Persian>
	</Layout>
    )
  }
}

export const query = graphql`
  query($slug: String!) {
    hekmatsJson(fields: { slug: { eq: $slug } }) {
      ar
      fa
    }
  }`
