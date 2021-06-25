import {forOwn, camelCase, snakeCase, head} from 'lodash';

export default class TransformerUtils {

    static fetch(param) {
        if (param && Array.isArray(param)) {
            return this.fetchCollection(param);
        } else if (param && typeof param === 'object') {
            return this.fetchObject(param);
        }
        return param
    }

    static fetchCollection(param) {
        return param.map(item => this.fetch(item));
    }

    static fetchObject(param) {
        const data = {};

        forOwn(param, (value, key) => {
            data[camelCase(key)] = this.fetch(value);
        });
        return data;
    }

    static send(param) {
        if (param && Array.isArray(param)) {
            return this.sendCollection(param);
        } else if (param && typeof param === 'object') {
            return this.sendObject(param);
        }
        return param
    }

    static sendCollection(param) {
        return param.map(item => this.send(item));
    }

    static sendObject(param) {
        const data = {};

        forOwn(param, (value, key) => {
            data[snakeCase(key)] = this.send(value);
        });
        return data;
    }

    static resetValidationFields({ errors, replace = false, searchStr = '', replaceStr = '' }) {
        const data = {};
        forOwn(errors, (value, key) => {
            let index = '';
            if (replace) {
                index = camelCase(key.replace(searchStr, replaceStr));
            } else {
                index = camelCase(key);
            }
            data[index] = head(value);
        });
        return data;
    }
}
