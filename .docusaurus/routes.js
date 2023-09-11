import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/documentation/__docusaurus/debug',
    component: ComponentCreator('/documentation/__docusaurus/debug', 'b40'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/config',
    component: ComponentCreator('/documentation/__docusaurus/debug/config', '99b'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/content',
    component: ComponentCreator('/documentation/__docusaurus/debug/content', '556'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/globalData',
    component: ComponentCreator('/documentation/__docusaurus/debug/globalData', 'e90'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/metadata',
    component: ComponentCreator('/documentation/__docusaurus/debug/metadata', '3d9'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/registry',
    component: ComponentCreator('/documentation/__docusaurus/debug/registry', '7f4'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/routes',
    component: ComponentCreator('/documentation/__docusaurus/debug/routes', '351'),
    exact: true
  },
  {
    path: '/documentation/blog',
    component: ComponentCreator('/documentation/blog', '47f'),
    exact: true
  },
  {
    path: '/documentation/blog/archive',
    component: ComponentCreator('/documentation/blog/archive', '2b3'),
    exact: true
  },
  {
    path: '/documentation/blog/first-blog-post',
    component: ComponentCreator('/documentation/blog/first-blog-post', '543'),
    exact: true
  },
  {
    path: '/documentation/blog/long-blog-post',
    component: ComponentCreator('/documentation/blog/long-blog-post', '927'),
    exact: true
  },
  {
    path: '/documentation/blog/mdx-blog-post',
    component: ComponentCreator('/documentation/blog/mdx-blog-post', '959'),
    exact: true
  },
  {
    path: '/documentation/blog/tags',
    component: ComponentCreator('/documentation/blog/tags', 'f4e'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/docusaurus',
    component: ComponentCreator('/documentation/blog/tags/docusaurus', '03a'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/facebook',
    component: ComponentCreator('/documentation/blog/tags/facebook', '535'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/hello',
    component: ComponentCreator('/documentation/blog/tags/hello', '8c0'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/hola',
    component: ComponentCreator('/documentation/blog/tags/hola', '45d'),
    exact: true
  },
  {
    path: '/documentation/blog/welcome',
    component: ComponentCreator('/documentation/blog/welcome', 'afb'),
    exact: true
  },
  {
    path: '/documentation/markdown-page',
    component: ComponentCreator('/documentation/markdown-page', '897'),
    exact: true
  },
  {
    path: '/documentation/my-markdown-page',
    component: ComponentCreator('/documentation/my-markdown-page', '21a'),
    exact: true
  },
  {
    path: '/documentation/my-react-page',
    component: ComponentCreator('/documentation/my-react-page', 'b8b'),
    exact: true
  },
  {
    path: '/documentation/docs',
    component: ComponentCreator('/documentation/docs', '047'),
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
        component: ComponentCreator('/documentation/docs/getting-started/alire', '7d4'),
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
        component: ComponentCreator('/documentation/docs/getting-started/renode', '9b6'),
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
    component: ComponentCreator('/documentation/', 'e4b'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
