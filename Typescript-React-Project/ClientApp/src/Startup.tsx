import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Layout } from './ui/pages/shared/Layout';

export class Startup {
    private static appRootId: string = 'app';
    public static Run(): void {
        this.RenderApp(this.appRootId);
    }

    /**
     * アプリケーションをレンダリングします
     * @param renderDestinationId アプリケーションレンダリング先ID
     */
    private static RenderApp(renderDestinationId: string): void {
        ReactDOM.render(<Layout />, document.getElementById(renderDestinationId));
    }
}