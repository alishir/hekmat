import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import NextImg from "../../static/next.png"
import SEO from '../components/SEO'

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


function GenerateNav(props) {
  const next = props.next
  const pre = props.pre
  if (next !== null && pre !== null) {
    return (
      <HekmatNav>
      <Link to={pre.fields.slug}>
      <PreButton src={NextImg}/>
      </Link>
      <Link to={next.fields.slug}>
      <NextButton src={NextImg}/>
      </Link>
	</HekmatNav>
    );
  } else if (next !== null) {
    return (
      <HekmatNav>
      <Link to={next.fields.slug}>
      <NextButton src={NextImg}/>
      </Link>
	</HekmatNav>
    );
  } else if (pre !== null) {
    return (
      <HekmatNav>
      <Link to={pre.fields.slug}>
      <PreButton src={NextImg}/>
      </Link>
	</HekmatNav>
    );
  }
}

export default class Hekmat extends React.Component {
  render() {
    const { next, previous, slug} = this.props.pageContext
    const hekmat = this.props.data.hekmatsJson
    const num = Number(slug.replace(/\//g, '')).toLocaleString('fa-IR')
    const InfoTxt = "حکمت " + num
    return (
	<Layout>
	    <SEO title={InfoTxt} />
	    <Container>
		<Header>
	            <Info>{InfoTxt}</Info>
		    <AmirHeadear>قال امیرالمومنین علی علیه السلام:</AmirHeadear>
		</Header>
		<Wrapper>
		    <Arabic>{hekmat.ar}</Arabic>
		    <hr align="center" width="50%"/>
		    <Persian>{hekmat.fa}</Persian>
		</Wrapper>
		<GenerateNav next={next} pre={previous}/>
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
