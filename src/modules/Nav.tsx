import {Box, Flex, Button, Stack, useColorMode} from '@chakra-ui/react'
import {MoonIcon, SunIcon} from '@chakra-ui/icons'
import {Logo} from './Logo'

export default function Nav() {
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <>
      <Box px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Logo boxSize={48} />
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button variant="primary" onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}
