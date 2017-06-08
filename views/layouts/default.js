const React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
        <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>{this.props.title}</title>
        </head>
        <body>
        <div id="app-container">
          {this.props.children}
        </div>
        </body>
        </html>
    );
  }
}

module.exports = DefaultLayout;