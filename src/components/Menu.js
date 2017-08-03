import React from 'react';
import classnames from 'classnames';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { SubLevelLink } from './SubLevelLink';
import { fetchMenu } from 'actions/menu';

class Menu extends React.Component {
    constructor(props) {
        super(props);

        this.renderMenu = this.renderMenu.bind(this);
        this.renderSubLevelItems = this.renderSubLevelItems.bind(this);
        this.isActive = this.isActive.bind(this);
    }

    componentDidMount() {
        this.props.fetchMenu();
    }

    isActive(menuItem) {
        return menuItem === location.hash;
    }

    renderMenu(menuItems) {
        return (
            <ul>
                {menuItems.map((item) => (
                    <li key={item.label}>
                        {item.items && item.items.length === 0 &&
                            <Link
                                to={(item.url).slice(2)}
                                className={classnames({ active: this.isActive(item.url) })}
                            >
                                {item.label}
                            </Link>
                        }

                        {item.items && item.items.length > 0 && [
                            <SubLevelLink
                                key={`link-${item.label}`}
                                label={item.label}
                                url={item.url}
                                handleShadow={this.props.handleShadow}
                            />,
                            this.renderSubLevelItems(item.items, item.label),
                        ]}
                    </li>
                ))}
            </ul>
        );
    }

    renderSubLevelItems(menuItems, key) {
        return (
            <ul key={key}>
                {menuItems.map((item) => (
                    <li key={item.label}>
                        <Link
                            to={(item.url).slice(2)}
                            className={classnames({ active: this.isActive(item.url) })}
                        >
                            {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className={classnames(this.props.className)}>
                {this.renderMenu(this.props.items)}

                {this.props.mobile &&
                    <div className="copyright">&copy; 2014 Huge. All rights reserved.</div>
                }
            </div>
        );
    }
}

Menu.propTypes = {
    handleShadow: PropTypes.func,
    fetchMenu: PropTypes.func,
    items: PropTypes.array,
    className: PropTypes.string,
    mobile: PropTypes.bool,
};

const mapStateToProps = ({ menu }) => ({ ...menu });

export default connect(mapStateToProps, { fetchMenu })(Menu);
