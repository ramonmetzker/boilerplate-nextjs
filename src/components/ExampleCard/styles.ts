import styled from "styled-components";

export const CardContainer = styled.div`
  border-radius: 6px;
  border: 1px solid var(--bs-gray-5);
  border-top: 3px solid var(--bs-primary-light);
  margin-bottom: 1rem;
  background: var(--bs-white);
  transition: all 0.2s ease-in-out;
  &:hover {
    background: var(--bs-gray-5);
  }
`;
