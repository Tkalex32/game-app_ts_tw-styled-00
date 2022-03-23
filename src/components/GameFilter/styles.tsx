import styled from "styled-components";
import tw from "tailwind-styled-components/dist/tailwind";
import { backgroundColor, secondaryTextColor } from "../styles/theme";

const FormBase = styled.form`
  color: ${secondaryTextColor};
`;

export const Form = tw(FormBase)`
  flex
  justify-between
  max-w-[542px]
  py-0
  px-4
  my-6
  mx-auto
  box-border
  tablet:max-w-[720px]
  desktop:max-w-[1010px]
`;

export const Label = tw.label`
  mr-6
  basis-1/3
  last-of-type:mr-0
  text-center
`;

const SelectBase = styled.select`
  background-color: ${backgroundColor};
`;

export const Select = tw(SelectBase)`
  w-full
  mt-0
  text-white
`;
