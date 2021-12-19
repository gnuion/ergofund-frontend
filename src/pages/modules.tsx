import {Button, VStack} from '@chakra-ui/react'
import HelloModule from '@modules/HelloModule/HelloModule'

const modules = () => {
  return (
    <VStack bgColor="orange.500" spacing="4" p="4">
      <Button>Chakra UI Button test</Button>
      <HelloModule />
    </VStack>
  )
}

export default modules
