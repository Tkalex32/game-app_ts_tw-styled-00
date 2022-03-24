import styled from "styled-components";
import tw from "tailwind-styled-components";
import {
  primaryColor,
  primaryTextColor,
  secondaryColor,
  secondaryTextColor,
} from "../styles/theme";
import { Link } from "react-router-dom";

export const Container = tw.div`
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
