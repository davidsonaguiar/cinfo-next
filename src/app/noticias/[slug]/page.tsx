import Image from "next/image";
import Title from "../../components/title";
import Markdown from "markdown-to-jsx";
import getNotice from "@/notice/get-notice";

interface NoticePage {
  params: {
    slug: string;
  };
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
          <Image 
            src={"/src/notice/images/" + notice.data.imagem_apresentacao}
            alt="Imagem de apresentação da notícia"
            width={1200} 
            height={500} 
            className="w-full" 
          />
        </div>
        <Markdown>
          {notice.content}
        </Markdown>
      </article>
    </>
  );
}
