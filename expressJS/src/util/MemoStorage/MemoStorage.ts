export type LogItemContent = string | number | CommonObject;

export interface LogItemType {
    label: string;
    contents: LogItemContent;
    createdAt: Date;
}
// Bearer + token
class MemoStorage {
    private static _instance: MemoStorage | undefined = undefined;
    private _logs: LogItemType[] = [];

    public static get instance() {
        if (this._instance === undefined) {
            this._instance = new MemoStorage();
        }

        return this._instance;
    }

    protected constructor() {}

    private cleanOldLogs() {
        while (this._logs.length > __env.MAX_LOG_LENGTH) {
            this._logs.shift();
        }
    }

    public addLog = (label: string, v: LogItemContent) => {
        this._logs.push({
            createdAt: new Date(),
            label,
            contents: v,
        });
        this.cleanOldLogs();
    };

    public getLogs() {
        const results = [...this._logs];
        results.reverse();
        return results;
    }
}

export default MemoStorage;
