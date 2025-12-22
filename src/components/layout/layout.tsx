import React, { PropsWithChildren, useRef, useState } from 'react';
import { Layout, Menu } from 'antd';
import { useMenuConfig } from '@/config/MenuConfig';
import { useRouter } from 'next/router';

const { Content, Sider } = Layout;

const BlogLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const siderStyle: React.CSSProperties = {
    overflow: 'auto',
    height: '100vh',
    insetInlineStart: 0,
    scrollbarWidth: 'thin',
    scrollbarGutter: 'stable',
  };

  const router = useRouter()
  const items = useMenuConfig()
  return (
    <Layout style={{ height: '100vh', overflow: "hidden" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} style={siderStyle}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={["/"]} mode="inline" items={items}
          onClick={(e) => {
            router.push(e.keyPath.reverse().join(""))
          }}
        />
      </Sider>
      <Layout>
        <Content
          style={{ display: "flex" }}
        >
          {children}
        </Content>
      </Layout>
    </Layout >
  );
};

export default BlogLayout;