import Title from "../../components/title";
import Markdown from "markdown-to-jsx";
import getNotice from "@/notice/get-notice";
import { getNotices } from "@/notice/get-notices-view";

interface NoticePage {
  params: {
    slug: string;
  };
}


export async function generateStaticParams() {
  return getNotices().map((notice) => {
    return {
        slug: notice.slug,
    };
  });
}


export default async function NoticePage(props: NoticePage) {
  const { slug } = props.params;
  const notice = getNotice(slug);

  return (
    <>
      <article className="max-w-3xl prose-xl mx-auto">
        <div className="my-4">
          <Title>{notice.data.titulo}</Title>
          <p className="mb-4">{notice.data.descricao_da_noticia}</p>
          <img 
            src={"/images/notice/" + notice.data.imagem_apresentacao}
            alt="Imagem de apresentação da notícia"
            width={1200} 
            height={500} 
            className="w-full" 
          />
          <p className="mt-3 space-x-3 block">
            {
              notice.data.tags?.split(", ")?.map((tag: string) => {
                return (
                  <span key={tag} className="py-2 px-4 bg-slate-900  text-white text-sm">
                    {tag}
                  </span>
                );
              })
            }
          </p>
        </div>
        <Markdown>
          {notice.content}
        </Markdown>
      </article>
    </>
  );
}