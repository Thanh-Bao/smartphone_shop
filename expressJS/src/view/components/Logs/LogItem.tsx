import React from 'ts-rssr';
import Format from '../../../util/Format';
import { LogItemType } from '../../../util/MemoStorage/MemoStorage';
import codeHighlighter from 'highlight.js/lib/common';
import { formatDateTime } from '../../../util/Format/Format';

export interface ILogsItemProps {
    logItem: LogItemType;
}

export default function LogItem(props: ILogsItemProps) {
    let content: string = '';

    switch (typeof props.logItem.contents) {
        case 'string': {
            content = props.logItem.contents;
            break;
        }
        case 'number': {
            content = props.logItem.contents.toString();
            break;
        }
        case 'object': {
            const strJson = Format.json(JSON.stringify(props.logItem.contents));
            try {
                content = codeHighlighter.highlight(strJson, {
                    language: 'json',
                    ignoreIllegals: true,
                }).value;
            } catch (e) {
                console.log(e);
                content = strJson;
            }
            break;
        }
        default: {
            content = String(props.logItem.contents);
            break;
        }
    }

    return (
        <li className='log-item'>
            <div className='time'>{formatDateTime(props.logItem.createdAt)}</div>
            <div className='content'>
                <h3 className='label'>{props.logItem.label}</h3>
                <div className='code'>
                    <pre>
                        <code className='language-json'>{content}</code>
                    </pre>
                </div>
            </div>
        </li>
    );
}
