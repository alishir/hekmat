import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"

/*
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
*/

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: flex-start;
`

const Wrapper = styled.div`
  align-self: center;
`;

const HekmatNav = styled.div`
  display: flex;
  align-self: center;
  justify-content: space-between;
`;

const Arabic = styled.h3`
  font-family: Arabic;
  direction: rtl;
  margin 2rem 2rem;
  font-size: 1.8em;
  text-align: center;
`;

const Persian = styled.h3`
  font-family: Noto Naskh Arabic;
  direction: rtl;
  margin 2rem 2rem;
  text-align: center;
`;


const NextButton = styled.img`
/*  max-width: 15%; */
  margin: 2rem 2rem;
  width: 64px;
`;

const PreButton = styled(NextButton)`
  transform: rotate(180deg);
`;

const Header = styled.div`
  align-self: center;
`;
const AmirHeadear = styled.h4`
  text-align: center;
  font-family: Noto Naskh Arabic;
  direction: rtl;
`;

const Info = styled.h5`
  text-align: center;
  font-family: Noto Naskh Arabic;
  direction: rtl;
`;


export default class Hekmat extends React.Component {
  render() {
    // const cont = this.props.pageContext
    const hekmat = this.props.data.hekmatsJson
    return (
      <Layout>
	<Container>
	
      <Header>
	<Info>حکمت ۱</Info>
	<AmirHeadear>قال امیرالمومنین علیه السلام:</AmirHeadear>
	</Header>
	  <Wrapper>
	    <Arabic>{hekmat.ar}</Arabic>
	    <hr align="center" width="50%"/>
	    <Persian>{hekmat.fa}</Persian>
	  </Wrapper>
	  <HekmatNav>
	    <a href="salam.txt">
	    <PreButton src="/next.png"/>
	    </a>
	    <a href="salam.txt">
	    <NextButton src="/next.png"/>
	    </a>
	  </HekmatNav>
	</Container>
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
