import React from 'ts-rssr';
import Format from '../../../util/Format';
import { LogItemType } from '../../../util/MemoStorage/MemoStorage';
import codeHighlighter from 'highlight.js/lib/common';

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
            <div className='time'>
                {props.logItem.createdAt.toLocaleString('vi-VN', {
                    hour12: false,
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit',
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric',
                })}
            </div>
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
