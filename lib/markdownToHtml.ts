import { remark } from "remark";
import html from "remark-html";

type replacementImg = {
  prev: string;
  next: string;
};

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  const regex = /<img.+?(?=>)/gm;
  const resultStr = result.toString();
  const matches = resultStr.match(regex);
  const replacements: replacementImg[] = [];
  console.log(matches);
  matches?.forEach((mReg) => {
    const m = mReg.toString();
    const src = m
      .match(/src=".+?(?=")/)
      ?.toString()
      .replace('src="', "");
    const alt = m
      .match(/alt=".+?(?=")/)
      ?.toString()
      .replace('alt="', "");
    const title = m
      .match(/title=".+?(?=")/)
      ?.toString()
      .replace('title="', "");

    console.log(src, alt, title);
  });

  return result.toString();
}
