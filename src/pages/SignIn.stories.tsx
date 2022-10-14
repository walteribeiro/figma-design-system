import { Meta, StoryObj } from '@storybook/react'
import { userEvent, waitFor, within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { rest } from 'msw'

import SignIn from './SignIn'

export default {
  title: 'Pages/Sign in',
  component: SignIn,
  args: {},
  parameters: {
    msw: {
      handlers: [
        rest.post('/api/sessions/', (req, res, ctx) => {
          return res(ctx.json({
            message: 'Login successful'
          }))
        })
      ]
    }
  }
} as Meta

export const Default: StoryObj = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(canvas.getByPlaceholderText('Digite seu e-mail'), 'walter@mail.com')
    userEvent.type(canvas.getByPlaceholderText('*********'), '123456')

    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {      
      expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
    })
  }
}
