import { currentUser } from "@clerk/nextjs/server";


export default async function user() {

    const user = await currentUser();
  // skipcq: JS-0002
  if (!user) {
    return "user";}

  return user?.id;
}
