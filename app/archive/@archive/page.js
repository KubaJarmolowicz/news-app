import Link from "next/link";
import { getAvailableNewsYears } from "@/lib/news";
import { NewsList } from "@/components/Organisms";

const ArchivePage = () => {
  const links = getAvailableNewsYears();

  return (
    <header id="archive-header">
      <nav>
        <ul>
          {links.map((link) => {
            return (
              <li key={link}>
                <Link href={`/archive/${link}`}>{link}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default ArchivePage;
