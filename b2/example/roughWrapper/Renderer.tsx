import { useContext } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { RoughSVG } from 'roughjs/bin/svg';
import { RoughContext } from './RoughContainer';

type RenderFn = (rc: RoughSVG) => SVGElement | SVGElement[];

type Props = {
  render: RenderFn;
};
const Renderer = ({ render }: Props) => {
  const { ref, config, width, height } = useContext(RoughContext);

  useDeepCompareEffect(() => {
    const rendererElement = ref?.current;

    if (!rendererElement) {
      return;
    }

    const roughSvg = new RoughSVG(rendererElement, config);
    const node = render(roughSvg);

    let nodes = !Array.isArray(node) ? [node] : node;

    nodes.forEach(n => rendererElement.appendChild(n));

    return () => {
      nodes.forEach(n => rendererElement.removeChild(n));
    };
  }, [ref, config, render]);

  return null;
};

export { Renderer };
