import '@testing-library/jest-dom/extend-expect';
import { setupServer } from 'msw/node';
import { handlers } from './mocks/handlers';

const server = setupServer(...handlers);

beforeEach(() => {
	jest.useFakeTimers();
});
beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => {
	server.resetHandlers();
	jest.runOnlyPendingTimers();
	jest.useRealTimers();
});
