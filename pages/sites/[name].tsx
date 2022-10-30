import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getSiteBySlug, getAllSites } from "../../lib/api";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import SiteType from "../../interfaces/site";
import SiteBody from "../../components/site-body";
import SiteTitle from "../../components/site-title";

type Props = {
  site: SiteType;
};

export default function Site({ site }: Props) {
  const router = useRouter();
  if (!router.isFallback && !site?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <>
      {router.isFallback ? (
        <SiteTitle>Loading…</SiteTitle>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>{site.title}</title>
            </Head>
            <SiteTitle>{site.title}</SiteTitle>
            <SiteBody content={site.content} />
          </article>
        </>
      )}
    </>
  );
}

type Params = {
  params: {
    name: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const site = getSiteBySlug(params.name, ["title", "slug", "content"]);
  const content = await markdownToHtml(site.content || "");

  return {
    props: {
      site: {
        ...site,
        content,
      },
    },
  };
};

export const getStaticPaths = async () => {
  const sites = getAllSites(["slug"]);

  return {
    paths: sites.map((site) => {
      return {
        params: {
          name: site.slug,
        },
      };
    }),
    fallback: false,
  };
};
