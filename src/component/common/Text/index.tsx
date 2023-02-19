import styled from 'styled-components/native';

export const CText = styled.Text<{size?: number; color?: string}>`
  font-size: ${({size = 12}) => size}px;
  color: ${({color = '#000000'}) => color};
`;
