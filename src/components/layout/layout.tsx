import React, { PropsWithChildren, useEffect, useRef, useState } from 'react';
import { FloatButton, Layout, Menu, theme } from 'antd';
import { useMenuConfig } from '@/config/MenuConfig';
import { useRouter } from 'next/router';
import ToTop from '../ToTop';

const { Header, Content, Footer, Sider } = Layout;

const BlogLayout: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const siderStyle: React.CSSProperties = {
    overflow: 'auto',
    height: '100vh',
    insetInlineStart: 0,
    scrollbarWidth: 'thin',
    scrollbarGutter: 'stable',
  };

  const router = useRouter()
  const items = useMenuConfig()

  const rightPartDomRef = useRef<HTMLDivElement>(null)

  const [hasScrollbar, setHasScrollbar] = useState(false);

  const checkTimer = useRef<NodeJS.Timeout>()

  function onInvokeWhenScroll(e: React.UIEvent<HTMLDivElement, UIEvent>) {
    if (checkTimer.current || !rightPartDomRef.current) return;
    setHasScrollbar(rightPartDomRef.current.scrollTop > 50)
    checkTimer.current = setTimeout(() => {
      if (!checkTimer.current) return;
      clearTimeout(checkTimer.current)
      checkTimer.current = undefined;
    }, 100)

  }
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
          ref={rightPartDomRef}
          style={{ overflow: "scroll", display: "flex", margin: 14, position: "relative" }}
          onScroll={onInvokeWhenScroll}
        >
          {children}
          <FloatButton.BackTop />
          {
            hasScrollbar && (
              <ToTop onClick={() => rightPartDomRef.current?.scrollTo({ top: 1 })} />
            )
          }
        </Content>
      </Layout>
    </Layout >
  );
};

export default BlogLayout;