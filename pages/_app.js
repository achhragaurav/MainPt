import { AppProps, NextWebVitalsMetric } from 'next/app'
import Head from 'next/head'
import { useEffect,useState } from 'react'
import { AnimatePresence } from 'framer-motion'



import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
     const [initialLoad, setInitialLoad] = useState(true);
  useEffect(() => {
    if (initialLoad) {
      window.localStorage.setItem("initial","true")
    }
    else {
      window.localStorage.setItem("initial","")
    }
  }, [initialLoad])
    useEffect(() => {
      window.localStorage.setItem("initial", "true")
        if (window.localStorage.getItem("initial")) {
            setInitialLoad(true)
        } else {
            setInitialLoad(false)
        }
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
            
<link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700;900&display=swap" rel="stylesheet"></link>

            </Head>

            <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
                <Component initialLoad={initialLoad} setInitialLoad={setInitialLoad} {...pageProps} canonical={url} key={url} />
            </AnimatePresence>
        </>
    )
}

export default MyApp