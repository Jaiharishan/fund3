import { ReactNode, useState, useEffect } from "react";
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import { useWallet } from "@solana/wallet-adapter-react";

const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={"#"}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const [isMount, setIsMount] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    autoConnect,
    wallets,
    wallet,
    publicKey,
    connecting,
    connected,
    disconnecting,
  } = useWallet();

  useEffect(() => {
    setIsMount(true);
    if (connected) {
      console.log({ wallets, wallet, publicKey });
    }
  }, [connected, wallets, wallet, publicKey]);

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link href="/">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2917/2917641.png"
              alt="fund3"
              boxSize={"10"}
            />
          </Link>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} align={"center"} spacing={5}>
              <Link href="/create">
                <div className="font-bold text-lg cursor-pointer">Create</div>
              </Link>
              <Link href="/explore">
                <div className="font-bold text-lg cursor-pointer">Explore</div>
              </Link>
              <Button
                onClick={toggleColorMode}
                border={"none"}
                backgroundColor={"transparent"}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
              {isMount && <WalletMultiButton />}

              {/* <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={
                      "https://avatars.dicebear.com/api/micah/your-custom-seed.svg"
                    }
                  />
                </MenuButton>
                <MenuList alignItems={"center"}>
                  <br />
                  <Center>
                    <Avatar
                      size={"2xl"}
                      src={
                        "https://avatars.dicebear.com/api/micah/your-custom-seed.svg"
                      }
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Username</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Dashboard</MenuItem>
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </Menu> */}
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
