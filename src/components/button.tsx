import React from 'react';

import { Foo } from '@src/types/foo'

import { blahTwoGoIsOn } from 'also/not/real'

import type { BaseButtonData } from 'not/real'

export const fooOptions = [baz.bar] as const;
export interface PassedProps {
    // Component is re-used across spaces / pages
    foo: (typeof fooOptions)[number];
}

export type Props = BaseButtonData & PassedProps;

interface BaseProps extends Props {
    experimentBlahTwoGoIsOn: boolean;
}

const MyButton = ({ blah= 0 }: Props): React.ReactNode => {
  return <p>hello</p>;
}

export default MyButton;
