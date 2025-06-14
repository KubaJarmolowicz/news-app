import { NewsList } from "@/components/Organisms";
import { getAllNews } from "@/lib/news";

const NewsPage = async () => {
  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
};

export default NewsPage;
