const path = require("path");
module.exports = {
    title: "일용직 자판 노동자 일지",
    description: "1세계 바깥에 존재하는 누군가의 기록 장소",
    // theme: 'modern-blog',
    theme: require.resolve("./theme"),
    head: [
        ['link', {rel: 'icon', href: '/faviconCustom.ico'}],
        ['link', {rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css'}],
        ['link', {href: 'https://fonts.googleapis.com/icon?family=Material+Icons', rel: 'stylesheet'}]
    ],
    summaryLength: 500,
    themeConfig: {
        summary: true,
        nav: [
            {
                text: "홈",
                link: "/",
                icon: "el-icon-house"
            },
            {
                text: 'JS',
                link: "/category/javascript/",
                icon: "el-icon-folder"
            },
            {
                text: "프로젝트들",
                link: "/projects/",
                icon: "el-icon-folder"
            }
        ],
        sitemap: true, // enables sitemap plugin
        hostname: "", // required for sitemap
        disqus: "disquswebsiteshortname", // if you want to incorporate Disqus for comments replace this value else just get rid of it
        socialShare: true, // enables social share
        socialShareNetworks: ["facebook", "twitter"], // required for social share plugin
        googleAnalytics: "", // Google Analytics tracking ID
        about: {
            fullName: "Jihoon Yi",
            bio: "I am a typing worker in Seoul, Korea.",
            image: "./avatar_400x400.jpg"
        },
        footer: {
            contact: [
                {
                    type: "github",
                    link: "#"
                },
                {
                    type: "instagram",
                    link: "#"
                },
                {
                    type: "linkedin",
                    link: "#"
                },
                {
                    type: "twitter",
                    link: "#"
                }
            ],
            copyright: [
                {
                    text: "Privacy Policy",
                    link: "https://policies.google.com/privacy?hl=en-US"
                },
                {
                    text: "MIT Licensed | Copyright © 2018-present Vue.js",
                    link: ""
                }
            ]
        }
    },
    markdown: {
        extendMarkdown: md => {
            md.set({html: true});
            md.use(require('markdown-it-katex'));
            md.use(require('markdown-it-plantuml'));
            md.use(require('markdown-it-admonition'));
            md.use(require('markdown-it-task-lists'));
        }
    }
}