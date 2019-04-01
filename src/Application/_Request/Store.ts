/// <amd-module name="Application/_Request/Store" />
import { IStore } from "Application/_Interface/IStore";

/**
 * Класс, реализующий интерфейс {@link Core/Request/IStore},
 * предназначенный для работы с localStorage и SessionStorage
 * @class
 * @name Application/_Env/Browser/Store
 * @implements Application/_Interface/IStore
 * @author Санников К.А.
 */
export default class Store implements IStore {
    private __storage: Storage;
    constructor(storageType: Storage) {
        this.__storage = storageType;
    }

    get(key: string) {
        try {
            return this.__storage.getItem(key);
        } catch (err) {
            // ignore
        }
    }

    set(key: string, data: string) {
        try {
            this.__storage.setItem(key, data);
            return true;
        } catch (err) {
            // ignore
            return false;
        }
    }

    remove(key: string) {
        try {
            this.__storage.removeItem(key);
        } catch (err) {
            // ignore
        }
    }

    getKeys() {
        try {
            return Object.keys(this.__storage);
        } catch (err) {
            return []
        }
    }

    toObject() {
        try {
            return {
                ...this.__storage
            }
        } catch (err) {
            return {}
        }
    }
}
