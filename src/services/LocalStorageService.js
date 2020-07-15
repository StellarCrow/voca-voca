class LocalStorageService {
    getItem(key) {
        const itemString = localStorage.getItem(key);
        try {
            return JSON.parse(itemString);
        } catch (error) {
            return null;
        }
    }

    setItem(key, value) {
        try {
            const stringValue = JSON.stringify(value);
            localStorage.setItem(key, stringValue);
        } catch (error) {
            return null;
        }
    }
}

export default new LocalStorageService();
