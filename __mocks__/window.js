// __mocks__/window.js
const originalWindow = global.window

const mockedWindow = {
	...originalWindow,
	open: jest.fn(),
}

global.window = mockedWindow
