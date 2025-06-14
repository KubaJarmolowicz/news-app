import { NewsList } from "@/components/Organisms";
import { getLatestNews } from "@/lib/news";

const LatestNewsPage = async () => {
  const latestNews = await getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
};

export default LatestNewsPage;
