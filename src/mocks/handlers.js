import { rest } from 'msw';

const handlers = [
    rest.post(
        '/api/test',
        async (req, res, ctx) => res(
            ctx.json({ test: 'hello' })
        ),
    ),
];

export { handlers };
