import styled from "styled-components";
import { largeDevice } from "../styles/mediaBreakpoints";

export const Form = styled.form`
    max-width:563px;
    margin: 179px auto 748px;

    @media ${largeDevice}{
        margin-left: calc(30% - 285px);    
        margin-bottom: 179px;
    }
    

    h2{
        font-weight: normal;
        font-size: 40px;
        line-height: 130%;
        color: #3E3E3E;
    }

    input,
    textarea{
        width: 100%;
        border: 1px solid #DCDCDC;
        box-sizing: border-box;
        border-radius: 10px;
        resize: none;
        line-height: 32,4px;
        margin-bottom: 8px;
        padding: 30px 45px;
    }
    textarea{
        height: 189px;
    }
    button{
        background: #FAD34F;
        border-radius: 500px;
        border: none;
        color: #FFFFFF;
        margin-top: 24px;
        padding: 26px 49px;
    }
    input, textarea, select, button {
        font-family: inherit;
        font-size: inherit;
    }
`