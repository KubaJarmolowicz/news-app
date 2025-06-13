const NewsDetailsPage = async ({ params }) => {
  const { id } = await params;
  return (
    <>
      <header>
        <h1>News Details Page</h1>
        <p>{id}</p>
      </header>
    </>
  );
};

export default NewsDetailsPage;
