var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
var Layout = /** @class */ (function (_super) {
    __extends(Layout, _super);
    function Layout(props) {
        var _this = _super.call(this, props) || this;
        _this.props = props;
        return _this;
    }
    Layout.prototype.render = function () {
        return (React.createElement("div", { classname: "shopping-list" },
            React.createElement("h1", null,
                "shopping list for ",
                this.props.name),
            React.createElement("ul", null,
                React.createElement("li", null, "instagram"),
                React.createElement("li", null, "whatsapp"),
                React.createElement("li", null, "oculus"))));
    };
    return Layout;
}(React.Component));
export { Layout };
//# sourceMappingURL=Layout.js.map