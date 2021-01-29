import { useContext } from 'react';
import useDeepCompareEffect from 'use-deep-compare-effect';
import { RoughSVG } from 'roughjs/bin/svg';
import { RoughContext } from './RoughContainer';

type Props = {
  render: (props: any) => SVGGElement;
};
const Renderer = ({ render }: Props) => {
  const { ref, config, width, height } = useContext(RoughContext);

  useDeepCompareEffect(() => {
    const rendererElement = ref?.current;

    if (!rendererElement) {
      return;
    }

    const roughSvg = new RoughSVG(rendererElement as SVGSVGElement, config);
    const node = render(roughSvg) as Node;
    rendererElement.appendChild(node);

    return () => {
      rendererElement.removeChild(node);
    };
  }, [ref, config, render]);

  return null;
};

export { Renderer };
