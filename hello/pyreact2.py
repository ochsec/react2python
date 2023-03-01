React = None
ReactDOM = None
document = None
# Map React Javascript objects to Python identifiers
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