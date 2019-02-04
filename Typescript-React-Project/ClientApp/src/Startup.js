import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Layout } from './ui/pages/shared/Layout';
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.Run = function () {
        this.RenderApp(this.appRootId);
    };
    /**
     * アプリケーションをレンダリングします
     * @param renderDestinationId アプリケーションレンダリング先ID
     */
    Startup.RenderApp = function (renderDestinationId) {
        ReactDOM.render(React.createElement(Layout, null), document.getElementById(renderDestinationId));
    };
    Startup.appRootId = 'app';
    return Startup;
}());
export { Startup };
//# sourceMappingURL=Startup.js.map