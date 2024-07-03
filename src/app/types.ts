import { Display } from "electron";

// will be accessible globally in project
declare global {
    // extends the normal Window object
    interface Window {
        APP: App;
    }
}

export interface UserSettings {
    tiny_png_api_key: string;
}

interface Versions {
    node: string;
    chrome: string;
    electron: string;
}

type DisplaysFunction = () => Promise<Array<Display>>;
type DisplayFunction = () => Promise<Display>;
type PromiseStringFunction = () => Promise<string>;
type SetUserSettingsFunction = (settings: UserSettings) => Promise<string>;
interface API {
    displays: DisplaysFunction;
    primaryDisplay: DisplayFunction;
    getUserSettings: PromiseStringFunction;
    setUserSettings: SetUserSettingsFunction;
}

export interface App {
    versions: Versions;
    API: API;
}