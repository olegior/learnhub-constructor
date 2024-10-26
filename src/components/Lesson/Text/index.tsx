import Paragraph from 'antd/es/typography/Paragraph';
import { parseText } from '@/helpers/parseText';
export default function Text({ data }: { data: string }) {

    return (
        <Paragraph>{parseText(data)}</Paragraph>
    )
}
