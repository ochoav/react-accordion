import type { NextPage } from 'next';
import Head from 'next/head';
import { useRef, useEffect } from 'react';
import { Accordion, AccordionItem as Item, AccordionItemProps } from '@szhsin/react-accordion';
import styles from '../styles/Home.module.css';

const AccordionItem = (props: AccordionItemProps) => (
  <Item
    {...props}
    contentProps={{ className: styles.itemContent }}
    panelProps={{ style: { padding: '1rem' } }}
  />
);

const Home: NextPage = () => {
  const ref = useRef<HTMLHeadingElement>(null);
  useEffect(() => {
    console.log('ref', ref);
  }, []);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Accordion
          transition
          transitionTimeout={300}
          id="ac1"
          onMouseLeave={() => console.log('mouse leave accordion')}
          onStateChange={(e) =>
            e.key === 'key1' &&
            e.current.isResolved &&
            console.log('state changed:', e.current.state)
          }
        >
          <AccordionItem
            headerProps={{
              ref: ref,
              className: (e) => {
                return e.state;
              },
              'aria-labelledby': '33',
              'data-testid': 32
            }}
            header="header 1"
            itemKey="key1"
            onMouseEnter={() => console.log('mouse enter item 1')}
            className={({ state }) => (state === 'entered' ? 'open' : 'closed')}
          >
            content 1<textarea />
          </AccordionItem>
          <AccordionItem header="header 2" initialEntered style={{ border: '1px solid' }}>
            content 2<div data-testid="3">more</div>
            <Accordion allowMultiple>
              <AccordionItem header="header 2.1">content 1</AccordionItem>
              <AccordionItem header="header 2.2">
                content 2<div>more</div>
              </AccordionItem>
              <AccordionItem header="header 2.3">
                content 3<div>more</div>
                <div style={{ height: 500 }}>more</div>
              </AccordionItem>
            </Accordion>
          </AccordionItem>
          <AccordionItem header="header 3" itemKey={3} buttonProps={{ 'data-testid': 'button3' }}>
            content 3<div>more</div>
            <Accordion>
              <AccordionItem header="header 3.1">content 3.1</AccordionItem>
            </Accordion>
            <button>more</button>
          </AccordionItem>
        </Accordion>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
};

export default Home;
