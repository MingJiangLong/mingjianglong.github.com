import { useMemo } from "react";
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
    ReadOutlined,
    FolderOutlined,
    FolderOpenOutlined,
    PicCenterOutlined,
    JavaScriptOutlined 
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
export function useMenuConfig() {
    return useMemo<MenuItem[]>(() => [

        {
            label: "今天也要开心😄",
            key: "/",
            icon: <DesktopOutlined />
        },
        {
            label: "开发日志📔",
            key: "/blog",
            icon: <PicCenterOutlined />,
            children: [
                {
                    label: "react-native",
                    key: "/react-native",
                    icon: <DesktopOutlined />
                },
                {
                    label: "javascript",
                    key: "/javascript",
                    icon: <JavaScriptOutlined />
                },
            ]
        },
    ], [])
}