const withPlugins = require("next-compose-plugins");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
});

const { nextI18NextRewrites } = require("next-i18next/rewrites");

const localeSubpaths = {
    tr: "tr",
    en: "en",
};

const config = {
    rewrites: async () => nextI18NextRewrites(localeSubpaths),
    images: {
        domains: ["homepages.cae.wisc.edu"],
    },
    publicRuntimeConfig: {
        localeSubpaths,
    },
};

module.exports = withPlugins([[withBundleAnalyzer]], config);
