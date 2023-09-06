import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/documentation/__docusaurus/debug',
    component: ComponentCreator('/documentation/__docusaurus/debug', '1d7'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/config',
    component: ComponentCreator('/documentation/__docusaurus/debug/config', '14c'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/content',
    component: ComponentCreator('/documentation/__docusaurus/debug/content', '3cc'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/globalData',
    component: ComponentCreator('/documentation/__docusaurus/debug/globalData', '151'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/metadata',
    component: ComponentCreator('/documentation/__docusaurus/debug/metadata', '703'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/registry',
    component: ComponentCreator('/documentation/__docusaurus/debug/registry', '831'),
    exact: true
  },
  {
    path: '/documentation/__docusaurus/debug/routes',
    component: ComponentCreator('/documentation/__docusaurus/debug/routes', '949'),
    exact: true
  },
  {
    path: '/documentation/blog',
    component: ComponentCreator('/documentation/blog', 'd81'),
    exact: true
  },
  {
    path: '/documentation/blog/archive',
    component: ComponentCreator('/documentation/blog/archive', '58e'),
    exact: true
  },
  {
    path: '/documentation/blog/first-blog-post',
    component: ComponentCreator('/documentation/blog/first-blog-post', '198'),
    exact: true
  },
  {
    path: '/documentation/blog/long-blog-post',
    component: ComponentCreator('/documentation/blog/long-blog-post', 'fd9'),
    exact: true
  },
  {
    path: '/documentation/blog/mdx-blog-post',
    component: ComponentCreator('/documentation/blog/mdx-blog-post', '406'),
    exact: true
  },
  {
    path: '/documentation/blog/tags',
    component: ComponentCreator('/documentation/blog/tags', 'f4a'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/docusaurus',
    component: ComponentCreator('/documentation/blog/tags/docusaurus', '700'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/facebook',
    component: ComponentCreator('/documentation/blog/tags/facebook', '143'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/hello',
    component: ComponentCreator('/documentation/blog/tags/hello', '646'),
    exact: true
  },
  {
    path: '/documentation/blog/tags/hola',
    component: ComponentCreator('/documentation/blog/tags/hola', '2dd'),
    exact: true
  },
  {
    path: '/documentation/blog/welcome',
    component: ComponentCreator('/documentation/blog/welcome', '91b'),
    exact: true
  },
  {
    path: '/documentation/markdown-page',
    component: ComponentCreator('/documentation/markdown-page', 'fbc'),
    exact: true
  },
  {
    path: '/documentation/my-markdown-page',
    component: ComponentCreator('/documentation/my-markdown-page', '982'),
    exact: true
  },
  {
    path: '/documentation/my-react-page',
    component: ComponentCreator('/documentation/my-react-page', '47a'),
    exact: true
  },
  {
    path: '/documentation/docs',
    component: ComponentCreator('/documentation/docs', '8b8'),
    routes: [
      {
        path: '/documentation/docs/category/getting-started',
        component: ComponentCreator('/documentation/docs/category/getting-started', '76f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/category/tutorial---basics',
        component: ComponentCreator('/documentation/docs/category/tutorial---basics', 'd10'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/category/tutorial---extras',
        component: ComponentCreator('/documentation/docs/category/tutorial---extras', '870'),
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
        path: '/documentation/docs/intro',
        component: ComponentCreator('/documentation/docs/intro', '9e8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/tutorial-basics/congratulations',
        component: ComponentCreator('/documentation/docs/tutorial-basics/congratulations', '54c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/tutorial-basics/create-a-blog-post',
        component: ComponentCreator('/documentation/docs/tutorial-basics/create-a-blog-post', 'c06'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/tutorial-basics/create-a-document',
        component: ComponentCreator('/documentation/docs/tutorial-basics/create-a-document', 'a1f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/tutorial-basics/create-a-page',
        component: ComponentCreator('/documentation/docs/tutorial-basics/create-a-page', '464'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/tutorial-basics/deploy-your-site',
        component: ComponentCreator('/documentation/docs/tutorial-basics/deploy-your-site', '82a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/tutorial-basics/markdown-features',
        component: ComponentCreator('/documentation/docs/tutorial-basics/markdown-features', '0b6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/tutorial-extras/manage-docs-versions',
        component: ComponentCreator('/documentation/docs/tutorial-extras/manage-docs-versions', '0d0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/documentation/docs/tutorial-extras/translate-your-site',
        component: ComponentCreator('/documentation/docs/tutorial-extras/translate-your-site', '4d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/documentation/',
    component: ComponentCreator('/documentation/', '913'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
