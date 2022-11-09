import { GetStaticProps, InferGetStaticPropsType } from "next";
import payload from 'payload';

interface Example {
    id: string,
    thisIsAField: string,
    createdAt: string,
    updatedAt: string
}

export default function Examples({ examples }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <>
            {examples.docs.map((example:Example) => {
                return (
                    <div key={example.id}>
                        <h2>{example.thisIsAField}</h2> 
                        <p>{example.createdAt}</p>
                        <p>{example.updatedAt}</p>
                    </div>
                )
            })}
        </>
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