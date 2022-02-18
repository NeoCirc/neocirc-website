export function isMobile() {
    const isMobile = window.innerWidth;
    const className = isMobile < 900 ? 'mobile-style' : 'desktop-style'
    return className;
}