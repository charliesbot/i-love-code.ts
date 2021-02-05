import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { RoughContainer } from './roughWrapper/RoughContainer';
import { Rectangle } from './roughWrapper/Rectangle';
import { getRandomColor } from './getRandomColor';
import { Queue } from '../src/Queue';
import { RoughText } from './ds/RoughText';
import { RoughParagraph } from './ds/RoughParagraph';
import { RoughQuote } from './ds/RoughQuote';
import { Arrow } from './roughWrapper/Arrow';

const ActionRow = styled.div({
  display: 'flex',
  justifyContent: 'center',
  '* + *': {
    marginLeft: 10,
  },
});

const Grid = styled.div({
  display: 'grid',
  width: '100%',
  height: 800,
  gridTemplateRows: 'min-content min-content 200px',
});

const SideBlock = styled.div({
  padding: '30px 0',
  margin: '0 auto',
});

type Entry = {
  color: string;
  value: number;
};

const QueueDoc = () => {
  const queue = useRef(new Queue<Entry>());
  const [queueArray, setQueueArray] = useState<Entry[]>([]);

  const push = () => {
    const color = getRandomColor();
    const randomValue = Math.floor(Math.random() * 1000);
    queue.current?.enqueue({ color, value: randomValue });
    const array = queue.current?.toArray()!;
    setQueueArray([...array]);
  };

  const pop = () => {
    queue.current?.dequeue();
    const array = queue.current?.toArray()!;
    setQueueArray([...array]);
  };

  return (
    <Grid>
      <SideBlock>
        <RoughQuote>
          <RoughParagraph fontSize={30}>
            A queue is a linear abstract data type that can contain a long list
            of elements.
          </RoughParagraph>
        </RoughQuote>
      </SideBlock>
      <ActionRow>
        <wired-button
          onClick={() => {
            push();
          }}
        >
          <RoughText>Enqueue</RoughText>
        </wired-button>
        <wired-button
          onClick={() => {
            pop();
          }}
        >
          <RoughText>Dequeue</RoughText>
        </wired-button>
      </ActionRow>
      <RoughContainer height={300} width="100%">
        <Arrow x={100} y={50} width={100} height={200} />
        {[...queueArray].reverse().map((x, index) => {
          return (
            <Rectangle
              key={x.value}
              x={100 + 125 * index}
              y={50}
              width={100}
              height={200}
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

export { QueueDoc };
