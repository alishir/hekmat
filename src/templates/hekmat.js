import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"


const LongArabic = styled.textarea`
  font-family: Noto Naskh Arabic UI;
  border: none;
  resize: none;
  
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  text-align: center;
  direction: rtl;
  height: 50%;
  max-height: 50%;
`;

const LongPersian = styled.textarea`
  font-family: Noto Naskh Arabic UI;
  resize: none;
  border: none;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  text-align: center;
  direction: rtl;
  max-height: 50%;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

const Arabic = styled.h3`
  font-family: Arabic;
  direction: rtl;
  margin 2rem 2rem;
  font-size: 1.8em;
`;

const Persian = styled.h3`
  direction: rtl;
  margin 2rem 2rem;
  font-family: Noto Naskh Arabic;
`;


const NextButton = styled.img`
  margin 1rem 2rem;
  max-width: 15%;
  width: 64px;
`;

const PreButton = styled(NextButton)`
  transform: rotate(180deg);
`;


export default class TagTemplate extends React.Component {
  render() {
    const cont = this.props.pageContext
    const hekmat = this.props.data.hekmatsJson
    return (
      <Layout>
	<Wrapper>
	  <div>
	    <Arabic>{hekmat.ar}</Arabic>
	    <hr align="center" width="50%"/>
	    <Persian>{hekmat.fa}</Persian>
	    <div>
		<a href="salam.txt">
		<PreButton src="/next.png"/>
		</a>
		<a href="salam.txt">
		<NextButton src="/next.png"/>
		</a>
	    </div>
	  </div>
	</Wrapper>
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
