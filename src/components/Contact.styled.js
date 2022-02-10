import styled from 'styled-components'
import { largeDevice, mediumDevice } from '../styles/mediaBreakpoints';
import { PositionedImg } from "./PositionedImg";

export const Contact = styled.div`
    position:relative;
    max-width:1440px;
    background: no-repeat -92px 101px url('../images/Cloud.svg');
    background-color: #FFFFFF;
    margin: 0 auto;
    overflow: hidden;
`

export const Ellipse = styled.div`
    position: absolute;
    width: 87px;
    height: 87px;
    left: min(75%, 714px);
    top: 21px;

    background: #FAD34F;
    opacity: 0.1;

    border-radius: 50%;
`

export const Goodie = styled(PositionedImg).attrs(props => ({src:'images/Goodie.svg'}))`
    top: 1322px;

    @media ${largeDevice}{
        left: calc(40% + 187px) /*763px*/;
        top: 516px;
    }
`

export const RedCartoon1 = styled(PositionedImg).attrs(props => ({src:'images/red_cartoon.svg'}))`
    display: none;

    @media ${mediumDevice}{
        display: inline;
        left: 500px;
        top: 600px;
    }
    @media ${largeDevice}{
        left: calc(40% + 186px) /*762px*/;
        top: 558px;
    }
`

export const RedCartoon2 = styled(PositionedImg).attrs(props => ({src:'images/red_cartoon.svg'}))`
    display: none;

    @media ${mediumDevice}{
        display: inline;
        left: 15px;
        bottom: -60px;
    }
`

export const YellowCartoon = styled(PositionedImg).attrs(props => ({src:'images/yellow_cartoon.svg'}))`
    left: 29px;
    top: 23px;
`

export const Map = styled.div`
    position: absolute;
    width: 976px;
    height: 976px;
    left: 51px;
    top: 754px;

    border-radius:50%;

    background: 1138px -80px url('../images/Captura de Tela 2021-01-21 às 10.47 1.png'), linear-gradient(110.34deg, #FF91CB 12.64%, #F472B7 69.79%);
    box-shadow: inset 0px 16px 42px rgba(0, 0, 0, 0.1);

    @media ${largeDevice}{
        left: calc(40% + 238px) /*814px*/;
        top: -52px;
    }
`