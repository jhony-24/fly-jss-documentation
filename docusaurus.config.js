/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Fly JSS',
  tagline: 'Create atomic CSS in JS inspired in Stylex at Facebook',
  url: 'https://github.com/jhony-24/fly-jss',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.png',
  organizationName: 'Fly JSS', 
  projectName: 'Fly JSS', 
  themeConfig: {
    navbar: {
      title: 'Fly JSS',
      logo: {
        alt: 'Fly JSS',
        src: 'img/logo.png',
      },
      items: [
        {
          to : '/docs/introduction/getting-started',
          label: 'Getting started',
          position: 'right',
        },
        {
          to: '/docs/api-reference/api-reference', 
          label: 'API',
          position: 'right'
        },
        {
          href: 'https://www.npmjs.com/package/fly-jss',
          label: 'Npm',
          position: 'right',
        },
        {
          href: 'https://github.com/jhony-24/fly-jss',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://sebastienlorber.com/atomic-css-in-js',
          label: 'Atomic CSS in JS',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting started',
              to: '/docs/introduction/getting-started',
            },
            {
              label: 'API',
              to: '/docs/api-reference/api-reference',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Npm',
              href : "https://www.npmjs.com/package/fly-jss"
            },
            {
              label: 'GitHub',
              href: 'https://github.com/jhony-24/fly-jss',
            },
            {
              label : 'Atomic CSS in JS',
              href : 'https://sebastienlorber.com/atomic-css-in-js'
            }
          ],
        },
      ],
      copyright: `Copyright © 2020-2021 My practice project, Inc. Fly JSS.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/jhony-24/fly-jss',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
