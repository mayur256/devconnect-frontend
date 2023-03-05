// top level imports
import { ReactElement } from "react";

// AntD Components
import { Layout, Menu } from "antd";
const { Header: AHeader } = Layout;

// types
import type { MenuProps } from 'antd';

const menuLinks: MenuProps['items'] = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));

// Component definition
export function Header(): ReactElement {
    return (
        <AHeader>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={menuLinks} />           
        </AHeader>
    )
}