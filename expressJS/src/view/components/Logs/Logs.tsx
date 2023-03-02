import React from 'ts-rssr';
import { LogItemType } from '../../../util/MemoStorage/MemoStorage';
import LogItem from './LogItem';

export interface ILogsProps {
    logs: LogItemType[];
}

export default function Logs(props: ILogsProps) {
    const liElements = props.logs.map((item) => {
        return <LogItem logItem={item} />;
    });

    return <ul>{liElements}</ul>;
}
