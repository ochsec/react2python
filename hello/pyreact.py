# __pragma__('skip')
require = None
document = None
# __pragma__('noskip')
# Load the React and ReactDOM libraries into the local namespace
React = require('react')
ReactDOM = require('react-dom')
# Map React objects to Python identifiers
createElement = React.createElement
useState = React.useState

def render(root_component, props, container):
    """Loads main react component into DOM"""
    def main():
        ReactDOM.render(
            createElement(root_component, props),
            document.getElementById(container)
        )

    document.addEventListener('DOMContentLoaded', main)