import React, { useState } from 'react';
import classnames from 'classnames';
import { usePrefixCls } from '@gio-design/utils';
import _ from 'lodash';
import {
  CheckCircleFilled,
  WarningCircleFilled,
  InfoCircleFilled,
  CloseCircleFilled,
  CloseOutlined,
} from '@gio-design/icons';
import { AlertProps } from './interfaces';

export const Alert: React.FC<AlertProps> = (props: AlertProps) => {
  const prefixCls = usePrefixCls('alert-new');
  const [alertStatus, setAlertStatus] = useState(true);
  const { message, description, closeable, showIcon = false, onClose, icon, type, style } = props;

  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircleFilled />;
      case 'warning':
        return <WarningCircleFilled />;
      case 'error':
        return <CloseCircleFilled />;
      case 'info':
        return <InfoCircleFilled />;
      default:
        return icon || <InfoCircleFilled />;
    }
  };

  const closeAlert = () => {
    setAlertStatus(false);
    onClose?.();
  };

  return alertStatus ? (
    <div style={style} className={classnames(prefixCls, `${prefixCls}-${type}`)}>
      {showIcon && <div className={classnames(`${prefixCls}-icon`)}>{getIcon()}</div>}
      <div className={classnames(`${prefixCls}-content`)}>
        {message && <div className={classnames(`${prefixCls}-content-title`)}>{message}</div>}
        {message && description && <div className={classnames(`${prefixCls}-content-gap`)} />}
        {description && <div className={classnames(`${prefixCls}-content-description`)}>{description}</div>}
      </div>
      {closeable && (
        <div
          className={classnames(`${prefixCls}-closeIcon`)}
          onClick={closeAlert}
          role="button"
          tabIndex={0}
          onKeyPress={_.noop}
        >
          <CloseOutlined />
        </div>
      )}
    </div>
  ) : null;
};

export default Alert;
