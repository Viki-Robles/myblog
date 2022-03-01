---
title: Fetching Data with React Query and TypeScript
author: 'Vicky Vasilopoulou'
icon: ✅
---

We are gonna explore a way of fetching data using React query and TypeScript.
You can use [Transform](https://transform.tools/json-schema-to-typescript) tool that transforms JSON files to TypeScript and much more.
That tool is quite handy when you have nested data structures.

1. You need to create your graphql client that will wrap your entire application.

```ts
import { GraphQLClient } from 'graphql-request';

const endpoint = `ADD YOUR ENDPOINT HERE`;
export const graphQlClient = new GraphQLClient(endpoint);
```

2. Then you need to create a `useGqlQuery.ts` file.

```ts
import { QueryKey, useQuery, UseQueryResult } from 'react-query';
import { graphQlClient } from '../../graphql/client';

export const useGqlQuery = <ResponseData = unknown, Variables = unknown>(
  queryKey: QueryKey,
  query: string,
  variables?: Variables,
): UseQueryResult<ResponseData, Error> => {
  return useQuery(queryKey, async () => {
    try {
      const response = await graphQlClient.request(query, variables);
      return response;
    } catch (error) {
      console.log(`🚀 ~ useGqlQuery ~ error`, error);
    }
  });
};
```

3. Lets say we have a list of doctors that we want to fetch.
4. First we need to create the types of the data that we get as a model.

```ts
export interface DoctorsDataModel {
  doctors: Doctor[];
}

export interface Doctor {
  first_name: string;
  last_name: string;
  doctor_id: string;
}
```

5. We can create our custom hook that will fetch our data.

```ts
export const useFetchDoctors = () => {
  const getDoctorsData = useGqlQuery<DoctorsDataModel>('getDoctorsData', GET_ALL_DOCTORS);

  const doctorsData = useMemo(() => getDoctorsData?.data?.doctors, [getDoctorsData]);
  return {
    doctorsData,
  };
};
```

6. Then on the component you want to use this data you can bring it simply as:

```ts
const { doctorsData } = useFetchDoctors();
```
