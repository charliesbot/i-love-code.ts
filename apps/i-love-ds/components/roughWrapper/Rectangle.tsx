import React, { useCallback, memo } from 'react';
import { RoughSVG } from 'roughjs/bin/svg';
import { Renderer } from './Renderer';

type Args = Parameters<RoughSVG['rectangle']>;

type Props = {
  x: Args[0];
  y: Args[1];
  width: Args[2];
  height: Args[3];
  options?: Args[4];
};
const Rectangle: React.FC<Props> = memo(({ x, y, width, height, options }) => {
  const renderProps = useCallback(
    (rc: RoughSVG) => rc.rectangle(x, y, width, height, options),
    [x, y, width, height, options]
  );

  return <Renderer render={(rc: RoughSVG) => renderProps(rc)} />;
});

Rectangle.displayName = 'Rectangle';

export { Rectangle };
