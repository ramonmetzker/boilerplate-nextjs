import styled from "styled-components";

export const TagContainer = styled.button`
  padding: 5px 15px;
  border-radius: 6px;
  border: 1px solid var(--bs-gray-30);
  background: var(--bs-white);
  font-size: 12px;
  transition: all 0.2s ease;
  animation: blink 2s;
  animation-iteration-count: 3;
  &:hover {
    background: var(--bs-gray-5);
  }
  &.selected {
    background: var(--bs-primary);
    color: var(--bs-white);
    border: 1px solid transparent;
  }
  @keyframes blink {
    50% {
      border-color: var(--bs-primary);
    }
  }
`;
