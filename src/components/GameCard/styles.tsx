import styled from "styled-components";
import tw from "tailwind-styled-components";
import { Link } from "react-router-dom";
import {
  backgroundColor,
  primaryTextColor,
  secondaryColor,
  secondaryTextColor,
  tertiaryTextColor,
} from "../styles/theme";

const StyledLinkBase = styled(Link)`
  background-color: ${secondaryColor};
`;

export const StyledLink = tw(StyledLinkBase)`
  inline-block
  w-full
  rounded-2xl
  no-underline
  overflow-hidden
`;

export const Img = tw.img`
  w-full
`;

const TitleBase = styled.h2`
  color: ${primaryTextColor};
`;

export const Title = tw(TitleBase)`
  m-0
  text-2xl
  font-medium
  tablet:overflow-hidden
  tablet:text-ellipsis
`;

export const Details = tw.div`
  p-5
  pb-3
  tablet:whitespace-nowrap
`;

const DescriptionBase = styled.p`
  color: ${secondaryTextColor};
`;

export const Description = tw(DescriptionBase)`
  text-base
  mb-4
  tablet:overflow-hidden
  tablet:text-ellipsis
`;

const GenreBase = styled.p`
  background-color: ${backgroundColor};
  color: ${tertiaryTextColor};
`;

export const Genre = tw(GenreBase)`
  mb-2
  py-[2px]
  px-1
  rounded-md
  text-xs
  font-bold
  float-right
`;

export const Icons = tw.div`
  flex
`;

export const Icon = tw.img`
  w-5
  h-5
  mr-2
`;
