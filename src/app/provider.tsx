import { AntdRegistry } from "@ant-design/nextjs-registry";
import { App, ConfigProvider } from 'antd';
import ruRU from 'antd/locale/ru_RU'

export default function AntPovider({ children }: { children: React.ReactNode }) {

    const bgWhite = 'var(--bgWhite)'
    const buttonMain = 'var(--buttonMain)'
    const grey7 = 'var(--grey7)'
    const grey1 = 'var(--grey1)'
    const textBlack = 'var(--textBlack)'

    return (
        <ConfigProvider
            locale={ruRU}
            theme={{
                token: {
                    colorPrimary: '#0043DA',
                },
                components: {
                    Layout: {
                        siderBg: bgWhite,
                        triggerBg: buttonMain,
                    },
                    Menu: {
                        subMenuItemBg: bgWhite,
                        // itemSelectedColor: buttonMain
                    },
                    Carousel: {
                        arrowSize: 20,
                        // arrowOffset: -16,
                        colorText: textBlack,
                        colorBgContainer: textBlack,
                    },
                    Input: {
                        colorBgContainer: grey7,
                    },
                    Form: {
                        labelColor: grey1,
                        labelRequiredMarkColor: grey1,
                        verticalLabelPadding: 0,
                        verticalLabelMargin: 0,
                        labelFontSize: 12,
                        itemMarginBottom: 26,
                    },
                    Collapse:{
                        headerBg: 'var(--lightGrey)'
                    }
                }
            }}
        >
            <AntdRegistry >
                    <App>
                        {children}
                    </App>
            </AntdRegistry>
        </ConfigProvider>
    )
}
