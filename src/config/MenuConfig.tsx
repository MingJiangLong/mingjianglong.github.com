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
            label: "这里就是首页了",
            key: "/",
            icon: <DesktopOutlined />
        },

        {
            label: "开发文档",
            key: "/blog",
            icon: <PicCenterOutlined />,
            children: [
                {
                    label: "React Native",
                    key: "/react-native",
                    // icon: <i className="devicon-react-original"></i>
                },
                {
                    label: "App送审",
                    key: "/app-approve",
                    // icon: <MobileOutlined />
                },

                {
                    label: "JavaScript",
                    key: "/javascript",
                    // icon: <i className="devicon-javascript-plain colored"></i>
                },
                {
                    label: "Html",
                    key: "/web-development",
                    // icon: <i className="devicon-html5-plain colored"></i>
                }
            ]
        },
        {
            label: "本周事项记录",
            key: "/work-out",
            icon: <DesktopOutlined />
        },
        {
            label: "文档",
            key: "/doc",
            icon: <FileTextOutlined />
        },
    ], [])
}