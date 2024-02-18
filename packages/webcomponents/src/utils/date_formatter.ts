/**
 * @license
 * Copyright (c) Peculiar Ventures, LLC.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh';
import { l10n } from './l10n';

dayjs.extend(relativeTime);

export const dateShort = (date: string | number | Date) => (
  new Date(date).toLocaleString()
);

export const dateDiff = (
  dateStart: string | number | Date,
  dateEnd: string | number | Date,
) => {
  if (!dateStart || !dateEnd) {
    return '';
  }

  dayjs.locale(l10n.getLocale());
  const start = dayjs(dateStart);
  const end = dayjs(dateEnd);

  return start.to(end, true);
};
