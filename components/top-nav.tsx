import SignOut from "./sign-out";

export default function TopNav() {
  return (
    <div className="px-10 w-full h-full border-b shadow flex justify-between items-center">
      <div className="flex space-x-3">
        <p>Metronic</p>
      </div>
      <div className="flex space-x-3">
        <p>Alert</p>
        <p>Search</p>
        <p>User</p>
        <SignOut />
      </div>
    </div>
  );
}
