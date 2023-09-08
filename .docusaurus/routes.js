import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/documentation/__docusaurus/debug',
    component: ComponentCreator('/documentation/__docusaurus/debug', '186'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/config',
    component: ComponentCreator('/documentation/__docusaurus/debug/config', 'f4e'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/content',
    component: ComponentCreator('/documentation/__docusaurus/debug/content', '2e6'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/globalData',
    component: ComponentCreator('/documentation/__docusaurus/debug/globalData', 'c9f'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/metadata',
    component: ComponentCreator('/documentation/__docusaurus/debug/metadata', '40d'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/registry',
    component: ComponentCreator('/documentation/__docusaurus/debug/registry', '62f'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/routes',
    component: ComponentCreator('/documentation/__docusaurus/debug/routes', '999'),
    exact: true
  },
  {
    path: '/documentation/blog',
    component: ComponentCreator('/documentation/blog', '242'),
    exact: true
  },
  {
    path: '/documentation/blog/archive',
    component: ComponentCreator('/documentation/blog/archive', '983'),
    exact: true
  },
  {
    path: '/documentation/blog/first-blog-post',
    component: ComponentCreator('/documentation/blog/first-blog-post', '193'),
    exact: true
  },
  {
    path: '/documentation/blog/long-blog-post',
    component: ComponentCreator('/documentation/blog/long-blog-post', '471'),
    exact: true
  },
  {
    path: '/documentation/blog/mdx-blog-post',
    component: ComponentCreator('/documentation/blog/mdx-blog-post', '7e6'),
    exact: true
  },
  {
    path: '/documentation/blog/tags',
    component: ComponentCreator('/documentation/blog/tags', '4bf'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/docusaurus',
    component: ComponentCreator('/documentation/blog/tags/docusaurus', '5cb'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/facebook',
    component: ComponentCreator('/documentation/blog/tags/facebook', '087'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/hello',
    component: ComponentCreator('/documentation/blog/tags/hello', '6db'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/hola',
    component: ComponentCreator('/documentation/blog/tags/hola', 'd73'),
    exact: true
  },
  {
    path: '/documentation/blog/welcome',
    component: ComponentCreator('/documentation/blog/welcome', '46e'),
    exact: true
  },
  {
    path: '/documentation/markdown-page',
    component: ComponentCreator('/documentation/markdown-page', '780'),
    exact: true
  },
  {
    path: '/documentation/my-markdown-page',
    component: ComponentCreator('/documentation/my-markdown-page', 'cbf'),
    exact: true
  },
  {
    path: '/documentation/my-react-page',
    component: ComponentCreator('/documentation/my-react-page', '51f'),
    exact: true
  },
  {
    path: '/documentation/docs',
    component: ComponentCreator('/documentation/docs', '57c'),
    routes: [
      {
        path: '/documentation/docs/category/astrocore-utilities',
        component: ComponentCreator('/documentation/docs/category/astrocore-utilities', 'cd8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/category/getting-started',
        component: ComponentCreator('/documentation/docs/category/getting-started', '76f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/category/high-level-architecture',
        component: ComponentCreator('/documentation/docs/category/high-level-architecture', '4f2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/category/low-level-architecture',
        component: ComponentCreator('/documentation/docs/category/low-level-architecture', '357'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/category/modes-of-operation',
        component: ComponentCreator('/documentation/docs/category/modes-of-operation', '529'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/category/supported-boards',
        component: ComponentCreator('/documentation/docs/category/supported-boards', 'd34'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/getting-started/alire',
        component: ComponentCreator('/documentation/docs/getting-started/alire', '2ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/getting-started/ide',
        component: ComponentCreator('/documentation/docs/getting-started/ide', '3c9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/getting-started/renode',
        component: ComponentCreator('/documentation/docs/getting-started/renode', '563'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/high-level-architecture/file-structure',
        component: ComponentCreator('/documentation/docs/high-level-architecture/file-structure', '9d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/high-level-architecture/intro',
        component: ComponentCreator('/documentation/docs/high-level-architecture/intro', '1b2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/high-level-architecture/messaging',
        component: ComponentCreator('/documentation/docs/high-level-architecture/messaging', 'a28'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/high-level-architecture/modes-of-operation/beaconing',
        component: ComponentCreator('/documentation/docs/high-level-architecture/modes-of-operation/beaconing', 'e0e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/high-level-architecture/modes-of-operation/communications',
        component: ComponentCreator('/documentation/docs/high-level-architecture/modes-of-operation/communications', '774'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/high-level-architecture/modes-of-operation/detumble',
        component: ComponentCreator('/documentation/docs/high-level-architecture/modes-of-operation/detumble', '9c4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/high-level-architecture/modes-of-operation/idle',
        component: ComponentCreator('/documentation/docs/high-level-architecture/modes-of-operation/idle', '5c5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/high-level-architecture/modes-of-operation/imaging',
        component: ComponentCreator('/documentation/docs/high-level-architecture/modes-of-operation/imaging', 'df8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/high-level-architecture/modes-of-operation/inference',
        component: ComponentCreator('/documentation/docs/high-level-architecture/modes-of-operation/inference', 'a80'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/high-level-architecture/modes-of-operation/laboratory',
        component: ComponentCreator('/documentation/docs/high-level-architecture/modes-of-operation/laboratory', '397'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/high-level-architecture/modes-of-operation/safe',
        component: ComponentCreator('/documentation/docs/high-level-architecture/modes-of-operation/safe', '29b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/high-level-architecture/services',
        component: ComponentCreator('/documentation/docs/high-level-architecture/services', '073'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/intro',
        component: ComponentCreator('/documentation/docs/intro', '9e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/low-level-architecture/bsp',
        component: ComponentCreator('/documentation/docs/low-level-architecture/bsp', '759'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/low-level-architecture/config',
        component: ComponentCreator('/documentation/docs/low-level-architecture/config', '5d3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/low-level-architecture/hal',
        component: ComponentCreator('/documentation/docs/low-level-architecture/hal', 'ece'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/low-level-architecture/intro',
        component: ComponentCreator('/documentation/docs/low-level-architecture/intro', '72d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/low-level-architecture/middleware',
        component: ComponentCreator('/documentation/docs/low-level-architecture/middleware', 'd87'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/low-level-architecture/svd',
        component: ComponentCreator('/documentation/docs/low-level-architecture/svd', '5a0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/supported-boards/intro',
        component: ComponentCreator('/documentation/docs/supported-boards/intro', '09d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/tools/intro',
        component: ComponentCreator('/documentation/docs/tools/intro', '368'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/tools/project-configurator',
        component: ComponentCreator('/documentation/docs/tools/project-configurator', 'e6e'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/documentation/',
    component: ComponentCreator('/documentation/', 'ef1'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
