import React from "react";

type Props = {};

const Refer = (props: Props) => {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
              When You Refer A Friend
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:gap-8">
            <div className="rounded-lg bg-gray-100 p-5">
              <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
                10%
              </h1>
              <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">
                  When Car Is Live
                </h3>

                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>

              <p className="text-gray-500">
                Earn 10% when your car goes live on our platform! Once your
                listing is up and running, you&apos;re set to start earning.
                Start your journey today and let your car work for you.
              </p>
            </div>
            <div className="rounded-lg bg-gray-100 p-5">
              <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">
                25%
              </h1>
              <div className="mb-4 flex items-center justify-between gap-4 border-b pb-4">
                <h3 className="font-semibold text-indigo-500 sm:text-lg md:text-xl">
                  Referred Host Earnings
                </h3>

                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gray-300 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
              </div>

              <p className="text-gray-500">
                Unlock your earning potential with our referral program! As a
                valued member, you&apos;re invited to refer hosts to our
                platform. When they successfully list their property, you earn a
                generous commission of 25% of their earnings. That means for
                every booking made through your referral, you&apos;ll receive
                25% of the total booking amount as your reward. Join us in
                connecting travelers with amazing accommodations and start
                earning today!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Refer;
