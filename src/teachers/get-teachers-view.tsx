import FS from "fs";
import matter from "gray-matter";

export function getTeachers() {

    const folder = "./src/teachers/teacher";
    const files = FS.readdirSync(folder);
    const markdowns = files.filter((file) => file.endsWith(".mdx"));
  
    const posts = markdowns.map((filename) => {
      const markdown = FS.readFileSync(`${folder}/${filename}`, "utf-8");
      const matterResult = matter(markdown);
      return {
        name: matterResult.data.name,
        email: matterResult.data.email,
        workArea: matterResult.data.workArea,
        personalSite: matterResult.data.personalSite,
        latter: matterResult.data.latter,
        avatar: matterResult.data.avatar,
      }
    });
  
    return posts;
  }