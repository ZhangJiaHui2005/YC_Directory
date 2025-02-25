import SearchForm from "@/app/components/SearchForm";
import StartupCard from "@/app/components/StartupCard";

export default async function Home({ searchParams } : {
    searchParams: Promise<{ query?: string }>
}) {
    const query = (await searchParams).query

    const posts = [
        {
            _createdAt: new Date(),
            views: 55,
            author: { _id: 1 },
            _id: 1,
            description: "This is a description",
            image: "https://picsum.photos/200/300",
            category: "Robots",
            title: "We Robots"
        }
    ]
  return (
    <div>
      <section className={"pink_container"}>
          <h1 className={"heading"}>Pitch your starup, <br />connect with entrepreneurs</h1>

          <p className={"sub-heading !max-w-3xl"}>
            Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competions
          </p>

          <SearchForm query={query}/>
      </section>

      <section className={"section_container"}>
          <p className={"text-30-semibold"}>
              {query ? `Search results for "${query}"` : "All Startups"}
          </p>

          <ul className={"mt-7 card_grid"}>
              {posts?.length > 0 ? (
                  posts.map((post: StartupCardtype, index: number) => (
                      <StartupCard post={post} key={post._id} />
                  ))
              ) : (
                  <p className={"no-result"}>No startups found</p>
              )}
          </ul>
      </section>
    </div>
  );
}
