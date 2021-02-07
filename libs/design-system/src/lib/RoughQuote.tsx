import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode;
  fontSize?: number;
};

const Text = styled.blockquote((props) => ({
  fontFamily: "'Reenie Beanie', cursive",
  fontSize: props.fontSize ?? 24,
  background: '#f9f9f9',
  borderLeft: '10px solid #ccc',
  margin: '1.5em 10px',
  padding: '20px 30px',
  quotes: `"\\201C""\\201D""\\2018""\\2019"`,
  '&:before': {
    color: '#ccc',
    content: 'open-quote',
    fontSize: '4em',
    lineHeight: '0.1em',
    marginRight: '0.25em',
    verticalAlign: '-0.4em',
  },
  p: {},
  'p + p': {
    marginLeft: 10,
  },
}));

const RoughQuote = (props: Props) => {
  const { children, fontSize } = props;
  return <Text fontSize={fontSize}>{children}</Text>;
};

export { RoughQuote };
