import React from "react";
import { signOut } from "next-auth/react";
import { getSession } from "next-auth/react";
import { useSession } from "next-auth/react";

const dashCheck = () => {
  function handleSignOut() {
    signOut();
  }
  const { data: session } = useSession();
  console.log("Session Data: ", session);

  return (
    <div className="space-y-4">
      <h3>Dashboard</h3>
      <div>
        Session Details:
        <div>
          <span>Name: {session.user.name}</span>
        </div>
        <div>
          <span>Email: {session.user.email}</span>
        </div>
      </div>
      <div>
        <button className="border p-2 border-2" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default dashCheck;

export async function getServerSideProps({ req }) {
  const session = await getSession({ req });

  if (!session) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
