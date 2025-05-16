/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                background: {
                    light: "#f4f4f5",
                    dark: "#1a1a1a",
                },
                text: {
                    light: "#1a1a1a",
                    dark: "#f5f5f5",
                },
            },
        },
    },
    plugins: [],
};
