
import styled from 'styled-components'
import type {
  ButtonHTMLAttributes,
  FormHTMLAttributes,
  InputHTMLAttributes
} from 'react'

type BotaoProps = {
  ativo: boolean
}


export const BotaoPesquisar = styled.button<
  BotaoProps & ButtonHTMLAttributes<HTMLButtonElement>
>`
  background-color: ${({ ativo }) => (ativo ? 'var(--cor-principal)' : '#ccc')};
  border: 1px solid var(--cor-principal);
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: var(--cor-secundaria);
  margin-left: 8px;
  cursor: pointer;
  border-radius: 8px;
  cursor: ${({ ativo }) => (ativo ? 'pointer' : 'not-allowed')};
  transition: background-color 0.2s ease, opacity 0.2s ease;

  &:hover {
    background-color: ${({ ativo }) =>
      ativo ? 'var(--cor-principal-hover, #005bb5)' : '#ccc'};
  }

  &:disabled {
    opacity: 0.6;
    pointer-events: none;
  }
`


export const FormVagasContainer = styled.form<FormHTMLAttributes<HTMLFormElement>>`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${(props) => props.theme?.corFundoFormulario};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`


export const Campo = styled.input.attrs({
  type: 'search'
})<InputHTMLAttributes<HTMLInputElement>>`
  height: 40px;
  padding: 0 16px;
  outline-color: var(--cor-principal);
`
