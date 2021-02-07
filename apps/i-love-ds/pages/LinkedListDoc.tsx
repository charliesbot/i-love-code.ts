import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { LinkedList } from '@data-structures/LinkedList';
import { RoughContainer } from '@rough/RoughContainer';
import { Arrow } from '@rough/Arrow';
import { Rectangle } from '@rough/Rectangle';
import { Circle } from '@rough/Circle';
import { RoughText } from '@design-system/RoughText';
import { RoughParagraph } from '@design-system/RoughParagraph';
import { RoughQuote } from '@design-system/RoughQuote';
import { getRandomColor } from '../utils/getRandomColor';

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
  arrowKey: number;
};

const LinkedListDoc = () => {
  const linkedList = useRef(new LinkedList<Entry>());
  const [linkedListArray, setLinkedListArray] = useState<Entry[]>([]);

  const deleteHead = () => {
    linkedList.current.deleteHead();
    const array = linkedList.current?.toArray();
    setLinkedListArray([...array]);
  };

  const deleteTail = () => {
    linkedList.current.deleteTail();
    const array = linkedList.current?.toArray();
    setLinkedListArray([...array]);
  };

  const prepend = () => {
    const color = getRandomColor();
    const randomValue = Math.floor(Math.random() * 1000);
    const arrowKey = Math.floor(Math.random() * 1000);
    linkedList.current?.prepend({ color, value: randomValue, arrowKey });
    const array = linkedList.current?.toArray();
    setLinkedListArray([...array]);
  };

  const append = () => {
    const color = getRandomColor();
    const randomValue = Math.floor(Math.random() * 1000);
    const arrowKey = Math.floor(Math.random() * 1000);
    linkedList.current?.append({ color, value: randomValue, arrowKey });
    const array = linkedList.current?.toArray();
    setLinkedListArray([...array]);
  };

  return (
    <Grid>
      <SideBlock>
        <RoughQuote>
          <RoughParagraph fontSize={30}>
            Una lista ligada, es una estructura lineal que almacena una
            colección de elementos generalmente llamados nodos, en donde cada
            nodo puede almacenar datos y ligas a otros nodos. De esta manera los
            nodos pueden localizarse en cualquier parte de la memoria,
            utilizando la referencia que lo relaciona con otro nodo dentro de la
            estructura.
          </RoughParagraph>
          <RoughParagraph fontSize={30}>
            Las listas ligadas permiten almacenar información en posiciones de
            memoria que no sean contiguas; para almacenar la información
            contienen elementos llamados nodos. Estos nodos poseen dos campos
            uno para almacenar la información o valor del elemento y otro para
            el enlace que determina la posición del siguiente elemento o nodo de
            la lista.
          </RoughParagraph>
        </RoughQuote>
      </SideBlock>
      <ActionRow>
        <wired-button
          onClick={() => {
            append();
          }}
        >
          <RoughText>Append</RoughText>
        </wired-button>
        <wired-button
          onClick={() => {
            prepend();
          }}
        >
          <RoughText>Prepend</RoughText>
        </wired-button>
        <wired-button
          onClick={() => {
            deleteHead();
          }}
        >
          <RoughText>Delete Head</RoughText>
        </wired-button>
        <wired-button
          onClick={() => {
            deleteTail();
          }}
        >
          <RoughText>Delete Tail</RoughText>
        </wired-button>
      </ActionRow>
      <RoughContainer height="100%" width="100%">
        {[...linkedListArray].map((x, index) => {
          return (
            <>
              {index > 0 ? (
                <Arrow
                  key={x.arrowKey}
                  x={20 + 200 * index}
                  size={50}
                  y={100}
                />
              ) : null}
              <Circle
                key={x.value}
                x={100 + 200 * index}
                y={50}
                diameter={80}
                options={{
                  fill: x.color,
                  stroke: x.color,
                  roughness: 3,
                  dashGap: 1,
                  fillWeight: 8,
                  strokeWidth: 5,
                }}
              />
            </>
          );
        })}
      </RoughContainer>
    </Grid>
  );
};
// <Rectangle
// key={x.value}
// x={100 + 200 * index}
// y={50}
// width={100}
// height={100}
// options={{
// fill: x.color,
// stroke: x.color,
// roughness: 3,
// dashGap: 1,
// fillWeight: 8,
// strokeWidth: 5,
// }}
// />

export default LinkedListDoc;
