import { parseText } from '@/helpers/parseText'
import Text from 'antd/es/typography/Text'
import { createElement } from 'react'

export default function List({ data, listType }: { data: string[], listType: 'ol' | 'ul' }) {
    const list = data.map((element, index) => <li key={index}><Text >{parseText(element)}</Text></li>)
    return createElement(listType, { style: { paddingLeft: 16 } }, list)
}
