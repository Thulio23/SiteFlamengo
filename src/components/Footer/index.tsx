import * as S from "./styles"
import Instagram from "../../assets/insta.png"
import Youtube from "../../assets/youtube.png"
import Facebook from "../../assets/facecook.png"

export function Footer() {
  return (
    <S.Footer>
      <a href="https://www.facebook.com/FlamengoOficial" target="_blank">
      <img src={Facebook} alt="Facebook" />
      </a>

      <a href="https://www.instagram.com/flamengo/" target="_blank">
      <img src={Instagram} alt="Instagram" />
      </a>

      <a href="https://www.youtube.com/@flamengo" target="_blank">
      <img src={Youtube} alt="Youtube" />
      </a>
    </S.Footer>
  )
}