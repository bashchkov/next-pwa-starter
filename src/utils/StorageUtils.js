export default class StorageUtils {

    static instance = process.env.REACT_APP_STORAGE_TYPE === 'local' ? localStorage : sessionStorage;

    static get = key => JSON.parse(this.instance.getItem(key));
    static set = (key, value) => this.instance.setItem(key, JSON.stringify(value));
    static remove = key => this.instance.removeItem(key);
    static clear = () => this.instance.clear();

    static setAuthToken = (token) => this.set('AUTH_TOKEN', token);
    static getAuthToken = () => this.get('AUTH_TOKEN');
    static removeAuthToken = () => this.remove('AUTH_TOKEN');
}