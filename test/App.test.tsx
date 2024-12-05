import { expect, test } from 'vitest'
import { render } from 'vitest-browser-react'
import App from '../src/App.tsx'

test('check Everise UAM exists', async () => {
  const { getByText } = render(<App />)
  await expect.element(getByText('Everise UAM!')).toBeInTheDocument()
})
