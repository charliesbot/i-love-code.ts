import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { RoughContainer } from './roughWrapper/RoughContainer';
import { Rectangle } from './roughWrapper/Rectangle';
import { getRandomColor } from './getRandomColor';
import { Stack } from '../src/Stack';
import { RoughText } from './ds/RoughText';
import { RoughParagraph } from './ds/RoughParagraph';
import { RoughQuote } from './ds/RoughQuote';

const ActionRow = styled.div({
  display: 'flex',
  gridColumn: 'span 2',
});

const Grid = styled.div({
  display: 'grid',
  width: '100%',
  height: 800,
  gridTemplateColumns: '1fr 1fr',
});

const SideBlock = styled.div({
  padding: 90,
});

type Entry = {
  color: string;
  value: number;
};

const StackDoc = () => {
  const stack = useRef<Stack<Entry>>();
  const [stackArray, setStackArray] = useState<Entry[]>([]);

  const push = () => {
    const color = getRandomColor();
    const randomValue = Math.floor(Math.random() * 1000);
    stack.current?.push({ color, value: randomValue });
    const array = stack.current?.toArray()!;
    setStackArray([...array]);
  };

  const pop = () => {
    stack.current?.pop();
    const array = stack.current?.toArray()!;
    setStackArray([...array]);
  };

  useEffect(() => {
    stack.current = new Stack<Entry>();
  }, []);

  return (
    <Grid>
      <ActionRow>
        <wired-button
          onClick={() => {
            push();
          }}
        >
          <RoughText>Push</RoughText>
        </wired-button>
        <wired-button
          onClick={() => {
            pop();
          }}
        >
          <RoughText>Pop</RoughText>
        </wired-button>
      </ActionRow>
      <SideBlock>
        <RoughQuote>
          <RoughParagraph fontSize={30}>
            So what is a stack, and how does it work? Well, just like a linked
            list, a stack is nothing more than a data structure that contains a
            whole bunch of elements.
          </RoughParagraph>
          <RoughParagraph fontSize={30}>
            And, like linked lists, stacks are linear, which means that there is
            a sequence and an order to how they are constructed and traversed.
          </RoughParagraph>
        </RoughQuote>
      </SideBlock>
      <RoughContainer height={800} width="100%">
        {[...stackArray].reverse().map((x, index) => {
          return (
            <Rectangle
              key={x.value}
              x={10}
              y={600 - 125 * index}
              width={300}
              height={100}
              options={{
                fill: x.color,
                stroke: x.color,
                roughness: 3,
                dashGap: 1,
                fillWeight: 8,
                strokeWidth: 5,
              }}
            />
          );
        })}
      </RoughContainer>
    </Grid>
  );
};

export { StackDoc };
