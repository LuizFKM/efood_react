import Button from '../Button'

import {
  CardContainer,
  CardContent,
  CardRate,
  CardTitle,
  CategoryInfos,
  ContainerDescription
} from './styles'
import Estrela from '../../assets/images/estrela.png'
import { TagContainer } from '../Tag/styles'
import { Pratos } from '../../pages/Home'

const Product = ({
  id,
  titulo,
  destacado,
  tipo,
  avaliacao,
  descricao,
  capa
}: Pratos) => (
  <CardContainer>
    <CategoryInfos>
      {destacado ? <TagContainer>Destaque da Semana</TagContainer> : null}
      <TagContainer key={id}>{tipo}</TagContainer>
    </CategoryInfos>
    <img src={capa} alt={titulo} />
    <CardContent>
      <CardTitle>
        <h3>{titulo}</h3>
        <CardRate>
          <h3>{avaliacao}</h3>
          {destacado ? <img src={Estrela} alt="Estrela" /> : null}
        </CardRate>
      </CardTitle>
      <ContainerDescription>
        <p>{descricao}</p>
      </ContainerDescription>
      <Button type="link" to={`/perfil/${id}`} title="Saiba mais sobre o prato">
        Saiba Mais
      </Button>
    </CardContent>
  </CardContainer>
)

export default Product
