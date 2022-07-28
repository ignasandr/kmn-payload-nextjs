import styled from "styled-components";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import payload from 'payload';
import Layout from "../components/layout";

interface subcategory {
    label: string
    slug: string
    id: string
}

interface NavItem {
    type: string,
    label: string,
    slug: string,
    subcategories: subcategory[]
    id: string
}

const StyledExample = styled.div`
    h2 {
        color: ${props => props.theme.colors.base};
        font-family: ${props => props.theme.fonts.title};
    }
    p {
        color: ${props => props.theme.colors.orange};
        font-family: ${props => props.theme.fonts.base};
    }
`

export default function Nav({ navItems }: InferGetStaticPropsType<typeof getStaticProps>) {
    return (
        <Layout>

            {navItems.navItems.map((item:NavItem) => {
                return (
                    <StyledExample key={item.id}>
                        <h2>{item.label}</h2> 
                        <p>{item.id}</p>
                    </StyledExample>
                )
            })}
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const navItems = await payload.findGlobal({
        slug: 'navbar'
    })

    return {
        props: { navItems }
    }
}