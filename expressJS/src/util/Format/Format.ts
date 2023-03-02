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
