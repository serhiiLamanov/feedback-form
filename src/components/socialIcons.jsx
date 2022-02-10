import { StyledSocialIcons } from "./SocialIcons.styled";

export default function SocialIcons() {
    return (
      <StyledSocialIcons>
        <li>
          <a href='https://linkedin.com'>
            <img src='../images/in.png' alt='linkedin'/>
          </a>
        </li>
        <li>
            <a href='https://twitter.com'>
            <img src='../images/t.png' alt='twitter'/>
            </a>
        </li>
        <li>
          <a href='https://facebook.com'>
            <img src='../images/f.png' alt='facebook'/>
          </a>
        </li>
        <li>
          <a href='https://www.pinterest.com'>
            <img src='../images/p.png' alt='pinterest'/>
          </a>
        </li>
      </StyledSocialIcons>
    )
  }