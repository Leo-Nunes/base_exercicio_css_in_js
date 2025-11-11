import { FormEvent, useState, ChangeEvent } from 'react';
import { FormVagasContainer, Campo, BotaoPesquisar } from './styles';

type Props = {
  aoPesquisar: (termo: string) => void;
};

const FormVagas: React.FC<Props> = ({ aoPesquisar }) => {
  const [termo, setTermo] = useState('');

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    aoPesquisar(termo.toLowerCase());
  };

  const aoDigitar = (e: ChangeEvent<HTMLInputElement>) => {
    setTermo(e.target.value);
  };

  return (
    <FormVagasContainer onSubmit={aoEnviarForm}>
      <Campo
        placeholder="Front-end, fullstack, node, design"
        value={termo}
        onChange={aoDigitar}
        type="search"
      />
      <BotaoPesquisar
        ativo={termo.trim() !== ''}
        disabled={termo.trim() === ''}
        type="submit"
      >
        Pesquisar
      </BotaoPesquisar>
    </FormVagasContainer>
  );
};

export default FormVagas;
