import { VagaContainer, VagaTitulo, VagaLink } from './style'

type Props = {
  titulo: string
  localizacao: string
  nivel: string
  modalidade: string
  salarioMin: number
  salarioMax: number
  requisitos: string[]
}

const Vaga = (props: Props) => (
  <VagaContainer>
    <VagaTitulo>{props.titulo}</VagaTitulo>
    <ul>
      <li>Localização: {props.localizacao}</li>
      <li>Senioridade: {props.nivel}</li>
      <li>Tipo de Contratação: {props.modalidade}</li>
      <li>
        Salário: R$ {props.salarioMin} - R$ {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </ul>
    <VagaLink>Ver Detalhes e Candidatar-se</VagaLink>
  </VagaContainer>
)

export default Vaga
