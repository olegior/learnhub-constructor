import NextLink from 'next/link'

export default function Link({ data }: { data: {href: string, title: string} }) {
    return (
        <NextLink href={data.href} target='_blank'>{data.title}</NextLink>
    )
}
