/* eslint-disable @next/next/no-img-element */
import { getProviders, signIn as SignIntoProvider } from "next-auth/react";
import Header from "../../components/Header.jsx";
import React from "react";

function signIn({ providers }) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-28 px-14 text-center">
        <img
          src="https://links.papareact.com/ocw"
          alt="logo"
          className="w-80"
        />
        <p className="font-xs italic">
          Sign In and use Instagram
        </p>
        <div className="mt-40">
          {Object.values(providers).map((provider) => (
            <div key={provider.name}>
              <button
                onClick={() =>
                  SignIntoProvider(provider.id, { callbackUrl: "/" })
                }
                className="p-3 bg-blue-500 rounded-lg text-white"
              >
                Sign in with {provider.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

export default signIn;
