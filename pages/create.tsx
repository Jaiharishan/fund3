import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Spinner } from "@chakra-ui/react";
import CreateForm from "../components/CreateForm";

const create = () => {
  return (
    <>
      <Navbar />
      <div className="flex justify-center w-full">
        <CreateForm />
      </div>

      {/* have a clear background image representing the create flow */}
      {/* below which have the form aligning center overlaying with the bg-image */}
    </>
  );
};

export default create;
