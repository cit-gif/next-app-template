'use client';

import { Card, Group, Image, Text } from '@mantine/core';
import classes from './ArticleCardVertical.module.css';

export function ArticleCardVertical() {
  return (
    <Card p={0} className={classes.card}>
      <Group wrap="nowrap" gap="xs">
        <Image
          src="https://images.unsplash.com/photo-1602080858428-57174f9431cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80"
          height={70}
        />
        <div className={classes.body}>
          <Text size="sm" className={classes.title} mb="xs">
            The best laptop for Frontend engineers in 2022
          </Text>
          <Text size="xs" c="dimmed">
            Feb 6th
          </Text>
        </div>
      </Group>
    </Card>
  );
}
