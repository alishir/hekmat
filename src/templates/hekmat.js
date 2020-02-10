import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import NextImg from "../../static/images/next.png"
import SEO from '../components/SEO'


const Container = styled.div`
  position: relative;
`

const CenterArea = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;

  &:before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
`

const Wrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
  text-align: center;
`;

const HekmatNav = styled.div`
  text-align: center;
`;

const Arabic = styled.h3`
  font-family: Arabic;
  direction: rtl;
  margin 2rem 2rem;
  font-size: 1.8em;
  text-align: center;
`;

const Persian = styled.h3`
  font-family: Persian;
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
             <CenterArea>
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
             </CenterArea>
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
