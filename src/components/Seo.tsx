import { Helmet } from "react-helmet-async";

const SITE = "https://spacesquare.dev";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
}

const Seo = ({ title, description, path, schema }: SeoProps) => {
  const url = `${SITE}${path}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Helmet>
  );
};

export default Seo;
