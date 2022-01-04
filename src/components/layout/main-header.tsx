import {
  Flex,
  Button,
  useColorMode,
  Text,
  Link,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react'
import {MoonIcon, SunIcon} from '@chakra-ui/icons'
import NextLink from 'next/link'
import NavLink from './nav-link'

export default function MainHeader() {
  const {colorMode, toggleColorMode} = useColorMode()

  const Logo = () => (
    <NextLink href="/">
      <Link
        _hover={{
          textDecoration: 'none',
        }}
        fontSize="2xl"
      >
        <strong>ERGO</strong>FUND
      </Link>
    </NextLink>
  )

  const NavBar = () => {
    return (
      <nav>
        <HStack as="ul">
          <NavLink href="/projects">Explore All Projects</NavLink>
        </HStack>
      </nav>
    )
  }

  return (
    <header>
      <Flex
        px={4}
        h={16}
        alignItems={'center'}
        justifyContent={'space-between'}
      >
        <Logo />
        <NavBar />
        <Button variant="primary" onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
    </header>
  )
}
