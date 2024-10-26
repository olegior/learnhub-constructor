'use client'
import { CopyOutlined } from '@ant-design/icons/'
import style from './index.module.scss'
import { notification } from 'antd'
import { useEffect, useState } from 'react'

export default function CodeCopyButton({ show, code }: { show: boolean, code: string }) {

    const [api, contextHolder] = notification.useNotification()
    const [isCopied, setIsCopied] = useState(false)
    useEffect(() => {
        return () => setIsCopied(false)
    },[show])

    const onClick = () => {
        api.success({ message: 'Скопировано в буфер обмена', placement: 'bottom' })
        navigator.clipboard.writeText(code)
        setIsCopied(true)
    }

    return (
        <>
            {show && <button onClick={onClick} className={style.button}><CopyOutlined /> {isCopied ? ' Copied' : ' Copy'}</button>}
            {contextHolder}
        </>
    )
}
