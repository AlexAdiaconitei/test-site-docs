import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/',
    component: ComponentCreator('/', 'b9e'),
    routes: [
      {
        path: '/',
        component: ComponentCreator('/', '474'),
        routes: [
          {
            path: '/',
            component: ComponentCreator('/', 'b6b'),
            routes: [
              {
                path: '/',
                component: ComponentCreator('/', 'bea'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
