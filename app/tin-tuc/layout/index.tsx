'use client';

import React, { FC, ReactNode } from 'react';
import { Container, Grid } from '@mantine/core';
import { HeaderSearch } from './header';
import { FooterLinks } from './footer';
import TableOfContents from './aside-bar';

interface LayoutBlogProps {
  children?: ReactNode;
}

const LayoutBlog: FC<LayoutBlogProps> = ({ children }) => (
  <>
    <HeaderSearch />
    <Container>
      <Grid>
        <Grid.Col
          span={{
            base: 12,
            sm: 8,
          }}
        >
          {children}
        </Grid.Col>
        <Grid.Col
          span={{
            base: 12,
            sm: 4,
          }}
        >
          <TableOfContents />
        </Grid.Col>
      </Grid>
    </Container>
    <FooterLinks />
  </>
);

export default LayoutBlog;
