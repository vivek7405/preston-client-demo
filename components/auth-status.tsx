import { getServerSession } from "next-auth/next";

export default async function AuthStatus() {
  const session = await getServerSession();
  return (
    <div className="w-full flex justify-center items-center">
      {session ? (
        <p className="text-sm">Signed in as {session.user?.email}</p>
      ) : (
        <p className="text-sm">You are not signed in.</p>
      )}
    </div>
  );
}
