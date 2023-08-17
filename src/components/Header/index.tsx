import * as S from "./styles"
import Escudo from "../../assets/escudo.png"

export function Header() {
  return (
    <S.Header>
      <picture>
        <a href="https://www.flamengo.com.br/" target="_blank">
          <img src={Escudo} alt="Flamengo" />
        </a>
      </picture>
      <S.NavBar>
        <ul>
          <li>
            <a href="/">Página Inicial</a>
          </li>
          <li>
            <a href="/list">Escalação</a>
          </li>
        </ul>
      </S.NavBar>
    </S.Header>
  )
}