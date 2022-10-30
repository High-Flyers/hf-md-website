import PostBody from "./post-body";
//for now the same as post body

type Props = {
  content: string;
};

const SiteBody = ({ content }: Props) => {
  return <PostBody content={content} />;
};

export default SiteBody;
