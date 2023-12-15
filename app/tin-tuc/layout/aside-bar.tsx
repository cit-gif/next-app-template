'use client';

import { Flex, Paper, Title } from '@mantine/core';
import React, { FC, ReactNode } from 'react';
import { createArrayEmpty } from '@/lib/utils/array';
import { ArticleCardVertical } from './ArticleCardVertical';
import { ImageActionBanner } from './ImageActionBanner';

interface AsideBarProps {
  children?: ReactNode;
}

const AsideBar: FC<AsideBarProps> = ({ children }) => (
  <Paper pos="sticky" top="10">
    <Title order={3} mb="md">
      Tin tức nổi bât
    </Title>
    <Flex direction="column" gap="xs" mb="md">
      {createArrayEmpty(5).map((item) => (
        <ArticleCardVertical key={item} />
      ))}
    </Flex>
    <ImageActionBanner />
  </Paper>
);

export default AsideBar;
