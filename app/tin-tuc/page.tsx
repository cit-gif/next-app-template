'use client';

import {
  Grid,
  Pagination,
} from '@mantine/core';
import { createArrayEmpty } from '@/lib/utils/array';
import { ArticleCardVertical } from './components/ArticleCardVertical';
import { ImageCard } from './components/ImageCard';

export default function Demo() {
  return (
    <>
      <Grid>
        <Grid.Col span={12}>
          <ImageCard />
        </Grid.Col>
        {createArrayEmpty(10).map((item) => (
          <Grid.Col
            key={item}
            span={{
              base: 12,
              // md: 6,
              // lg: 6,
            }}
          >
            <ArticleCardVertical />
            {/* <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                height={160}
                alt="Norway"
              />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
              <Text fw={500}>Norway Fjord Adventures</Text>
              <Badge color="pink">On Sale</Badge>
            </Group>

            <Text size="sm" c="dimmed">
              With Fjord Tours you can explore more of the magical fjord landscapes with tours and
              activities on and around the fjords of Norway
            </Text>
            <Group justify="space-between" mt="md" mb="xs">
              <Text size="sm" c="dimmed">
                3 ngay truoc
              </Text>
            </Group>
          </Card> */}
          </Grid.Col>
        ))}
        <Grid.Col span={12}>
          <Pagination mt="sm" total={20} siblings={1} defaultValue={10} />
        </Grid.Col>
      </Grid>
    </>
  );
}
