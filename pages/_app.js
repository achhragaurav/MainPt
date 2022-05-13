import { AppProps, NextWebVitalsMetric } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'



import '../styles/globals.css'


function MyApp({ Component, pageProps, router }) {
    

useEffect(() => {
    Array.from(
        document.querySelectorAll('head > link[rel="stylesheet"][data-n-p]')
    ).forEach(node => {
        node.removeAttribute('data-n-p');
    });
    const mutationHandler = mutations => {
        mutations.forEach(({ target }) => {
            if (target.nodeName === 'STYLE') {
                if (target.getAttribute('media') === 'x') {
                    target.removeAttribute('media');
                }
            }
        });
    };
    const observer = new MutationObserver(mutationHandler);
    observer.observe(document.head, {
        subtree: true,
        attributeFilter: ['media'],
    });
    return () => {
        observer.disconnect();
    };
}, []);

    const url = `https://wallis.dev${router.route}`

    useEffect(() => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches)
        ) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    })

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.png" type="image/png" />
            </Head>

            <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
                <Component {...pageProps} canonical={url} key={url} />
            </AnimatePresence>
        </>
    )
}

export default MyApp