import axios, { AxiosResponse } from 'axios';
import { GetStaticProps } from 'next';
import React from 'react';
import { MoviesItem } from '../interfaces/movies.interface';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
  return (
    <>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<MoviesProps> = async () => {
  let { data: movies }: AxiosResponse<MoviesItem[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN + '/movie/get/all');
  let { data: topmovies }: AxiosResponse<MoviesItem[]> = await axios.get(process.env.NEXT_PUBLIC_DOMAIN + '/movie/get/all/pop');
  return {
    props: {
      movies: movies.reverse(),
      topmovies: topmovies.reverse().slice(-10).reverse()
    }
  };
};

interface MoviesProps extends Record<string, unknown> {
  movies: MoviesItem[];
  topmovies: MoviesItem[];
}