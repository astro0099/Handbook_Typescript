export function escapeHtml(text: string) {
    return text.replace(/</g, "&lt;");
}

export function strrep(text: string, count: number) {
    let s = "";
    for (let i = 0; i < count; i++) {
        s += text;
    }
    return s;
}
