import tw from "tailwind-styled-components";

export const List = tw.ul`
  block
  max-w-[542px]
  my-0
  mx-auto
  py-0
  px-4
  list-none
  tablet:max-w-[720px]
  tablet:columns-2
  desktop:max-w-5xl
  desktop:columns-3
`;

export const ListItem = tw.li`
  mb-6
  transition-all
  duration-200
  ease-in-out
  hover:scale-[1.02]
  tablet:inline-block
  tablet:max-w-[332px]
  tablet:mr-6
  tablet:even:mr-0
  desktop:max-w-[312px]
  desktop:even:mr-6
`;
