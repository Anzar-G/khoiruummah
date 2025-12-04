/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "brand-purple": "#56357F",
                "brand-green": "#A8CF45",
                "light-gray-1": "#f8fafc",
                "light-gray-2": "#f1f5f9",
                "medium-gray": "#64748b",
                "dark-gray": "#334155",
            },
            fontFamily: {
                "display": ["Inter", "sans-serif"]
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
        },
    },
    plugins: [],
}
