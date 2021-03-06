module.exports = {
    compact: true,
    presets: [
        [
            '@babel/env',
            {
                modules: false,
                useBuiltIns: 'entry',
                corejs: 3.6,
                targets: {
                    node: 'current',
                },
            },
        ],
        [
            '@babel/react',
            {
                runtime: 'automatic',
            },
        ],
        '@babel/typescript',
    ],
    plugins: [
        '@babel/proposal-object-rest-spread',
        '@babel/proposal-class-properties',
        '@babel/proposal-optional-chaining',
        '@babel/syntax-dynamic-import',
        '@loadable/babel-plugin',
        'macros',
    ],
    env: {
        test: {
            plugins: [
                '@babel/transform-modules-commonjs',
                '@babel/syntax-dynamic-import',
                '@babel/plugin-transform-runtime',
            ],
        },
        tooling: {
            presets: [
                [
                    '@babel/env',
                    {
                        modules: 'commonjs',
                    },
                ],
                '@babel/typescript',
            ],
        },
    },
};
