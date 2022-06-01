let plugin = require('tailwindcss/plugin')

module.exports = {
    content: ["./src/pug/**/*.{pug,js}" ],
    theme: {
        screens: {
            sm: '480px',
            md: '768px',
            lg: '976px',
            xl: '1200px',
        },
        fontFamily: {
            'sans': ["'Roboto', sans-serif"]
        },
        fontSize: {
            xs: ['8px', '14px'],
            base: ['10px', '16px'],
            sm: ['12px', '18px'],
            md: ['14px', '20px'],
            lg: ['16px', '22px'],
            xl: ['20px', '26px'],
            sl: ['24px', '32px'],
            xxl: ['30px', '38px'],
            xsl: ['36px', '46px'],
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',

            black: '#000',
            white: '#fff',

            red: {
                200: '#ffcccc',
            },
            orange: {
                '100': '#ffe6d4',
                '200': '#ffcda9',
                '300': '#ffb47e',
                '400': '#ff9b53',
                '500': '#ff8228',
                '600': '#dc6e1e',
                '700': '#ba5a14',
                '800': '#97450a',
                '900': '#743100',
            },
            blue: {
                '100': '#365aff',
                '200': '#2f51e9',
                '300': '#2947d3',
                '400': '#223ebd',
                '500': '#1b34a8',
                '600': '#142b92',
                '700': '#0e217c',
                '800': '#071866',
                '900': '#000e50',
            },
            green: {
                '100': '#daeeae',
                '200': '#c7e58a',
                '300': '#b5db65',
                '400': '#a2d241',
                '500': '#90c81d',
                '600': '#74a117',
                '700': '#587a12',
                '800': '#3c530c',
                '900': '#202c06',
            },
            pink: {
                '100': '#ffd4e1',
                '200': '#ffaac3',
                '300': '#ff7fa5',
                '400': '#ff5587',
                '500': '#ff2a69',
                '600': '#dd2058',
                '700': '#bb1546',
                '800': '#980b35',
                '900': '#760023',
            },
            yellow: {
                '100': '#fef2d5',
                '200': '#fde5ab',
                '300': '#fbd780',
                '400': '#faca56',
                '500': '#f9bd2c',
                '600': '#d7a222',
                '700': '#b48718',
                '800': '#926b0d',
                '900': '#6f5003',
            },
            gray: {
                '100': '#f7f7f7',
                '200': '#eeeeee',
                '300': '#d6d6d6',
                '400': '#bfbfbf',
                '500': '#a7a7a7',
                '600': '#8f8f8f',
                '700': '#777777',
                '800': '#606060',
                '900': '#484848',
            }
        },
        extend: {
            dropShadow: {
                'modal': '0 -10px 6px rgb(0 0 0 / 0.12)',
            }
        },
    },
    plugins: [
        plugin(function ({addVariant}) {
            addVariant('forth', '&:nth-child(4n - 2)')
        }),
        require('@tailwindcss/forms'),
        require('tailwind-css-variables')(
            {
                colors: 'color',
                screens: false,
                fontFamily: false,
                fontSize: false,
                fontWeight: false,
                lineHeight: false,
                letterSpacing: false,
                backgroundSize: false,
                borderWidth: false,
                borderRadius: false,
                width: false,
                height: false,
                minWidth: false,
                minHeight: false,
                maxWidth: false,
                maxHeight: false,
                padding: false,
                margin: false,
                boxShadow: false,
                zIndex: false,
                opacity: false,
            },
            {
                // options
            }
        )
    ],
}
