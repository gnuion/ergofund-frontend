import {Props} from 'framer-motion/types/types'
import Head from 'next/head'
import Nav from './Nav'
import {Container} from '@chakra-ui/react'

const Layout = (props: Props) => {
  return (
    <>
      <Head>
        <title>ErgoFund</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Nav />
      <Container as="main" maxWidth="container.xl" padding={5}>
        {props.children}
      </Container>
    </>
  )
}

export default Layout
