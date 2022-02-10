import styled from "styled-components";
import { PositionedImg } from "./PositionedImg";

export const Footer = styled.footer`
    position: relative;
    height: 200px;
    background-color: #FAFAFA;
    border: 1px solid #D8D8D8;
`

export const YellowCartoon = styled(PositionedImg).attrs(props => ({src:'images/yellow_cartoon.svg'}))`
right: -37px;
top: 51px;
`
export const GreenCartoon = styled(PositionedImg).attrs(props => ({src:'images/green_cartoon.svg'}))`
right: 127px;
`