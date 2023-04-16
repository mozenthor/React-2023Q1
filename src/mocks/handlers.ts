import { rest } from 'msw';
import { dataItem } from './dataItem';

const apiUrl = 'https://api.unsplash.com';

export const handlers = [
  rest.get(`${apiUrl}/search/photos`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(dataItem));
  }),
];
