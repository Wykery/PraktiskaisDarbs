function encodeBase64(text) {
    return btoa(unescape(encodeURIComponent(text)));
}

function decodeBase64(base64String) {
    try {
        return decodeURIComponent(escape(atob(base64String)));
    } catch (e) {
        console.error("Invalid Base64:", e);
        return null;
    }
}

// Примеры использования:
console.log(encodeBase64("Привет мир"));
console.log(decodeBase64(encodeBase64("Привет мир")));
