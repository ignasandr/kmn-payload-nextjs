import Image from 'next/image';
import payload from 'payload';
import { GetStaticProps, InferGetStaticPropsType, GetStaticPaths } from "next";
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

export const getStaticProps: GetStaticProps = async (ctx) => {
    const slug = ctx.params?.slug;

    const pageQuery = await payload.find({
        collection: 'pages',
        where: {
            slug: {
                equals: slug,
            },
        },
    });

    return {
        props: {
            page: pageQuery.docs[0],
        }
    }
}

export const getStaticPaths = async () => {
    const pagesQuery = await fetch("http://localhost:3000/api/pages");
    const pages = await pagesQuery.json();

    // const pagesQuery = await payload.find({
    //     collection: 'pages',
    // });

    const paths = pages.docs.map((page) => ({
        params: { slug: page.slug },
    }));

    
    return {
        paths: paths,
        // paths: [
        //     { params: { slug: 'infocentras' } },
        // ],
        fallback: true
    }
}