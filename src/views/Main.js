import React from 'react';
import { PropTypes } from 'prop-types';
import classnames from 'classnames';
import Menu from 'components/Menu';

export class Main extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showShadow: false,
            showMobileMenu: false,
        };

        this.handleShadow = this.handleShadow.bind(this);
        this.handleMenu = this.handleMenu.bind(this);
    }

    handleShadow() {
        this.setState({ showShadow: !this.state.showShadow });
    }

    handleMenu() {
        this.setState({ showMobileMenu: !this.state.showMobileMenu });
    }

    render() {
        return (
            <div className="main">
                {(this.state.showShadow || this.state.showMobileMenu) &&
                    <div className="shadow"></div>
                }

                <section className="navbar">
                    <div className={classnames('brand', { open: this.state.showMobileMenu })}></div>

                    <Menu className="menu" handleShadow={this.handleShadow} />

                    <div
                        className={classnames('mobile-menu-toggle', { open: this.state.showMobileMenu })}
                        onClick={this.handleMenu}
                    ></div>
                </section>

                <section className="content-wrapper">
                    <Menu
                        className={classnames('mobile-menu', { open: this.state.showMobileMenu })}
                        mobile
                    />

                    <div className="content">
                        <section className="banner">
                            <div className="image"></div>

                            <div className="title">
                                Get paid for <br />
                                giving a shit.
                            </div>
                        </section>

                        <section className="content-inner">
                            {this.props.children && React.cloneElement(this.props.children)}
                        </section>
                    </div>
                </section>
            </div>
        );
    }
}

Main.propTypes = {
    children: PropTypes.object,
};
