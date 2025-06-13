import classes from "./MainHeader.module.css";
import Link from "next/link";

export const MainHeader = () => {
  return (
    <header>
      <h1>Next.js Routing & Page Rendering</h1>
      <nav className={classes.nav}>
        <Link href="/">Home</Link>
        <Link href="/news">News</Link>
      </nav>
    </header>
  );
};
