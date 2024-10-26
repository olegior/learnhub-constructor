'use client'
import 'prismjs/themes/prism.css';
import Prism from 'prismjs';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import { Flex } from 'antd';
import CodeCopyButton from '../CodeCopyButton';

export default function Code({ data }: { data: string }) {

    useEffect(() => {
        Prism.highlightAll()
    }, [])

    const [show, setShow] = useState(false)

    return (
        <Flex vertical onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>

            <div style={{ position: 'relative' }} >
                <div style={{ position: 'absolute', right: 5, top: 12 }}>
                    <CodeCopyButton show={show} code={data}/>
                </div>
            </div>

            <pre style={{
                paddingInline: 32,
                paddingBlock: 24,
                borderRadius: 4
            }}>
                <code className='language-javascript'>
                    {parse(data)}
                </code>
            </pre>
        </Flex>
    )
}
