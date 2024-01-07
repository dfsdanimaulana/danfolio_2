import React from 'react'

const Meta = () => {
    return (
        <>
            {/* Favicons */}
            <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
            <link rel="manifest" href="/site.webmanifest" />
            <link rel="canonical" href="https://danfolio.vercel.app/"></link>
            <link rel="pingback" href="https://danfolio.vercel.app/"></link>

            {/* General Metadata */}
            <meta name="author" content="Dani Maulana" />
            <title>Dani Maulana (@dnm17_), a full stack web developer</title>
            <meta title="Dani Maulana (@dnm17_), a full stack web developer" name="title" />

            {/* Description and Keywords Metadata */}
            <meta
                name="description"
                content="#MernStack #FullStack #WebsiteDevelopment - Developing websites for individuals, startups, small and medium businesses, and enterprises"
            />
            <meta
                name="keywords"
                content="javascript, typescript, react js, next js, express js, node js, mongodb, mern stack developer, web development, website development, web developer, website developer"
            />

            <meta name="google-site-verification" content="sZPmFgCCG9yDDjVqCsdembcfkOLDihLkjCWdXkxnEVI" />
            <meta name="msvalidate.01" content="100EE9C6C0FC17AF45101A46F9363D0C" />
            <meta name="p:domain_verify" content="c55db76c3a2ff1b5533315270d4676b3" />

            {/* Open Graph Tags (for Facebook) */}
            <meta property="og:site_name" content="Dani Maulana" />
            <meta property="og:url" content="https://danfolio.vercel.app/" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Dani Maulana (@dnm17_), a full stack web developer" />
            <meta
                property="og:description"
                content="#MernStack #FullStack #WebsiteDevelopment - Developing websites for individuals, startups, small and medium businesses, and enterprises"
            />
            <meta
                property="og:image"
                content="https://res.cloudinary.com/dkmf4t55r/image/upload/v1693567142/Og-Images/devhasibulislam.png"
            />

            {/* Article Publisher Metadata */}
            <meta property="article:publisher" content="https://www.linkedin.com/in/devhasibulislam/" />

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@dnm17_" />
            <meta name="twitter:title" content="Dani Maulana (@dnm17_), a full stack web developer" />
            <meta
                name="twitter:description"
                content="#MernStack #FullStack #WebsiteDevelopment - Developing websites for individuals, startups, small and medium businesses, and enterprises"
            />
            <meta
                name="twitter:image"
                content="https://res.cloudinary.com/dkmf4t55r/image/upload/v1693567142/Og-Images/devhasibulislam.png"
            />

            {/* Pinterest Tags */}
            <meta name="pinterest-rich-pin" content="true" />
            <meta name="pinterest:title" content="Dani Maulana (@dnm17_), a full stack web developer" />
            <meta
                name="pinterest:description"
                content="#MernStack #FullStack #WebsiteDevelopment - Developing websites for individuals, startups, small and medium businesses, and enterprises"
            />
            <meta
                name="pinterest:image"
                content="https://res.cloudinary.com/dkmf4t55r/image/upload/v1693567142/Og-Images/devhasibulislam.png"
            />
        </>
    )
}

export default Meta
