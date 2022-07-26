// react
import * as React from 'react';
// @mui icon
import FacebookIcon from '@mui/icons-material/Facebook';
// custom component
import IconButtonLink from 'components/common/IconButtonLink';
// type
import { IconButtonProps } from '@mui/material';
import { LinkedIn } from '@mui/icons-material';
interface FacebookIconLinkProps extends IconButtonProps {
  anchorStyles?: React.CSSProperties;
  href?: string;
  iconColor?:
    | 'inherit'
    | 'action'
    | 'disabled'
    | 'primary'
    | 'secondary'
    | 'error'
    | 'info'
    | 'success'
    | 'warning';
  iconSize?: 'inherit' | 'large' | 'medium' | 'small' | undefined;
}

const FacebookIconLink: React.FunctionComponent<FacebookIconLinkProps> = (
  props
) => {
  const {
    anchorStyles,
    href = 'https://www.linkedin.com/in/amilcar-paco/',
    iconColor = 'inherit',
    iconSize = 'inherit',
    ...otherProps
  } = props;

  return (
    <IconButtonLink aria-label="Facebook button" href={href} {...otherProps}>
      
      <LinkedIn color={iconColor} fontSize={iconSize}/>
    </IconButtonLink>
  );
};

export default FacebookIconLink;
