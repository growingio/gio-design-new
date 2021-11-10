import type { Locale } from '@gio-design/utils';
import datePickerLocale from '../static-date-picker/locales/zh-CN';
import dateRangePickerLocale from '../static-date-range-picker/locales/zh-CN';
import dateRangeSelectorLocale from '../date-range-selector/locales/zh-CN';
import dateSelectorLocale from '../date-selector/locales/zh-CN';
import emptyLocale from '../empty/locales/zh-CN';
import listPickerLocale from '../legacy/list-picker/locales/zh-CN';
import modalLocale from '../legacy/modal/locales/zh-CN';
import timePickerLocale from '../time-picker/locales/zh-CN';
import timeSelectorLocale from '../time-selector/locales/zh-CN';
import searchBarLocale from '../legacy/search-bar/locales/zh-CN';
import cascaderLocale from '../legacy/cascader/locales/zh-CN';
import paginationLocale from '../legacy/pagination/locales/zh-CN';
import tableLocale from '../legacy/table/locales/zh-CN';
import uploadLocale from '../upload/locales/zh-CN';
import staticPastTimePickerLocale from '../static-past-time-picker/locales/zh-CN';

export const locale: Locale = {
  code: 'zh-CN',
  DatePicker: {
    ...datePickerLocale,
  },
  DateRangePicker: {
    ...dateRangePickerLocale,
  },
  DateRangeSelector: {
    ...dateRangeSelectorLocale,
  },
  DateSelector: {
    ...dateSelectorLocale,
  },
  Empty: {
    ...emptyLocale,
  },
  ListPicker: {
    ...listPickerLocale,
  },
  Modal: {
    ...modalLocale,
  },
  TimePicker: {
    ...timePickerLocale,
  },
  TimeSelector: {
    ...timeSelectorLocale,
  },
  SearchBar: {
    ...searchBarLocale,
  },
  Cascader: {
    ...cascaderLocale,
  },
  Pagination: {
    ...paginationLocale,
  },
  Table: {
    ...tableLocale,
  },
  Upload: {
    ...uploadLocale,
  },
  StaticPastTimePicker: {
    ...staticPastTimePickerLocale,
  },
};

export default locale;
