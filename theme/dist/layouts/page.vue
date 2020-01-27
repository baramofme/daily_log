<template>
    <BaseLayout :page="page">
        <slot/>
    </BaseLayout>
</template>

<script>
    import BaseLayout from '../components/BaseLayout';
    import transition from '../components/PageTransition';

    export default {
        props: ['page'],
        components: {
            BaseLayout: BaseLayout
        },
        transition: transition,
        mounted() {
            if (window.MathJax) {
                window.MathJax.Hub.Config({
                    tex2jax: {
                        inlineMath: [['$', '$'], ["\\(", "\\)"]],
                        displayMath: [['$$', '$$'], ["\\[", "\\]"]],
                        processEscapes: true,
                        processEnvironments: true
                    },
                    displayAlign: 'center',
                    'HTML-CSS': {
                        fonts: ["TeX"],
                        styles: {'.MathJax_Display': {margin: 0}},
                        linebreaks: {automatic: true}
                    }
                })
                window.MathJax.Hub.Queue([
                    'Typeset',
                    window.MathJax.Hub
                ])
            }
        },
    };
</script>
