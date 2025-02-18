import has from 'lodash/has';
import { sub } from 'date-fns';
import momentTZ from 'moment-timezone';
import moment from 'moment';
import { TimeMode } from './interfaces';
import { QUICK_MAPPING } from './constant';

momentTZ.tz.setDefault(localStorage.getItem('timezone') || Intl.DateTimeFormat().resolvedOptions().timeZone);

export const parseTimeMode = (
  timeRange: string | undefined,
  options: {
    value: string;
    label: string;
  }[]
) => {
  if (!timeRange) {
    return undefined;
  }
  if (options?.find((option) => option.value === timeRange)) {
    return TimeMode.Quick;
  }
  if (has(QUICK_MAPPING, timeRange)) {
    return TimeMode.Quick;
  }
  const items = timeRange.split(':');
  switch (items[0]) {
    case 'since':
      return TimeMode.Since;
    case 'since-lt-today':
      return TimeMode.Since;
    case 'abs':
      return TimeMode.Absolute;
    case 'day':
      return TimeMode.Relative;
    default:
      return undefined;
  }
};

export const startOfTodayInTimezone = () =>
  new Date(
    momentTZ
      .tz(
        `${momentTZ
          .tz(new Date(), localStorage.getItem('timezone') || Intl.DateTimeFormat().resolvedOptions().timeZone)
          .format()
          .substring(0, 10)} 00:00:00`,
        localStorage.getItem('timezone') || Intl.DateTimeFormat().resolvedOptions().timeZone
      )
      .format()
  );
export const startOfYesterdayInTimezone = () => sub(startOfTodayInTimezone(), { days: 1 });

export const parseStartAndEndDate = (timeRange: string | undefined): [Date | undefined, Date | undefined] => {
  if (!timeRange || timeRange.split(':').length !== 2) {
    return [undefined, undefined];
  }
  const items = timeRange.split(':');
  const times = items[1].split(',').map((str) => parseInt(str, 10));
  const today = startOfTodayInTimezone();
  const yesterday = startOfYesterdayInTimezone();
  if (items[0] === 'since') {
    return [new Date(times[0]), today];
  }
  if (items[0] === 'since-lt-today') {
    return [new Date(times[0]), yesterday];
  }
  if (items[0] === 'abs') {
    return [new Date(times[0]), new Date(times[1])];
  }
  if (items[0] === 'day') {
    return [sub(today, { days: times[0] - 1 }), sub(today, { days: times[1] })];
  }
  return [undefined, undefined];
};

export const parseQuickDate = (timeRange: string | undefined): [Date | undefined, Date | undefined] => {
  if (!timeRange || timeRange.split(':').length !== 2) {
    return [undefined, undefined];
  }
  const items = timeRange.split(':');
  const times = items[1].split(',').map((str) => parseInt(str, 10));
  const today = startOfTodayInTimezone();

  if (items[0] === 'day') {
    return [sub(today, { days: times[0] - 1 }), sub(today, { days: times[1] })];
  }
  if (items[0] === 'week-lt-today') {
    return [
      moment()
        .subtract(times[0] - 1, 'week')
        .startOf('isoWeek')
        .toDate(),
      String(times[1]) === '0'
        ? moment().subtract(1, 'day').endOf('day').toDate()
        : moment()
            .subtract(times[0] - 1, 'week')
            .endOf('isoWeek')
            .toDate(),
    ];
  }
  if (items[0] === 'month-lt-today') {
    return [
      moment()
        .subtract(times[0] - 1, 'month')
        .startOf('month')
        .toDate(),
      String(times[1]) === '0'
        ? moment().subtract(1, 'day').endOf('day').toDate()
        : moment()
            .subtract(times[0] - 1, 'month')
            .endOf('month')
            .toDate(),
    ];
  }
  if (items[0] === 'quarter-lt-today') {
    return [
      moment()
        .subtract(times[0] - 1, 'quarter')
        .startOf('quarter')
        .toDate(),
      String(times[1]) === '0'
        ? moment().subtract(1, 'day').endOf('day').toDate()
        : moment()
            .subtract(times[0] - 1, 'quarter')
            .endOf('quarter')
            .toDate(),
    ];
  }
  if (items[0] === 'year-lt-today') {
    return [
      moment()
        .subtract(times[0] - 1, 'year')
        .startOf('year')
        .toDate(),
      String(times[1]) === '0'
        ? moment().subtract(1, 'day').endOf('day').toDate()
        : moment()
            .subtract(times[0] - 1, 'year')
            .endOf('year')
            .toDate(),
    ];
  }
  if (items[0] === 'week') {
    return [
      moment()
        .subtract(times[0] - 1, 'week')
        .startOf('isoWeek')
        .toDate(),
      String(times[1]) === '0'
        ? moment().endOf('day').toDate()
        : moment()
            .subtract(times[0] - 1, 'week')
            .endOf('isoWeek')
            .toDate(),
    ];
  }
  if (items[0] === 'month') {
    return [
      moment()
        .subtract(times[0] - 1, 'month')
        .startOf('month')
        .toDate(),
      String(times[1]) === '0'
        ? moment().endOf('day').toDate()
        : moment()
            .subtract(times[0] - 1, 'month')
            .endOf('month')
            .toDate(),
    ];
  }
  if (items[0] === 'quarter') {
    return [
      moment()
        .subtract(times[0] - 1, 'quarter')
        .startOf('quarter')
        .toDate(),
      String(times[1]) === '0'
        ? moment().endOf('day').toDate()
        : moment()
            .subtract(times[0] - 1, 'quarter')
            .endOf('quarter')
            .toDate(),
    ];
  }
  if (items[0] === 'year') {
    return [
      moment()
        .subtract(times[0] - 1, 'year')
        .startOf('year')
        .toDate(),
      String(times[1]) === '0'
        ? moment().endOf('day').toDate()
        : moment()
            .subtract(times[0] - 1, 'year')
            .endOf('year')
            .toDate(),
    ];
  }
  return [undefined, undefined];
};

export const parseFixedMode = (timeRange: string | undefined) => {
  if (!timeRange || timeRange.split(':').length !== 2) {
    return false;
  }
  const items = timeRange.split(':');
  const times = items[1].split(',');
  if (items[0] === 'since') {
    if (times.length === 1 || times[1] === '0') {
      return 'today';
    }
    return 'yesterday';
  }
  if (items[0] === 'day' && times[1] === '1') {
    return 'yesterday';
  }
  return false;
};

export default {
  parseTimeMode,
  parseStartAndEndDate,
};
