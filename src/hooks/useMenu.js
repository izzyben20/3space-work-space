import React from 'react';

export const useMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const triggerProps = {
    onClick: handleClick,
  };

  const menuProps = {
    anchorEl,
    open,
    onClose: handleClose,
  };

  return {
    triggerProps,
    menuProps,
  };
};
