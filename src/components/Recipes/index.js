import * as S from "./style";

import Bolo from "../../image/bolo.png";
import Pizza from "../../image/pizza.png";
import Batida from "../../image/batida.png";

const Recipes = () => {
  return (
    <S.Container>
      <S.Title>latest recipes</S.Title>
      <S.BoxCard>
        <S.Card>
          <S.Image src={Bolo} alt="" />
          <S.Paragraph>Red Velvet Cake</S.Paragraph>
        </S.Card>
        <S.Card>
          <S.Image src={Pizza} alt="" />
          <S.Paragraph>Red Velvet Cake</S.Paragraph>
        </S.Card>
        <S.Card>
          <S.Image src={Batida} alt="" />
          <S.Paragraph>Red Velvet Cake</S.Paragraph>
        </S.Card>
      </S.BoxCard>
    </S.Container>
  );
};

export default Recipes;
