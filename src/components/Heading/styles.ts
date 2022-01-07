import styled from "styled-components";
type ContainerProps = {
  bg: string;
};
export const Container = styled.span<ContainerProps>`
  &::before {
    content: "";
    width: 32px;
    height: 1px;
    background-color: ${(props) => `var(--bs-${props.bg})`};
    position: absolute;
    top: 50%;
    right: calc(110% - 1.5rem);
    transition: all 0.2s ease;
  }
  &:hover {
    &::before {
      right: calc(120% - 1.5rem);
    }
  }
  @media only screen and (max-width: 960px) {
    &::before {
      width: 50px;
    }
  }
`;
