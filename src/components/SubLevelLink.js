import React from 'react';
import { PropTypes } from 'prop-types';
import ReactDOM from 'react-dom';
import classnames from 'classnames';

export class SubLevelLink extends React.Component {
    constructor(props) {
        super(props);

        this.state = { isOpen: false };

        this.handleClick = this.handleClick.bind(this);
        this.isActive = this.isActive.bind(this);
    }

    componentDidMount() {
        this.obj = ReactDOM.findDOMNode(this).parentElement;
        this.box = this.obj.querySelector('ul');
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClick());
    }

    isActive(menuItem) {
        return location.hash.includes(menuItem);
    }

    handleClick({ target }) {
        if (this.box.contains(target)) {
            return;
        }

        if (!this.state.isOpen) {
            document.addEventListener('click', this.handleClick);
        } else {
            document.removeEventListener('click', this.handleClick);
        }

        this.setState({ isOpen: !this.state.isOpen }, () => {
            if (!this.props.handleShadow) {
                return false;
            }

            return this.props.handleShadow();
        });
    }

    render() {
        return (
            <a
                onClick={this.handleClick}
                className={classnames({ active: this.isActive(this.props.url), open: this.state.isOpen })}
            >
                {this.props.label}

                <span className={classnames('chevron', { invert: this.state.isOpen })}></span>
            </a>
        );
    }
}

SubLevelLink.propTypes = {
    url: PropTypes.string,
    label: PropTypes.string,
    handleShadow: PropTypes.func,
};
