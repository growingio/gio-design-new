import { Key } from 'react';

export default {
  stringText: '字符串类型',
  intText: '数值类型',
  doubleText: '数值类型',
  dateText: '日期类型',
  booleanText: '布尔类型',
  listText: '列表类型',
  allText: '全部',
  searchPlaceholder: '搜索属性名称',
  placeholderText: '选择属性',
  recent: '最近使用',
  page: '页面',
  device: '设备',
  element: '无埋点事件属性',
  tag: '用户标签',
  preset: (text?: Key) => `预置${text}`,
  custom: (text?: Key) => `自定义${text}`,
  dimensionTable: '维度表',
  eventVariables: '事件变量',
  virtualProperties: '虚拟属性',
  eventProperties: '事件属性',
  accessProperties: '访问属性',
  userProperties: '用户属性',
};
