import * as S  from "./Footer.styled";
import SocialIcons from "./socialIcons";

export default function Footer(props){
    return(
        <S.Footer>
            <SocialIcons/>
            <S.GreenCartoon/>
            <S.YellowCartoon/>
        </S.Footer>
    )
}
