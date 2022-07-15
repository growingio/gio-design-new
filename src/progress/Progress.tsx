import React from 'react';
import { SuccessFilled, ErrorFilled } from '@gio-design/icons';
import classNames from 'classnames';
import { usePrefixCls } from '@gio-design/utils';
import { ProgressProps, ProgressStatus } from './interface';

const defaultFormat = (percent?: number) => `${Math.round((percent || 0) * 100) / 100}%`;
const statusIcons = [null, SuccessFilled, ErrorFilled];

const getStatusIcon = (status: string, prefix: string) => {
  const Icon = statusIcons[ProgressStatus[status as keyof typeof ProgressStatus]];
  return Icon && <Icon className={`${prefix}-${status}-icon`} />;
};
export function validProgress(progress: number | undefined) {
  if (!progress || progress < 0) {
    return 0;
  }
  if (progress > 100) {
    return 100;
  }
  return progress;
}

const Progress: React.FC<ProgressProps> = ({
  percent = 0,
  status = 'active',
  format = defaultFormat,
  customizePrefixCls,
  animation,
  className,
  style,
  showInfo = true,
  size = 'normal',
  strokeWidth,
  ...rest
}: ProgressProps) => {
  const prefixCls = usePrefixCls('progress', customizePrefixCls);

  const strokeStyle = {
    width: `${validProgress(percent)}%`,
    height: strokeWidth || (size === 'small' ? 8 : 16),
  };

  return (
    <div data-testid="progress" className={prefixCls} style={style} {...rest}>
      <div className={classNames(`${prefixCls}-trail`, `${prefixCls}-${size}`, className)}>
        <div
          style={strokeStyle}
          className={classNames(`${prefixCls}-stroke`, `${prefixCls}-${status}`, {
            [`${prefixCls}-animate`]: animation,
          })}
        />
      </div>
      {showInfo ? (
        <div className={`${prefixCls}-info`}>
          <span className={`${prefixCls}-text`}>{format(percent)}</span>
          <span className={`${prefixCls}-icon`}>{getStatusIcon(status, prefixCls)}</span>
        </div>
      ) : null}
    </div>
  );
};

export default Progress;
