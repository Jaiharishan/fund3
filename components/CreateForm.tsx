import React, {
  useState,
  useCallback,
  useRef,
  SyntheticEvent,
  ChangeEvent,
  FC,
  MutableRefObject,
} from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputRightAddon,
  InputGroup,
  Textarea,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import ChakraTagInput from "./ChakraTagInput";
import { ForwardRefComponent } from "framer-motion";
import { setSyntheticLeadingComments } from "typescript";

// name, description, goal amount, tags, duration, links
const CreateForm: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [targetAmount, setTargetAmount] = useState<string>("0");
  const [tags, setTags] = useState<string[]>([]);
  const [description, setDescription] = useState<string>("");
  const [links, setLinks] = useState<string[]>([]);
  const [file, setFile] = useState<File>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<any>();

  const handleTagsChange = useCallback(
    (event: SyntheticEvent, tags: string[]) => {
      setTags(tags);
    },
    []
  );

  const handleLinksChange = useCallback(
    (event: SyntheticEvent, links: string[]) => {
      setLinks(links);
    },
    []
  );

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  //   form submission logic goes here
  const handleSubmit = () => {
    console.log("submitted");
  };

  return (
    <>
      <div className="flex items-center justify-center flex-col p-4 m-4 border border-gray-600 rounded-lg w-full md:w-2/3">
        <div className="flex items-center justify-between mb-5 w-full mx-5">
          {/* img */}
          <Image src={"./create-avatar.png"} alt={"create-avatar"} w={"36"} />
          <div className="text-lg font-semibold w-1/3 px-3 py-2 bg-opacity-10 bg-white rounded-md">
            You can publish your funding page by filling the form below with
            appropriate details!
          </div>
        </div>
        <FormControl>
          <FormLabel>Title</FormLabel>
          <Input
            type={"text"}
            placeholder={"Enter the title for your funding"}
            className={"mb-3"}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <FormLabel>Target Amount</FormLabel>
          <InputGroup className="mb-3">
            <Input
              type={"number"}
              placeholder="Enter the target amount"
              isRequired
              value={targetAmount}
              onChange={(e) => setTargetAmount(e.target.value)}
            />
            <InputRightAddon>
              <Image src={"./solana-sol-icon.png"} alt={"sol"} w={"5"} />
            </InputRightAddon>
          </InputGroup>

          <FormLabel>Image</FormLabel>
          <Input
            type={"file"}
            placeholder={"Upload relevent images here!"}
            onClick={(e) => handleFileChange}
          />

          <FormLabel>Description</FormLabel>
          <Textarea
            placeholder="Describe why you are raising this fund. Add some details about it!"
            className="mb-3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            isRequired
          />

          <FormLabel>Tags</FormLabel>
          <ChakraTagInput
            tags={tags}
            onTagsChange={handleTagsChange}
            className={"mb-3"}
            placeholder={"Add suitable tags for more reach"}
          />

          <FormLabel>Links</FormLabel>
          <ChakraTagInput
            tags={links}
            onTagsChange={handleLinksChange}
            className={"mb-5"}
            placeholder={"Add social media and other links"}
          />
          <Button colorScheme="green" onClick={onOpen} width={"full"}>
            Submit
          </Button>
        </FormControl>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Confirmation
              </AlertDialogHeader>

              <AlertDialogBody>
                Check if have entered the correct details and click Create
                button.
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  colorScheme="green"
                  onClick={onClose}
                  ml={3}
                  onClickCapture={handleSubmit}
                >
                  Create
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </div>
    </>
  );
};

export default CreateForm;
