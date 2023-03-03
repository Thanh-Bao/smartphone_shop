import prettier from 'prettier';

const defaultConfig: prettier.Options = {
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    printWidth: 100,
    jsxSingleQuote: true,
    bracketSpacing: true,
    bracketSameLine: false,
    arrowParens: 'always',
    trailingComma: 'all',
    endOfLine: 'crlf',
};

export function json(subject: string) {
    return prettier.format(subject, {
        ...defaultConfig,
        parser: 'json',
    });
}

export const formatDateTime = (timestamp: number) => {
    const dateFormat = new Date(timestamp * 1000);
    const result =
        dateFormat.getHours() +
        'h:' +
        dateFormat.getMinutes() +
        "':" +
        dateFormat.getSeconds() +
        's' +
        ' - ' +
        dateFormat.getDate() +
        '/' +
        (dateFormat.getMonth() + 1) +
        '/' +
        dateFormat.getFullYear();
    return result;
};
