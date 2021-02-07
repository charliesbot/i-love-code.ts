import React, { useCallback, memo } from 'react';
import { RoughSVG } from 'roughjs/bin/svg';
import { Renderer } from './Renderer';

type Args = Parameters<RoughSVG['circle']>;

type Props = {
  x: Args[0];
  y: Args[1];
  diameter: Args[2];
  options?: Args[3];
};

const Circle: React.FC<Props> = memo(({ x, y, diameter, options }) => {
  const renderProps = useCallback(
    (rc: RoughSVG) => rc.circle(x, y, diameter, options),
    [x, y, diameter, options]
  );

  return <Renderer render={(rc: RoughSVG) => renderProps(rc)} />;
});

Circle.displayName = 'Circle';

export { Circle };
