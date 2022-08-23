import React, { useEffect, useRef } from "react";

import { getPercentWidthCss } from "@/utils";
import { useState } from "react";

interface Props {
  Origin: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;
  width?: number;
  style?: React.CSSProperties;
}

export const Svg: React.FC<Props> = ({ Origin, width: width_, style }) => {
  const ref = useRef<SVGSVGElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setWidth(width_ ?? ref.current.width.animVal.value);
    }
  }, [width_]);

  return (
    <Origin
      ref={ref}
      style={{
        width: getPercentWidthCss(width),
        height: "auto",
        ...style,
      }}
    />
  );
};
