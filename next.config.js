const {PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD, PHASE_PRODUCTION_SERVER} = require('next/constants');
const path = require('path');

module.exports = (phase, {defaultConfig}) => {
    const config = {
        reactStrictMode: true,
        pageExtensions: [
            'page.tsx', 'page.ts', 'page.js', 'page.jsx'
        ],
        sassOptions: {
            includePaths: [
                path.join(__dirname, 'styles')
            ]
        },
        serverRuntimeConfig: {
            // @see https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration
            // place server-side secrets here (AWS, etc. etc)
        },
        publicRuntimeConfig: {
            // place public keys here (Google Analytics, etc. etc.)
        }
    }
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            ...config,
            compress: false,
            env: {
                production: false
            }
        }
    } else if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
            ...config,
            poweredByHeader: false,
            env: {
                production: true
            }
        }
    } else if (phase === PHASE_PRODUCTION_BUILD) {
        return {
            ...config,
            poweredByHeader: false,
            env: {
                production: true
            }
        }
    }
}