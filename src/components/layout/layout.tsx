import MainHeader from './main-header'
import {Container} from '@chakra-ui/layout'

function Layout(props: any) {
  return (
    <>
      <MainHeader />
      <Container as="main" maxWidth="container.xl" padding={5}>
        {props.children}
      </Container>
    </>
  )
}

export default Layout
