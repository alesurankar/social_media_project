import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function FeedPage() {
  const cookieStore = await cookies(); 
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/");
  }

  return (
    <div>
      <h1>Feed Page</h1>
      <p>Only logged-in users can see this.</p>
    </div>
  );
}