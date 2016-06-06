class Cookie {
    static set = (key: string, value: string): void => {
        window.document.cookie = key + "=" + value;
    }
    static get = (key: string): string => {
        let result = null;
        let cookieName = key + "=";
        const allcookies = document.cookie;
        const position = allcookies.indexOf(cookieName);
        if (position !== -1) {
            const startIndex = position + cookieName.length;
            let endIndex = allcookies.indexOf(";", startIndex);
            if (endIndex === -1) {
                endIndex = allcookies.length;
            }
            result = decodeURIComponent(
                allcookies.substring(startIndex, endIndex));
        }
        return result;
    }
}
export default Cookie;
