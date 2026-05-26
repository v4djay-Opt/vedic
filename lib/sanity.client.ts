import { createClient } from '@sanity/client';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const isSanityConfigured = Boolean(projectId && dataset);

export const client = createClient({
  projectId: projectId || 'placeholder',
  dataset: dataset || 'production',
  useCdn: true,
  apiVersion: '2024-01-01',
});
