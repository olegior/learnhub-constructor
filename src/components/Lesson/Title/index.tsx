import AntTitle from 'antd/es/typography/Title'

export default function Title({ data }: { data: string }) {
    return (
        <AntTitle level={3} style={{marginTop: 10}}>{data}</AntTitle>
    )
}
