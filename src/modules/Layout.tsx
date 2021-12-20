import {Props} from 'framer-motion/types/types'
import Head from 'next/head'
import Nav from './Nav'

const Layout = (props: Props) => {
  return (
    <>
      <Nav />
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>{props.children}</main>
    </>
  )
}

export default Layout
