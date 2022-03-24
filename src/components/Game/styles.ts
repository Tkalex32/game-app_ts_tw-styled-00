import styled from "styled-components";
import tw from "tailwind-styled-components";
import {
  primaryColor,
  primaryTextColor,
  secondaryColor,
  secondaryTextColor,
  tertiaryTextColor,
} from "../styles/theme";
import { Link } from "react-router-dom";

export const ErrorContainer = tw.div`
  flex 
  items-center 
  justify-center 
  h-screen
`;

const CardBase = styled.div`
  background-color: ${secondaryColor};
`;

export const Card = tw(CardBase)`
  w-10/12 
  mt-5 
  text-center 
  border-0 
  rounded-lg 
  shadow-lg
`;

const TitleBase = styled.h3`
  color: ${primaryTextColor};
`;

export const Title = tw(TitleBase)`
  mt-4 
  text-4xl
`;

const TextBase = styled.span`
  color: ${secondaryTextColor};
`;

export const Text = tw(TextBase)`
  mb-2 
  text-xl
`;

const ButtonBase = styled(Link)`
  background-color: ${primaryColor};
`;

export const Button = tw(ButtonBase)`
  my-4
  px-3 
  py-2 
  text-white 
  rounded 
  bg-slate-400
`;

const ContainerBase = styled.div`
  color: ${primaryTextColor};
`;

export const Container = tw(ContainerBase)`
  flex 
  flex-col
  items-center 
  justify-center 
  min-h-screen
  m-2
`;

const InfoBase = styled.div`
  color: ${secondaryTextColor};
`;

export const Info = tw(InfoBase)`
  text-center
  flex
  flex-col
  w-full
  my-4
  `;

export const DescContainer = tw.div`
  mt-4
  p-2
`;

export const Description = tw.span`
${(p) => (p.$isReadMore ? "hidden" : "inline")}
`;

export const DescSwitch = tw.span`
  p-2
  block
  z-10
  cursor-pointer
  hover:text-[#7a8288]
`;

export const InfoBox = tw.div`
  flex
${(p) => (p.$isCol ? "flex-col" : "flex-row")}
  justify-around
  align-middle
  text-left
  w-ful
`;

export const InfoBoxBox = tw.div`
  flex
  flex-col
  h-min
  flex-1
  px-2
  `;

const InfoTextBase = styled.p`
  color: ${primaryTextColor};
`;

export const InfoText = tw(InfoTextBase)`
  last:text-[#7a8288]
  last:text-sm
  min-w-[6rem]
`;

export const InfoImgContainer = tw.div`
  
`;
