import { useRouter } from "next/router";
import Link from "next/link";

interface Props {
    text: string,
    href: string
}

const style = {
    color: '#0070f3',
    textDecoration: 'underline'
}

export const ActiveLink = ( { text , href }:Props ) => {

    const { asPath } = useRouter();

    // console.log( asPath );

    return (
        <>
        {/* Actualmente con Next.js 13 no es valido utilizar el anchor tag como children de Link por lo que debemos 
        utilizar el legacyBehavior */}
            <Link legacyBehavior href={ href }>
                <a style={ asPath === href ? style : undefined }>{ text }</a>
            </Link>
        </>
    )
}; 