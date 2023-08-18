import * as S from './styles'
import Zico from "../../assets/zico.png"
import Escalacao from "../../assets/escala.png"
import Mundial from "../../assets/mundial.png"

export function Escala() {
  return (
    <>
      <S.Section>
        <img src={Zico} alt="Zico" />
      </S.Section>
      <S.Section>
        <img src={Escalacao} alt="Escalacao" />
      </S.Section>
      <S.Section>
        <img src={Mundial} alt="Mundial" />
      </S.Section>
    </>
  )
}
