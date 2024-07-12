import * as React from 'react';
import { Layout, LayoutProps } from 'react-admin';
import CustomAppBar from './CustomAppBar';

const CustomLayout: React.FC<LayoutProps> = (props) => <Layout {...props} appBar={CustomAppBar} />;

export default CustomLayout;
