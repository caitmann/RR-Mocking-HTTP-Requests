import App from './App'
import {render, screen, waitFor} from '@testing-library/react'

test("receives GitHub name from GitHub REST API using jest fetch mock", async() => {
    fetch.mockResponseOnce(JSON.stringify({name: "null"}))
    render(<App />)
    const gitHubName = await waitFor(() => screen.getByRole('heading', {level: 2}))
    expect(gitHubName).toHaveTextContent('null')
})

beforeEach(() => {
    fetch.resetMocks();
})

test("button opens GitHub profile page when clicked", async() => {
    fetch.mockResponseOnce(JSON.stringify({html_url: "https://github.com/caitmann"}))
    render(<App />)
    const gitHubUrl = await waitFor(() => screen.getByRole('link'))
    expect(gitHubUrl).toHaveAttribute('href', expect.stringContaining('github.com/caitmann'))
})
