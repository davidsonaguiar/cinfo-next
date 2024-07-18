import FS from "fs";
import matter from "gray-matter";

export function getNotices() {

    const folder = "./src/notice/notices";
    const files = FS.readdirSync(folder);
    const markdowns = files.filter((file) => file.endsWith(".mdx"));
  
    const posts = markdowns.map((filename) => {
      const markdown = FS.readFileSync(`${folder}/${filename}`, "utf-8");
      const matterResult = matter(markdown);
      return {
        title: matterResult.data.titulo,
        notice_description: matterResult.data.descricao_da_noticia,
        cover: matterResult.data.imagem_apresentacao,
        tag: matterResult.data.tag,
        slug: filename.replace(".mdx", ""),
      };
    });
  
    return posts;
  }