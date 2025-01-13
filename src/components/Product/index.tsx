import Button from '../Button'
import Estrela from '../../assets/images/estrela.png'

import { TagContainer } from '../Tag/styles'
import * as S from './styles'

const Product = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa
}: Restaurantes) => (
  <S.CardContainer>
    <S.CategoryInfos>
      {destacado ? <TagContainer>Destaque da Semana</TagContainer> : null}
      <TagContainer key={id}>{tipo}</TagContainer>
    </S.CategoryInfos>
    <img src={capa} alt={titulo} />
    <S.CardContent>
      <S.CardTitle>
        <h3>{titulo}</h3>
        <S.CardRate>
          <h3>{avaliacao}</h3>
          {destacado ? <img src={Estrela} alt="Estrela" /> : null}
        </S.CardRate>
      </S.CardTitle>
      <S.ContainerDescription>
        <p>{descricao}</p>
      </S.ContainerDescription>
      <Button
        variant="cardRestaurante"
        type="link"
        to={`/perfil/${id}`}
        title="Saiba mais sobre o prato"
      >
        Saiba Mais
      </Button>
    </S.CardContent>
  </S.CardContainer>
)

export default Product
