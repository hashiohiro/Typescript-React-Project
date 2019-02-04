import * as React from 'react';
import * as ReactDOM from 'react-dom';
export class Layout extends React.Component<any, any> {
    constructor(private props: any) {
        super(props);
    }
    render() {
        return (
            <div classname="shopping-list">
                <h1>shopping list for {this.props.name}</h1>
                <ul>
                    <li>instagram</li>
                    <li>whatsapp</li>
                    <li>oculus</li>
                </ul>
            </div>
        );
    }
}