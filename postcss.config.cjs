/**
 * Minimal PostCSS config for Vite + Sass
 * - postcss-import: support `@import` in CSS
 * - postcss-preset-env: modern CSS features + nesting
 * - autoprefixer: vendor prefixes
 * - cssnano: minify for production
 */

module.exports = {
    plugins: [
        require('postcss-import')(),
        require('postcss-preset-env')({
            stage: 2,
            features: {
                'nesting-rules': true,
            },
            autoprefixer: { grid: true },
        }),
        require('autoprefixer')(),
        // cssnano only in production for smaller builds
        ...(process.env.NODE_ENV === 'production'
            ? [require('cssnano')({ preset: 'default' })]
            : []),
    ],
}
