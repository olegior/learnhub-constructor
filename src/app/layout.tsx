import type { Metadata } from "next";
import "@a1rth/css-normalize";
import "./globals.css";
import AntPovider from "./provider";
import { Layout } from 'antd'
import { Content, } from 'antd/es/layout/layout'

export const metadata: Metadata = {
  title: "LearnHub Constructor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AntPovider>
          <Layout hasSider={true}
            style={{
              maxWidth: 1920,
              marginInline: 'auto'
            }}
          >
            <Layout>
              <Content style={{ padding: "0 32px 32px" }}>
                {children}
              </Content>
            </Layout>
          </Layout>
        </AntPovider>
      </body>
    </html>
  );
}
