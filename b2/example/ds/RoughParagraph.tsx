import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  fontSize?: number;
};

const Text = styled.p(props => ({
  fontFamily: "'Reenie Beanie', cursive",
  fontSize: props.fontSize ?? 24,
}));

const RoughParagraph = (props: Props) => {
  const { children, fontSize } = props;
  return <Text fontSize={fontSize}>{children}</Text>;
};

export { RoughParagraph };
