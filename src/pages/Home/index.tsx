import * as S from './styles'
import Gabigol from "../../assets/gabigol.png"
import Estadio from "../../assets/estadio.png"
import Flamengo from "../../assets/flamengo.png"


export function Home() {
  return (
    <S.Section>
      <S.Jogador>
        <img src={Gabigol} alt="Gabigol" />
        <img src={Estadio} alt="Estadio" />
      </S.Jogador>
      <S.Flamengo>
        <img src={Flamengo} alt="Flamengo" />  
      </S.Flamengo>
    </S.Section>
  )
}
