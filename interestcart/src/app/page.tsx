import { CreatePost } from "~/app/_components/create-post";
// import { api } from "~/trpc/server";

export default async function Home() {
  // const hello = await api.post.hello({ text: "from tRPC" });

  return (
    <div>
      <CrudShowcase />
    </div>
  );
}

async function CrudShowcase() {
  // const latestPost = await api.post.getLatest();

  return (
    <>
      {/* <Header /> */}
      {/* {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}
      <CreatePost /> */}
    </>
  );
}
