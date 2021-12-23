import React from 'react';
import { usePrefixCls } from '@gio-design/utils';
import classNames from 'classnames';
import { isString } from 'lodash/fp';
import { CardMetaProps } from './interfaces';

const CardMeta = React.forwardRef<HTMLDivElement, CardMetaProps>(
  ({ image = '', title, description, action, className, ...resetProps }, ref) => {
    const prefixCls = usePrefixCls('card-meta');

    const renderImage = () => {
      if (isString(image)) return image ? <img src={image} className={`${prefixCls}-image`} alt="" /> : null;
      return React.cloneElement(image, { className: classNames(`${prefixCls}-image`, image.props.className) });
    };

    const renderOption = (opt: React.ReactNode, type: 'title' | 'description') =>
      opt && React.cloneElement(<div />, { title: isString(opt) ? opt : '', className: `${prefixCls}-${type}` }, opt);

    const renderDetail = () =>
      (title || description) && (
        <div className={`${prefixCls}-detail`}>
          {renderOption(title, 'title')}
          {renderOption(description, 'description')}
        </div>
      );

    const renderAction = () => (title || description || image) && <div className={`${prefixCls}-action`}>{action}</div>;

    return title || description || image ? (
      <div className={classNames(className, prefixCls)} ref={ref} {...resetProps}>
        {renderImage()}
        {renderDetail()}
        {renderAction()}
      </div>
    ) : null;
  }
);
export default CardMeta;
