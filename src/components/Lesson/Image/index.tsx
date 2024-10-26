import { Flex, Image as AntImage } from 'antd'

export default function Image({ data }: { data: string }) {
    return (
        <Flex justify='center' align='center'>
            <AntImage src={data} width={640} />
        </Flex>
    )
}
