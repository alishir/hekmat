import React from "react"
import styled from "styled-components"

const Div = styled.div`
  font-family: Noto Naskh Arabic UI;
`


export default ({ children }) => (
    <Div>
    {children}
  </Div>
)
