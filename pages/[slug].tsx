import Image from 'next/image';
import payload from 'payload';
import { GetStaticProps, InferGetStaticPropsType } from "next";
import styles from './index.module.css';

export default function Page({ page }: InferGetStaticPropsType<typeof getStaticProps>) {
    return(
        <div className={styles.page}>
            <Image
                src={page.image.sizes.feature.url}
                width={820}
                height={370}
                alt="picture" 
            ></Image>
            <h1>{page.title}</h1>
        </div>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const pageQuery = await payload.find({
        collection: 'pages',
        where: {
            slug: {
                equals: 'infocentras',
            },
        },
    });

    return {
        props: {
            page: pageQuery.docs[0],
        }
    }
}

export async function getStaticPaths() {
    return {
        paths: [
            { params: { slug: 'infocentras' } },
        ],
        fallback: false
    }
}