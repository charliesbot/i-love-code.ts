import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
};

const Text = styled.span({
  fontFamily: "'Reenie Beanie', cursive",
  fontSize: 24,
});

const RoughText = (props: Props) => {
  const { children } = props;
  return <Text>{children}</Text>;
};

export { RoughText };
