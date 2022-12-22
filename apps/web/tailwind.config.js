/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                primary: '#ff385c',
                'bg-dark': '#222222',
                'bg-light': '#f7f7f7',
                'bg-light-dimmed': '#dddddd',
                'bg-light-weak': '#ffffffe6',
                'text-dimmed': '#717171',
            },
        },
    },
    plugins: [],
}
