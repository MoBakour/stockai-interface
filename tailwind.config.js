/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                theme: {
                    main: "#003CD7",
                    primary: "#6C00D7",
                    background: "#242424",
                },
            },
        },
    },
    plugins: [],
};
