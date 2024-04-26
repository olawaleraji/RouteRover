import React from "react";
import { Input } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";

type Props = {};

const ghcn = (props: Props) => {
  const variants = ["faded"];
  return (
    <div className="bg-white lg:mx-[22rem] py-4 sm:py-4 lg:py-4 mb-6">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="grid gap-4 sm:grid-cols md:gap-8 xl:grid-cols lg:mx-[12rem]">
          {/* feature - start */}
          <div className="flex flex-col rounded-lg border p-4 md:p-6 items-center py-12 px-8">
            <h2 className="mb-2 text-xl font-bold md:text-3xl">
              Refer A Friend
            </h2>
            <p className="mb-4 text-gray-500">
              Input Your Information To Get Your Referral Link or Submit A
              Reference
            </p>
            <div className="w-full flex flex-col gap-4">
              {variants.map((variant) => (
                <div
                  key={variant}
                  className="flex w-full flex-wrap mb-6 md:mb-0 gap-4"
                >
                  <Input type="number" variant="faded" label="Phone Number" />
                  <Input
                    type="email"
                    variant="faded"
                    label="Email"
                    placeholder="Enter your email"
                  />
                </div>
              ))}
            </div>
            <div className="mt-4">
              {" "}
              <Button>Refer A Friend</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ghcn;
