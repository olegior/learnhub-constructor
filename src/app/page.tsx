import Lesson from "@/components/Lesson/Lesson";
import { lesson } from "@/lib/lesson";
import { Content } from "antd/es/layout/layout";

export default function Home() {
  return (
    <Content style={{ backgroundColor: 'white', padding: 24, borderRadius: 10, }}>
      <Lesson lesson={lesson} />
    </Content>
  );
}
