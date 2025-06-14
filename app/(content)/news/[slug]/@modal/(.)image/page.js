import { ModalBackdrop } from "@/components/Organisms";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";

const InterceptedImagePage = async ({ params }) => {
  const { slug } = await params;
  const newsItem = DUMMY_NEWS.find((newsItem) => newsItem.slug === slug);

  if (!newsItem) {
    notFound;
  }

  return (
    <>
      <ModalBackdrop />
      <dialog className="modal" open>
        <div className="fulscreen-image">
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;
