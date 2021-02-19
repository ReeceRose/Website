import Head from 'next/head';

type Props = {
  title: string;
  description: string;
};

const SEO: React.FC<Props> = ({ title, description }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />

      <meta name="description" content={description} />
      <meta name="twitter:description" content={description} />
      <meta name="og:description" content={description} />

      <meta name="twitter:creator" content="@reecerose18" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:type" content="website" />
    </Head>
  );
};

export default SEO;
