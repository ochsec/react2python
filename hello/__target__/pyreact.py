# __pragma__('skip')
window = None
document = None
# __pragma__('noskip')
# Create local references to the React and ReactDOM Javascript libraries
React = window.React
ReactDOM = window.ReactDOM
# Remove the React and ReactDOM JavaScript libraries from the global namespace
# __pragma__('js', 'delete window.React;')
# __pragma__('js', 'delete window.ReactDOM;')
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