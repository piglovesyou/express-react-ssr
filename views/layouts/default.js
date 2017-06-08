const React = require('react');

class DefaultLayout extends React.Component {
  render() {
    return (
      <html>
        <head><title>{this.props.title}</title></head>
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