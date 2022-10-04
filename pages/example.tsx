import { GetStaticProps, InferGetStaticPropsType } from "next";
import payload from 'payload';
import Layout from "../components/layout";

interface Example {
    id: string,
    thisIsAField: string,
    createdAt: string,
    updatedAt: string
}

export default function Examples({ examples }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Layout>
            {examples.docs.map((example:Example) => {
                return (
                    <section key={example.id}>
                        <h2>{example.thisIsAField}</h2> 
                        <p>{example.createdAt}</p>
                        <p>{example.updatedAt}</p>
                    </section>
                )
            })}
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const examples = await payload.find({
        collection: 'examples'
    })

    return {
        props: { examples }
    }
}