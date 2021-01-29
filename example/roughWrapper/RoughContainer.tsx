import React, { createContext, MutableRefObject, useRef } from 'react';
import { Config } from 'roughjs/bin/core';

type Props = {
  children: React.ReactNode;
  height: number | string;
  width: number | string;
  config?: Config;
};

interface RoughContextProps {
  ref?: MutableRefObject<SVGSVGElement | null>;
  config?: Config;
  width?: number;
  height?: number;
}

const RoughContext = createContext<RoughContextProps>({
  width: 300,
  height: 150,
});

const RoughContainer = (props: Props) => {
  const { height, width, children, config } = props;
  const svgRef = useRef<SVGSVGElement>();

  return (
    <RoughContext.Provider
      value={{
        config,
        ref: svgRef,
      }}
    >
      <svg width={width} height={height} ref={svgRef}>
        {children}
      </svg>
    </RoughContext.Provider>
  );
};

export { RoughContainer, RoughContext };
