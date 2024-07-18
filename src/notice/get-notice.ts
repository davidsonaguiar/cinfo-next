import FS from "fs";
import matter from "gray-matter";

const getNotice = (slug: string) => {
    const folder = "./src/notice/notices/";
    const file = `${folder}${slug}.mdx`;
    const content = FS.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

export default getNotice;