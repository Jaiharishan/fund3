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
import { useRouter } from "next/router";

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

// need to create a global user context and see if the user is connected
// only if the user is not connect the button should show connect

export default function Navbar() {
  const [isMount, setIsMount] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

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
      // user con
      // router.push("/explore");
    }
  }, [connected, wallets, wallet, publicKey, router]);

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
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
