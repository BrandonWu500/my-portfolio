import useSWR from 'swr';

import { client } from '@/sanity/lib/client';
import { AboutType } from '@/src/types';

async function getAbout(): Promise<AboutType> {
  const query = `
  *[_type == 'about'][0] {
    experience,
      "resumeUrl": resume.asset->url
  }
  `;

  const about = await client.fetch(query);

  return about;
}

export const useAbout = () => {
  const {
    data: aboutData,
    error,
    isLoading,
  } = useSWR('about', getAbout, {
    revalidateOnMount: true,
    revalidateOnReconnect: true,
    revalidateOnFocus: true,
    refreshInterval: 60,
  });

  return {
    aboutData,
    error,
    isLoading,
  };
};
