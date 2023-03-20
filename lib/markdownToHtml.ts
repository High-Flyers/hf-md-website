import { remark } from "remark";
import html from "remark-html";

type replacementPairs = {
  prev: string;
  next: string;
};

export default async function markdownToHtml(markdown: string) {
  const replacements: replacementPairs[] = [];
  const result = await remark().use(html).process(markdown);
  let resultStr = result.toString();

  console.log(resultStr);

  {
    // replace imgs
    const regex = /<img.+?(?=>)>/gm;
    const matches = resultStr.match(regex);

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

      const nextImg = `<Image src="${src}" alt="${alt}"/>`;
      replacements.push({
        prev: m,
        next: nextImg,
      });
    });
  }

  replacements.forEach((rep) => {
    resultStr = resultStr.replace(rep.prev, rep.next);
  });

  return resultStr;
}
