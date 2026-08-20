export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: "https://festiny.netlify.app/sitemap.js",
    };
}
