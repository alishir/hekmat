import React from "react"
import styled from "styled-components"
import "./layout.css"

const Div = styled.div`
  height: 100%;
`

export default ({ children }) => (
    <Div>
    {children}
  </Div>
)
