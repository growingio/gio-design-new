import React from 'react';

export interface SelectionProps {
  className?: string;
  value?: string | string[];
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
export interface SelectionItemProps extends SelectionProps {
  title?: string;
  onChange?: (value: string) => void;
}

export interface ListProps {
  className?: string;
  style?: React.CSSProperties;
  options?: OptionProps[];
  children?: React.ReactNode | React.ReactNode[];
  value?: string | number | (string | number)[];
  disabled?: boolean;
  prefix?: (option?: OptionProps) => string | React.ReactNode;
  suffix?: (option?: OptionProps) => string | React.ReactNode;
  isMultiple?: boolean;
  isCascader?: boolean;
  collapse?: number;
  onChange?: (value: string | number | (string | number)[]) => void;
  selectedParent?: string[];
}

export interface DragListProps extends Omit<ListProps, 'model' | 'onChange' | 'value' | 'children'> {
  options: OptionProps[];
  onChange?: (value: OptionProps[]) => void;
}

export interface OptionProps {
  label: string | React.ReactNode;
  value: string | number;
  disabled?: boolean;
  disabledTooltip?: string;
}

export interface ItemProps extends Omit<BaseItemProps, 'contentRender'> {
  selectedParent?: string[];
  selectValue?: string | number | (string | number)[];
}
export interface DragItemProps extends ItemProps {
  onMoved?: (dragIndex: number, hoverIndex: number) => void;
  index: number;
}
export interface BaseItemProps extends Omit<OptionProps, 'label'> {
  className?: string;
  style?: React.CSSProperties;
  label?: string | React.ReactNode;
  contentRender?: (element: React.ReactNode) => React.ReactNode | Element;
  children?: React.ReactNode;
  selected?: boolean;
  prefix?: string | React.ReactNode;
  suffix?: string | React.ReactNode;
  onClick?: (value: string | number) => void;
}
