import NextHead from 'next/head';
import getConfig from 'next/config';
import { useRouter } from 'next/router';

const { publicRuntimeConfig: { SERVER_URL } } = getConfig();

const defaultDescription = 'Kauno menininkų namų svetainė';
const defaultTitle = 'Kauno menininkų namai';
const titleSuffix = ' | KMN';
const defaultOGImage = `${SERVER_URL}/KMN_logo.svg`;
const defaultKeywords = 'Kauno menininkų namai, menas, kultūra';

type Props = {
  title?: string,
  description?: string,
  ogImage?: string,
  keywords?: string,
};

const Head: React.FC<Props> = ({ title, description, ogImage, keywords }) => {
  const { asPath } = useRouter();

  const getTitle = () => {
    if (title) return title + titleSuffix;
    return defaultTitle + titleSuffix;
  };

  return (
    <NextHead>
      <title>
        {getTitle()}
      </title>
      <link
        rel="icon"
        type="image/x-icon"
        href="/favicon.svg"
      />
      <meta
        name="description"
        content={description || defaultDescription}
      />
      <meta
        name="keywords"
        content={keywords || defaultKeywords}
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        property="og:url"
        content={`${SERVER_URL}${asPath}`}
      />
      <meta
        property="og:title"
        content={title || defaultTitle}
      />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      <meta
        property="twitter:title"
        content={title || defaultTitle}
      />
      <meta
        name="twitter:site"
        content="@payloadcms"
      />
      <meta
        name="twitter:card"
        content="summary_large_image"
      />
      <meta
        name="twitter:image"
        content={ogImage || defaultOGImage}
      />
      <meta
        property="og:image"
        content={ogImage || defaultOGImage}
      />
    </NextHead>
  );
};

export default Head;