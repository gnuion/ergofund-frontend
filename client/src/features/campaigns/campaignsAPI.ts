import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const CAMPAIGNS_API_KEY = 'api_key_goes_here';

interface Campaign {
  id: string;
  name: string;
  image: {
    url: string;
  };
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8000/campaigns',
    prepareHeaders(headers) {
      headers.set('x-api-key', CAMPAIGNS_API_KEY);
      return headers;
    },
  }),
  endpoints(builder) {
    return {
      fetchCampaigns: builder.query<Campaign[], number | void>({
        query(limit = 10) {
          return `/`; // campaigns?limit=${limit}
        },
      }),
    };
  },
});

export const { useFetchCampaignsQuery } = apiSlice;
