import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/markdown-page',
    component: ComponentCreator('/docs/markdown-page', '9e1'),
    exact: true
  },
  {
    path: '/docs/my-markdown-page',
    component: ComponentCreator('/docs/my-markdown-page', '2ff'),
    exact: true
  },
  {
    path: '/docs/my-react-page',
    component: ComponentCreator('/docs/my-react-page', 'ac7'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', '7b0'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', 'f38'),
    routes: [
      {
        path: '/docs/category/astrocore-utilities',
        component: ComponentCreator('/docs/category/astrocore-utilities', '9dd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/getting-started',
        component: ComponentCreator('/docs/category/getting-started', '01f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/high-level-architecture',
        component: ComponentCreator('/docs/category/high-level-architecture', 'de7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/low-level-architecture',
        component: ComponentCreator('/docs/category/low-level-architecture', 'd20'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/modes-of-operation',
        component: ComponentCreator('/docs/category/modes-of-operation', '7fd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/supported-boards',
        component: ComponentCreator('/docs/category/supported-boards', '639'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/alire',
        component: ComponentCreator('/docs/getting-started/alire', '8ea'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/ide',
        component: ComponentCreator('/docs/getting-started/ide', 'dbb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/getting-started/renode',
        component: ComponentCreator('/docs/getting-started/renode', '864'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/high-level-architecture/file-structure',
        component: ComponentCreator('/docs/high-level-architecture/file-structure', 'ad9'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/high-level-architecture/intro',
        component: ComponentCreator('/docs/high-level-architecture/intro', 'eba'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/high-level-architecture/messaging',
        component: ComponentCreator('/docs/high-level-architecture/messaging', 'e08'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/high-level-architecture/modes-of-operation/beaconing',
        component: ComponentCreator('/docs/high-level-architecture/modes-of-operation/beaconing', '93b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/high-level-architecture/modes-of-operation/communications',
        component: ComponentCreator('/docs/high-level-architecture/modes-of-operation/communications', 'f5b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/high-level-architecture/modes-of-operation/detumble',
        component: ComponentCreator('/docs/high-level-architecture/modes-of-operation/detumble', '355'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/high-level-architecture/modes-of-operation/idle',
        component: ComponentCreator('/docs/high-level-architecture/modes-of-operation/idle', '806'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/high-level-architecture/modes-of-operation/imaging',
        component: ComponentCreator('/docs/high-level-architecture/modes-of-operation/imaging', 'f94'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/high-level-architecture/modes-of-operation/inference',
        component: ComponentCreator('/docs/high-level-architecture/modes-of-operation/inference', '9a4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/high-level-architecture/modes-of-operation/laboratory',
        component: ComponentCreator('/docs/high-level-architecture/modes-of-operation/laboratory', '57d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/high-level-architecture/modes-of-operation/safe',
        component: ComponentCreator('/docs/high-level-architecture/modes-of-operation/safe', 'c2d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/high-level-architecture/services',
        component: ComponentCreator('/docs/high-level-architecture/services', '759'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/low-level-architecture/bsp',
        component: ComponentCreator('/docs/low-level-architecture/bsp', '4bd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/low-level-architecture/config',
        component: ComponentCreator('/docs/low-level-architecture/config', '66f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/low-level-architecture/hal',
        component: ComponentCreator('/docs/low-level-architecture/hal', 'ce1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/low-level-architecture/intro',
        component: ComponentCreator('/docs/low-level-architecture/intro', 'c61'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/low-level-architecture/middleware',
        component: ComponentCreator('/docs/low-level-architecture/middleware', 'a1a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/low-level-architecture/svd',
        component: ComponentCreator('/docs/low-level-architecture/svd', 'baf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/supported-boards/intro',
        component: ComponentCreator('/docs/supported-boards/intro', 'be1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tools/intro',
        component: ComponentCreator('/docs/tools/intro', '511'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/tools/project-configurator',
        component: ComponentCreator('/docs/tools/project-configurator', 'c0d'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
