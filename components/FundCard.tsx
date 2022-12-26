import React, { ReactNode, useState, FC } from "react";
import { Image, Progress, Tag } from "@chakra-ui/react";
import {
  HeartIcon as HeartIconOutline,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import Link from "next/link";
import { IFundCard } from "../helpers/interfaces/IfundCard";

const FundCard = ({ title, tags, target_amount }: IFundCard) => {
  const [liked, setLiked] = useState<Boolean>(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <>
      {/* <Progress value={20} size="md" colorScheme="green" /> */}
      <div className="flex flex-col items-center justify-center card p-3 rounded-lg min-w-[250px] w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
        <Image
          src={
            "https://images.cloudflareapps.com/ij5s5higSzWcOB6vks5Q_background-1.jpeg"
          }
          alt={"fund-image"}
          width={"full"}
          className={"aspect-square rounded-md"}
        />
        <div className="font-bold text-lg mt-3 self-start mx-2">{title}</div>
        <div className="flex gap-2 mt-2 self-start mx-2 mb-2">
          {tags.map((tag: string, i: number) => {
            return (
              <Tag color={"green.400"} key={i}>
                {tag}
              </Tag>
            );
          })}
        </div>
        <div className="w-full mt-3 px-2">
          <Progress
            value={69}
            colorScheme={"green"}
            size={"xs"}
            rounded={"full"}
          />
        </div>
        <div className="flex self-start mx-2 mt-3 gap-2 items-center">
          <div className="font-bold text-xl">{target_amount}</div>
          <Image
            height={"5"}
            src="./solana-sol-icon.png"
            alt={"sol-icon"}
            className={"mt-1"}
          />
        </div>
        <div className="flex items-center justify-between w-full mt-3 px-1">
          {liked ? (
            <HeartIconSolid
              className={"h-6 cursor-pointer text-red-600"}
              onClick={handleLike}
            />
          ) : (
            <HeartIconOutline
              className={"h-6 cursor-pointer"}
              onClick={handleLike}
            />
          )}

          <ShareIcon className={"h-5 cursor-pointer"} />
        </div>
      </div>
    </>
  );
};

export default FundCard;
