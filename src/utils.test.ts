import assert from 'node:assert/strict';
import { test } from 'node:test';

import { formatDuration, formatPostDate } from './utils.ts';

const duration = (start: string, end: string): string => formatDuration(new Date(start), new Date(end));

test('formatDuration reports a role that started days ago as less than a month', () => {
  assert.equal(duration('2026-10-01', '2026-10-03'), 'less than a month');
  assert.equal(duration('2026-10-01', '2026-10-01'), 'less than a month');
  assert.equal(duration('2026-10-01', '2026-10-31'), 'less than a month');
});

test('formatDuration uses singular units for exactly one', () => {
  assert.equal(duration('2026-10-01', '2026-11-01'), '1 month');
  assert.equal(duration('2025-10-01', '2026-10-01'), '1 year');
  assert.equal(duration('2025-03-01', '2026-04-01'), '1 year, 1 month');
});

test('formatDuration uses plural units above one', () => {
  assert.equal(duration('2023-07-01', '2024-01-01'), '6 months');
  assert.equal(duration('2024-10-01', '2026-10-01'), '2 years');
  assert.equal(duration('2022-01-01', '2026-10-03'), '4 years, 9 months');
});

test('formatDuration matches the durations already shown on the resume', () => {
  assert.equal(duration('2025-03-01', '2026-10-01'), '1 year, 7 months');
  assert.equal(duration('2024-01-01', '2025-03-01'), '1 year, 2 months');
  assert.equal(duration('2022-01-01', '2023-07-01'), '1 year, 6 months');
  assert.equal(duration('2018-06-01', '2020-07-01'), '2 years, 1 month');
  assert.equal(duration('2017-09-01', '2018-06-01'), '9 months');
});

test('formatDuration drops the partial month at the end', () => {
  assert.equal(duration('2026-01-15', '2026-03-14'), '1 month');
  assert.equal(duration('2026-01-15', '2026-03-15'), '2 months');
});

test('formatDuration ignores the build machine timezone', () => {
  const original = process.env.TZ;
  for (const zone of ['America/New_York', 'UTC', 'Pacific/Auckland']) {
    process.env.TZ = zone;
    assert.equal(duration('2023-07-01', '2024-01-01'), '6 months', zone);
    assert.equal(duration('2026-10-01', '2026-10-31'), 'less than a month', zone);
  }
  process.env.TZ = original;
});

test('formatPostDate formats in UTC', () => {
  assert.equal(formatPostDate(new Date('2026-02-07')), 'February 7, 2026');
});
