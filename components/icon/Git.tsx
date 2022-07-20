// react
import * as React from 'react';
// css-types
import { Property } from 'csstype';
// @mui
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import Image from 'next/image';
// type
export interface GitProps extends SvgIconProps {
  bgColor?: Property.Fill;
  textColor?: Property.Fill;
}

const Git: React.FunctionComponent<GitProps> = (props) => {
  const {
    bgColor = '#001e36',
    textColor = '#31a8ff',
    viewBox = '0 0 24 24',
    focusable = false,
    'aria-hidden': ariaHidden = true,
    ...otherProps
  } = props;

  return (
    <Image 
    src="/github.png"
    alt="Aws"
    width={500}
    height={500}/>
  );
};

export default Git;
