import React from "react"
import { Redirect } from '@reach/router'


export default ({ data }) => {
  console.log(data)
  return(
    <Redirect noThrow to="/1" />
  )
}

/*
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
*/
