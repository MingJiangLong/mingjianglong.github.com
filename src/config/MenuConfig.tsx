import { useMemo } from "react";
import {
    DesktopOutlined,
    PicCenterOutlined,
    JavaScriptOutlined,
    AliwangwangOutlined,
    TikTokOutlined,
    MobileOutlined,
    FileTextOutlined
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
            label: "本周工作记录",
            key: "/work-out",
            icon: <DesktopOutlined />
        },
        {
            label: "开发日志📔",
            key: "/blog",
            icon: <PicCenterOutlined />,
            children: [
                {
                    label: "app上包",
                    key: "/app-approve",
                    icon: <MobileOutlined />
                },
                {
                    label: "react-native",
                    key: "/react-native",
                    icon: <i className="devicon-react-original"></i>
                },
                {
                    label: "javascript",
                    key: "/javascript",
                    icon: <i className="devicon-javascript-plain colored"></i>
                },
                {
                    label: "web开发",
                    key: "/web-development",
                    icon: <i className="devicon-html5-plain colored"></i>
                }
            ]
        },
        {
            label: "文档",
            key: "/doc",
            icon: <FileTextOutlined />
        },
        {
            label: "其他",
            key: "/other",
            icon: <AliwangwangOutlined />
        },
    ], [])
}