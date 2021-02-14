import { forwardRef } from 'react';

import Head from 'next/head';

// eslint-disable-next-line react/display-name
const Page = forwardRef(({ children, title = '', ...rest }, ref) => {
  return (
    <div ref={ref} {...rest}>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </div>
  );
});

export default Page;
