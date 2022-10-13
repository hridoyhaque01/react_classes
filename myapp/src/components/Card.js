import React from "react";
import nerdImage from "../assets/images/illustration.png";
import Button from "./Button";
import {
  ButtonContainer,
  CardContainer,
  ContentContainer,
} from "./styles/Container.styles";
import { StyledTitle } from "./styles/Custom.styles";
import { H1, Image, P, Tag } from "./styles/Elements";

export default function Card() {
  return (
    <CardContainer>
      <ContentContainer>
        <Tag color="#4361ee">Exclusive</Tag>
        <H1>
          <StyledTitle text="React Styled Componet" color="#fff" />
        </H1>
        <P>
          Exclusie React JS Tutorial on Styled wher you will learn why we need
          this & how ue it
        </P>
        <ButtonContainer>
          <Button link="https://lwsbd.link/rsc" text="Watch now" />
          <Button link="https://lwsbd.link/react" text="Github page" />
        </ButtonContainer>
      </ContentContainer>
      <Image src={nerdImage} alt="nerd" width="300px" />
    </CardContainer>
  );
}
