import * as React from 'react';
import { AppBar, TitlePortal, useGetIdentity, AppBarProps } from 'react-admin';
import { Typography } from '@mui/material';

const CustomAppBar: React.FC<AppBarProps> = (props) => {
    const { identity } = useGetIdentity();
    return (
        <AppBar {...props}>
            <TitlePortal />
            {identity && (
                <Typography variant="h6" color="inherit" id="react-admin-title">
                    {props.title}
                </Typography>
            )}
        </AppBar>
    );
};

export default CustomAppBar;
