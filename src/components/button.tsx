import React from 'react';

const DEFAULT = 'default';

export interface PassedProps {
    className?: string;
}

export type Props = PassedProps;

const MyButton = ({ className = DEFAULT }: Props): React.ReactNode => {
  return <p className={className}>hello</p>;
}

export default MyButton;
