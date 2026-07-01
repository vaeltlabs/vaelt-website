'use client';

import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

export default function CalEmbed() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: 'discovery' });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  return (
    <div style={{ width: '100%', maxWidth: '960px', aspectRatio: '4/3', overflow: 'hidden' }}>
      <Cal
        namespace="discovery"
        calLink="vaelt/discovery"
        style={{ width: '100%', height: '100%', overflow: 'scroll' }}
        config={{ layout: 'month_view', useSlotsViewOnSmallScreen: 'true' }}
      />
    </div>
  );
}
