import { currentUser } from "@clerk/nextjs/server";

export default async function ProfilePage() {
  const user = await currentUser();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Thông tin cá nhân</h1>
      <p>
        <strong>Tên:</strong> {user?.firstName} {user?.lastName}
      </p>
      <p>
        <strong>Email:</strong> {user?.emailAddresses[0].emailAddress}
      </p>
    </div>
  );
}
