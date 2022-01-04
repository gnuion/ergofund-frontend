import NextLink from 'next/link'
import {Link, useColorModeValue} from '@chakra-ui/react'
function NavLink(props: any) {
  return (
    <NextLink href={props.href}>
      <li>
        <Link
          px={2}
          py={1}
          rounded={'md'}
          _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
          }}
        >
          {props.children}
        </Link>
      </li>
    </NextLink>
  )
}

export default NavLink
