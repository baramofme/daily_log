module.exports = {
    siteConfig: {
        title: "City Pig's notes"
    },
    theme: "./theme/dist",
    permalinks: {
        post: "/blog/:slug",
        page: "/:slug"
    },
    themeConfig: {
        nav: [
            {
                text: "View.js",
                link: "/categories/viewjs"
            },
            {
                text: "Javascript",
                link: "/categories/javascript"
            },
            {
                text: "CSS",
                link: "/categories/css"
            }
        ]
    },
    plugins: [
        {
            resolve: "saber-plugin-query-posts",
            options: {
                paginationOptions: {
                    perPage: 2
                }
            }
        },
        {
            resolve: "saber-plugin-search"
        },
        {
            resolve: "saber-plugin-prismjs"
        },
        {
            resolve: "saber-plugin-critical"
        }
    ]
};
