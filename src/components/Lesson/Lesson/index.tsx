import Code from '@/components/Lesson/Code';
import Text from '@/components/Lesson/Text';
import Title from '@/components/Lesson/Title';
import Image from '@/components/Lesson/Image';
import { Flex } from 'antd';
import List from '../List';
import AntTitle from 'antd/es/typography/Title';
import Link from '../Link';
import Note from '../Note';

export default function Lesson({ lesson }: { lesson: { title: string, content: object[] } }) {

    const parsedLesson = lesson.content.map((element, index) => {
        const [type, value] = Object.entries(element).flat(1)
        switch (type) {
            case 'text': { return <Text key={index} data={value} /> }
            case 'code': { return <Code key={index} data={value} /> }
            case 'title': { return <Title key={index} data={value} /> }
            case 'ulist': { return <List key={index} data={value} listType='ul' /> }
            case 'olist': { return <List key={index} data={value} listType='ol' /> }
            case 'img': { return <Image key={index} data={value} /> }
            case 'link': { return <Link key={index} data={value} /> }
            case 'note':  { return <Note key={index} data={value} />} 
            default: { return null }
        }
    })

    return (
        <Flex justify='center' align='center'>
            <Flex vertical gap={20} justify='center' style={{ maxWidth: 800 }} >
                <Flex justify='start'>
                    <AntTitle
                        level={1}
                        style={{
                            fontSize: 40,
                            fontWeight: 'bold'
                        }}>{lesson.title}</AntTitle>
                </Flex>
                <Flex vertical>
                    {parsedLesson}
                </Flex>
            </Flex>
        </Flex>
    )
}
