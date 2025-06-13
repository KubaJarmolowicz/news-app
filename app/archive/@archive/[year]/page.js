import { NewsList } from "@/components/Organisms";
import { getNewsForYear } from "@/lib/news";

const FilteredNewsPage = async ({ params }) => {
  const { year } = await params;
  const news = getNewsForYear(year);
  return <NewsList news={news} />;
};

export default FilteredNewsPage;
