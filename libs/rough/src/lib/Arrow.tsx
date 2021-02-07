import React, { useCallback, memo } from 'react';
import { RoughSVG } from 'roughjs/bin/svg';
import { Renderer } from './Renderer';

type Props = {
  x: number;
  y: number;
  size: number;
};

const Arrow: React.FC<Props> = memo(({ x, y, size, options }) => {
  const renderProps = useCallback(
    (rc: RoughSVG) => {
      const head = rc.path('M1 14L13 7.5L1 0.999999', { stroke: 'black' });
      head.setAttribute('transform', `translate(${x + size + 2},${y - 7})`);
      const line = rc.line(x, y, x + size, y, {
        strokeWidth: 1,
        roughness: 2,
      });

      return [line, head];
    },
    [x, y, size, options]
  );

  return <Renderer render={(rc: RoughSVG) => renderProps(rc)} />;
});

Arrow.displayName = 'Arrow';

export { Arrow };
