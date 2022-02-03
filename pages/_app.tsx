import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import '../src/styles/global.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import React, { useState, useEffect } from 'react'
import Router from 'next/router'
import Loader from '@/components/Loader'
import { DefaultSeo } from 'next-seo'
import PlausibleProvider from 'next-plausible'
import AppLayout from '@/components/AppLayout'
import theme from '../src/theme'
import MDXComponents from '@/components/MDXComponents'
import { MDXProvider } from '@mdx-js/react'

const queryClient = new QueryClient()
export default function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    document.documentElement.lang = `en-GB`
    const start = () => {
      setLoading(true)
    }
    const end = () => {
      setLoading(false)
    }
    Router.events.on(`routeChangeStart`, start)
    Router.events.on(`routeChangeComplete`, end)
    Router.events.on(`routeChangeError`, end)
    return () => {
      Router.events.off(`routeChangeStart`, start)
      Router.events.off(`routeChangeComplete`, end)
      Router.events.off(`routeChangeError`, end)
    }
  }, [])

  return (
    <>
      <DefaultSeo
        defaultTitle='Levi Cheney'
        titleTemplate='%s | Levi Cheney'
        openGraph={{
          title: `Levi Cheney`,
          type: `website`,
          site_name: `Levi Cheney`,
          images: [
            {
              url: `https://scontent-ort2-1.xx.fbcdn.net/v/t39.30808-6/273146104_4869167276511232_2859202710331493039_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=LWG2dtYvOXkAX8tYLGg&_nc_ht=scontent-ort2-1.xx&oh=00_AT9uMZikiEc2iXHVnt456gh5BEzSnY_72jpvTtEK5P9xGg&oe=61FFCA16`,
              alt: `Profile Picture`,
            },
          ],
        }}
        description='The purpose of this site is for me to test things out & maybe show some things off.'
      />
      <ChakraProvider theme={theme}>
        <PlausibleProvider
          domain='michael-hall.me'
          selfHosted
          trackOutboundLinks
          enabled={process.env.NODE_ENV === 'production'}
          customDomain={'https://stats.michael-hall.me'}
        >
          <QueryClientProvider client={queryClient}>
            <MDXProvider components={MDXComponents}>
              {loading ? (
                <Loader />
              ) : (
                <AppLayout>
                  <Component {...pageProps} />
                </AppLayout>
              )}
            </MDXProvider>
          </QueryClientProvider>
        </PlausibleProvider>
      </ChakraProvider>
    </>
  )
}
