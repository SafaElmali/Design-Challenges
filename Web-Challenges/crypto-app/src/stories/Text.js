import React from 'react';
import PropTypes from 'prop-types';
import './heading.css';

/**
 * Primary UI component for Heading
 */
export const Text = ({ tag, label, fontSize, ...props }) => {
    return (
        <p
            style={fontSize && { fontSize }}
            className={["storybook-text", `storybook-button--${tag}`].join(' ')}
            {...props}
        >
            {label}
        </p>
    )
}

Text.propTypes = {
    /**
      * What tag to use?
      */
    tag: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5',]),
    /**
     * Text contents
     */
    label: PropTypes.string.isRequired,
}

Text.defaultProps = {
    tag: 'h1',
};
