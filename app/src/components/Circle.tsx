import styled from 'styled-components'

export const Circle = styled.img<{ radius: string }>`
  height: ${p => p.radius || '200px'};
  width: ${p => p.radius || '200px'};
  border-radius: 50%;
  object-fit: cover;
`
