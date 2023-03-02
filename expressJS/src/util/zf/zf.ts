export function isNullOrUndefined(v: unknown): v is null | undefined {
    return v === null || v === undefined;
}

export function isCommonObject<T>(v: unknown): v is CommonObject<T> {
    if (typeof v !== 'object') return false;

    if (v === null) return false;

    if (Array.isArray(v)) return false;

    return true;
}

export function isInRange(v: number, start: number, stop: number) {
    return v >= start && v < stop;
}
