export async function get() {
    const response = await fetch('https://raw.githubusercontent.com/shaaaaaQ/chrome-ext/main/src/krunker/style.css');
    const css = await response.text();
    return {
        body: css
    };
}