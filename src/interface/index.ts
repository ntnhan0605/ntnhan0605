import React, { JSX, SVGProps } from 'react';

export type IconComponent =
  | React.ComponentType<React.SVGProps<SVGSVGElement>>
  | ((props: SVGProps<SVGSVGElement>) => JSX.Element);

export type DataAttributes = {
  [key: `data-${string}`]: string | number;
};
