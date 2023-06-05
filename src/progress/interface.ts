export enum ProgressStatus {
  active,
  success,
  exception,
}

export type ProgressType = 'circle' | 'default';

export interface ProgressProps {
  /**
   * 百分比
   */
  percent?: number;
  /**
   * 可选 `active`, `success`, `expection`
   */
  status?: keyof typeof ProgressStatus | string;
  /**
   * 内容模版函数
   */
  format?: (percent?: number) => React.ReactNode;
  /**
   * 进度条尺寸
   * @default default
   */
  size?: 'small' | 'default' | 'large';
  customizePrefixCls?: string;
  /**
   * 动画特效开关
   * @default false
   */
  animation?: boolean;
  className?: string;
  style?: React.CSSProperties;
  showInfo?: boolean;
  type?: ProgressType;
  strokeLinecap?: React.SVGProps<SVGElement>['strokeLinecap'];
}
