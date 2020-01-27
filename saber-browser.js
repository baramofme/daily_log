import "prismjs/themes/prism.css";
import "saber-highlight-css/default.css";
// @ points to current working directory
import "@/css/global.css";

export default ({rootOptions}) => {
    rootOptions.head = () => {
        return {
            link: [
                {
                    href:
                        "https://fonts.googleapis.com/css?family=Quicksand&amp;subset=latin-ext",
                    rel: "stylesheet"
                }
            ],
            script: [
                {
                    type: "text/javascript",
                    src: "https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-MML-AM_CHTML",
                    async: true
                }
            ]
        };
    };
};
