// default
export const enUS = {
  /*
  props: {
    MuiBreadcrumbs: {
      expandText: 'Show path',
    },
    MuiTablePagination: {
      backIconButtonText: 'Previous page',
      labelRowsPerPage: 'Rows per page:',
      labelDisplayedRows: ({ from, to, count }) =>
  `${from}-${to} of ${count !== -1 ? count : `more than ${to}`}`,
      nextIconButtonText: 'Next page',
    },
    MuiRating: {
      getLabelText: value => `${value} Star${value !== 1 ? 's' : ''}`,
      emptyLabelText: 'Empty',
    },
    MuiAutocomplete: {
      clearText: 'Clear',
      closeText: 'Close',
      loadingText: 'Loading…',
      noOptionsText: 'No options',
      openText: 'Open',
    },
    MuiAlert: {
      closeText: 'Close',
    },
    MuiPagination: {
      'aria-label': 'Pagination navigation',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return `${selected ? '' : 'Go to '}page ${page}`;
        }
        if (type === 'first') {
          return 'Go to first page';
        }
        if (type === 'last') {
          return 'Go to last page';
        }
        if (type === 'next') {
          return 'Go to next page';
        }
        if (type === 'previous') {
          return 'Go to previous page';
        }
        return undefined;
      },
    },
  },
*/
};

// default
export const arEG = {
  props: {
    MuiBreadcrumbs: {
      expandText: 'أظهر المسار',
    },
    MuiTablePagination: {
      backIconButtonText: 'الصفحة السابقة',
      labelRowsPerPage: 'العدد في الصفحة:',
      labelDisplayedRows: ({ from, to, count }) =>
        `${from}-${to} من ${count !== -1 ? count : `أكثر من ${to}`}`,
      nextIconButtonText: 'الصفحة التالية',
    },
    MuiRating: {
      getLabelText: (value) => `${value} Star${value !== 1 ? 's' : ''}`,
      emptyLabelText: 'Empty',
    },
    MuiAutocomplete: {
      clearText: 'إمسح',
      closeText: 'إغلاق',
      loadingText: 'تحميل',
      noOptionsText: 'لا يوجد',
      openText: 'إفتح',
    },
    MuiAlert: {
      closeText: 'إغلاق',
    },
    MuiPagination: {
      'aria-label': 'Pagination navigation',
      getItemAriaLabel: (type, page, selected) => {
        if (type === 'page') {
          return `${selected ? '' : 'إذهب إلي '}صفحة ${page}`;
        }
        if (type === 'first') {
          return 'إذهب إلي الصفحة الأولى';
        }
        if (type === 'last') {
          return 'إذهب إلي الصفحة الأخيرة';
        }
        if (type === 'next') {
          return 'إذهب إلي الصفحة التالية';
        }
        if (type === 'previous') {
          return 'إذهب إلي الصفحة السابقة';
        }
        return undefined;
      },
    },
  },
};
