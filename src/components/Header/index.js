import * as S from "./style";

import Logo from "../../image/logo.svg";
import BackgroundImage from "../../image/background.png";

const Header = () => {
  return (
    <S.Container bgImage={BackgroundImage}>
      <S.Header>
        <img src={Logo} alt="logo" />

        <S.BoxBtn>
          <S.BtnHeader>about</S.BtnHeader>
          <S.BtnHeader>recipes</S.BtnHeader>
          <S.BtnHeader>subscribe</S.BtnHeader>
        </S.BoxBtn>
      </S.Header>

      <S.BoxTitle>
        <h1>recipes</h1>
      </S.BoxTitle>
    </S.Container>
  );
};

export default Header;
