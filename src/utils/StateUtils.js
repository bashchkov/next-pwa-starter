export default class StateUtils {

    /**
     *
     * @param payload
     * @returns {{nextNumber: (*|null), previousNumber: (*|null), count: number, results: *[]}}
     */
    static list(payload = {}) {
        return {
            count: payload.count || 0,
            nextNumber: payload.nextNumber || null,
            previousNumber: payload.previousNumber || null,
            results: payload.results || []
        }
    }

    /**
     *
     * @param list
     * @param payload
     * @returns {{nextNumber: *, previousNumber: *, count, results}}
     */
    static concatList(list, payload = {}) {
        return {
            count: payload.count,
            nextNumber: payload.nextNumber,
            previousNumber: payload.previousNumber,
            results: list.results.concat(payload.results)
        }
    }

    /**
     *
     * @param list
     * @param payload
     * @returns {{nextNumber: *, previousNumber: *, count: *, results: {}[]}}
     */
    static addBeforeList(list, payload = {}) {
        return {
            count: list.count + 1,
            nextNumber: list.nextNumber,
            previousNumber: list.previousNumber,
            results: [payload].concat(list.results)
        }
    }

    /**
     *
     * @param list
     * @param payload
     * @returns {{nextNumber: *, previousNumber: *, count: *, results}}
     */
    static addAfterList(list, payload = {}) {
        return {
            count: list.count + 1,
            nextNumber: list.nextNumber,
            previousNumber: list.previousNumber,
            results: list.results.push(payload)
        }
    }
}