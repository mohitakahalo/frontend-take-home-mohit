import Head from 'next/head'
import { ComponentProps, useCallback, useState } from 'react';
import Layout from '@/components/organisms/layout'
import styles from './dashboard.module.scss'
import { TabViewMap } from '@/constants/dashboard';

export async function getServerSideProps() {
  // fetch the page data from the testnets api
  const res = await fetch(`${process.env.BASE_URL}/api/testnets`);
  const testnetsData = await res.json();
  const dashboardData = {
    testnetsData,
    membersData: [''], // data placeholders for other pages
    projectKeyData: [] // data placeholders for other pages
  }

  return {
    props: { dashboardData }
  };
}

export default function Dashboard({dashboardData}: ComponentProps<any>) {
  const [activeTab, setActiveTab] = useState<string>('Testnets');

  const renderDashboardTab = useCallback(() => {
    const TabViewComponent = TabViewMap[activeTab];
    return TabViewComponent(dashboardData);
  }, [activeTab, dashboardData]);

  return (
    <>
      <Head>
        <title>Harbor XYZ Dashboard</title>
      </Head>
      <Layout activeTab={activeTab} handleClick={(newTab) => { setActiveTab(newTab) }}>
        <div className={styles.mainContainer}>
          {renderDashboardTab()}
        </div>
      </Layout>
    </>
  )
}
