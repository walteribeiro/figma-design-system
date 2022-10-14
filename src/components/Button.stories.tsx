import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from "./Button";

export default {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Hello, world!'
  },
  argTypes: {
    size: {
      defaultValue: 'md',
      description: 'The size of the text',      
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      }
    },
    children: {
      description: 'The node that contains the text',      
    }
  }
} as Meta<ButtonProps>

export const Default: StoryObj = {}
