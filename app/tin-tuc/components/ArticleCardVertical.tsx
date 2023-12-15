import { Card, Image, Avatar, Text, Group } from '@mantine/core';
import classes from './ArticleCardVertical.module.css';

export function ArticleCardVertical() {
  return (
    <Card p={0} className={classes.card}>
      <Group wrap="nowrap" gap={0} align="start">
        <Image
          height={110}
          h={{
            xs: 200,
          }}
          src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
          fit="contain"
        />
        <div className={classes.body}>
          <Text className={classes.title} mt="xs" mb="md" lineClamp={5}>
            ThinkPad X1 Carbon Gen 12 ra mắt: Bàn phím mới, chip Core Ultra, màn hình 120Hz, giá từ
            69,9 triệu Đồng
          </Text>
          <Group gap="xs">
            <Text tt="uppercase" c="dimmed" fw={700} size="xs">
              technology
            </Text>
            <Text size="xs" c="dimmed">
              •
            </Text>
            <Text size="xs" c="dimmed">
              Feb 6th
            </Text>
          </Group>
        </div>
      </Group>
    </Card>
  );
}
