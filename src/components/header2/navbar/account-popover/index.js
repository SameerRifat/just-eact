import React from "react";
import { Fade, Popover } from "@mui/material";
import Menu from "./Menu";

const AccountPopover = (props) => {
  const { cartListRefetch, anchorEl, onClose, open, ...other } = props;
  return (
    <Popover
      anchorEl={anchorEl}
      onClose={onClose}
      open={open}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      PaperProps={{ sx: { width: 250 } }}
    >
      <Menu onClose={onClose} cartListRefetch={cartListRefetch} />
    </Popover>
  );
};

AccountPopover.propTypes = {};

export default AccountPopover;
