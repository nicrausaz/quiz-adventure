import React from "react"
import ThemeSwitcher from "./ThemeSwitcher"
import {
   Box,
   Flex,
   Avatar,
   Button,
   Menu,
   MenuButton,
   MenuList,
   MenuItem,
   MenuDivider,
   Stack,
   Center,
} from '@chakra-ui/react';

const Navbar = () => {
   return (
      <Box px={4}>
         <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Box>Logo</Box>

            <Flex alignItems={'center'}>
               <Stack direction={'row'} spacing={7}>
                  <ThemeSwitcher></ThemeSwitcher>
                  <Menu>
                     <MenuButton
                        as={Button}
                        rounded={'full'}
                        variant={'link'}
                        cursor={'pointer'}
                        minW={0}>
                        <Avatar
                           size={'sm'}
                           src={'https://avatars.dicebear.com/api/male/username.svg'}
                        />
                     </MenuButton>
                     <MenuList alignItems={'center'}>
                        <br />
                        <Center>
                           <Avatar
                              size={'2xl'}
                              src={'https://avatars.dicebear.com/api/male/username.svg'}
                           />
                        </Center>
                        <br />
                        <Center>
                           <p>Username</p>
                        </Center>
                        <br />
                        <MenuDivider />
                        <MenuItem>Your Servers</MenuItem>
                        <MenuItem>Account Settings</MenuItem>
                        <MenuItem>Logout</MenuItem>
                     </MenuList>
                  </Menu>
               </Stack>
            </Flex>
         </Flex>
      </Box>
   )
}

export default Navbar