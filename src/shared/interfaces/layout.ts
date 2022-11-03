import { NextPage } from 'next';

export type CustomNextPage = NextPage & { useAuthLayout?: boolean };
