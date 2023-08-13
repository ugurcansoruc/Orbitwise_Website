'use client';

import {useTranslations} from 'next-intl';
import {useEffect} from 'react';

type Props = {
  error: Error;
  reset(): void;
};

export default function Error({error, reset}: Props) {
  useEffect(() => {
    console.error(error);
    console.log(reset);
  }, [error]);

  return (
<></>
  );
}
