import { Button, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

const ThemeSwitcher = () => {
   const { colorMode, toggleColorMode } = useColorMode()

   return (
      <Button size="sm" colorScheme="blue" onClick={toggleColorMode}>
         {colorMode === 'light' ?  <MoonIcon></MoonIcon> : <SunIcon></SunIcon>}
      </Button>
   )
}

export default ThemeSwitcher