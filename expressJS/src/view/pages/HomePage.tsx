import React from 'ts-rssr';
import { LogItemType } from '../../util/MemoStorage/MemoStorage';
import Logs from '../components/Logs';
import sass from 'sass';
import fs from 'node:fs';
import path from 'node:path';

const highlightCss = fs.readFileSync(
    path.join(__dirname, '../../../node_modules/highlight.js/styles/vs2015.css'),
    {
        encoding: 'utf-8',
    },
);

const css = sass.compile(path.join(__dirname, '../../../client/HomePage.scss')).css;
const jsClient = fs.readFileSync(path.join(__dirname, '../../../client/HomePage.client.js'), {
    encoding: 'utf-8',
});

export interface IHomePageProps {
    logs: LogItemType[];
}

export default function HomePage(props: IHomePageProps) {
    return (
        <html lang='en'>
            <head>
                <meta charSet='UTF-8' />
                <meta http-equiv='X-UA-Compatible' content='IE=edge' />
                <meta name='viewport' content='width=device-width, initial-scale=1.0' />
                <title>Home</title>
                <link
                    rel='stylesheet'
                    type='text/css'
                    href='https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css'
                />
                <style>{css}</style>

                <style>{highlightCss}</style>
            </head>
            <body>
                <div className='container'>
                    <div className='list-btn'>
                        <button id='btn-refresh-token' type='button'>
                            Refresh Token
                        </button>
                    </div>
                    <main>
                        <Logs logs={props.logs} />
                    </main>
                </div>
                <script src='https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js'></script>
                <script>{jsClient}</script>
            </body>
        </html>
    );
}
