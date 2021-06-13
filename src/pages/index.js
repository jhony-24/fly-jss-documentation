import React from 'react';
import clsx from 'clsx';
import Layout  from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '../components/HomepageFeatures';
import FlyJSSLogoXL from '@site/static/img/logo-xl.png';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className={clsx('container',styles.heroContainer)}>
        <div>
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg margin-right--xs"
              to="/docs/Introduction/getting-started">
              Get started  
            </Link>
            <a target="_blank" href="https://www.npmjs.com/package/fly-jss" className="button button--primary button--lg">
              Download
            </a>
          </div>
        </div>
        <img src={FlyJSSLogoXL} className={styles.heroLogo} />
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title="Atomic CSS in JS"
      description="Small library using CXS to create Atomic CSS in JS inspired in Stylex CSS at Facebook to prevent duplication of classnames">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
