module.exports = (config) => {
    const {module} = process.env;
    config.set({
        frameworks: ["jasmine", "karma-typescript"],
        plugins: [
            require('karma-jasmine'),
            require("karma-typescript"),
            require('karma-chrome-launcher'),
            require('karma-mocha-reporter'),
        ],
        files: [
            './node_modules/jquery/dist/jquery.js',
            './node_modules/bootstrap-slider/dist/bootstrap-slider.js',
            {pattern: `./${module}/src/**/!(index).ts`},
        ],
        preprocessors: {
            "**/*.ts": ["karma-typescript"]
        },
        reporters: ["mocha", "karma-typescript"],
        browsers: ["ChromeHeadless"],
        logLevel: config.LOG_INFO, //config.LOG_DEBUG
        singleRun: true,
        karmaTypescriptConfig: {
            tsconfig: "./tsconfig.spec.json",
            reports: {
                "html": "coverage",
                "text": ""
            }
        }
    })
}
