module.exports = {
    content: [
        './layouts/**/*.html.twig',
        './themes/**/layouts/**/*.html.twig',
    ],
    theme: {
        container: {
            screens: {
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
            }
        },
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            primary: '#131A25',
            secondary: '#1F2A3C',
            color: '#4C6EF2',
            colorHover: '#4962C2',
            gris: '#7A8089',
            white: '#FFFFFF',
        }
    },
}