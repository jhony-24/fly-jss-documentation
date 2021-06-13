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
          title: 'Work with',
          items: [
            {
              label: 'React',
              href: 'https://github.com/facebook/react',
            },
            {
              label: 'Vue',
              href: 'https://github.com/vuejs/vue',
            },
            {
              label: 'Javascript',
              href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
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
      copyright: `Copyright ©2021 Project of type css in jss, Fly JSS.`,
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
