import styled from "styled-components";

export const PrimaryButton = styled.button`
  outline: none;
  border: none;
  border-radius: 6px;
  padding: 20px 30px;
  background-color: var(--bs-primary);
  transition: all 0.2s ease;
  color: var(--bs-white);
  text-transform: uppercase;
  font-weight: 700;
  min-width: 150px;
  letter-spacing: 1.5pt;
  font-size: 14px;
  line-height: 1;
  &:hover {
    background-color: var(--bs-primary-dark);
  }
`;

export const SecondaryButton = styled.button`
  outline: none;
  border: 2px solid var(--bs-gray-20);
  border-radius: 6px;
  padding: 20px 30px;
  background-color: var(--bs-white);
  transition: all 0.2s ease;
  color: var(--bs-primary);
  text-transform: uppercase;
  font-weight: 700;
  min-width: 150px;
  letter-spacing: 1.5pt;
  font-size: 14px;
  line-height: 1;
  &:hover {
    background-color: var(--bs-gray-5);
  }
`;

export const DisabledButton = styled.button`
  outline: none;
  border: none;
  border-radius: 6px;
  padding: 20px 30px;
  background-color: var(--bs-gray-20);
  transition: all 0.2s ease;
  color: var(--bs-gray-40);
  text-transform: uppercase;
  font-weight: 700;
  min-width: 150px;
  letter-spacing: 1.5pt;
  font-size: 14px;
  line-height: 1;
  cursor: not-allowed;
`;
