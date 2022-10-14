import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from "./Text";

export default {
  title: 'Components/Text',
  component: Text,
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
} as Meta<TextProps>

export const Default: StoryObj = {}

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm'
  }
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg'
  }
}

export const CustomComponent: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: (
      <p>Paragraph</p>
    )
  },
  argTypes: {
    asChild: {
      table: {
        disable: true,
      }
    },
    children: {
      table: {
        disable: true,
      }
    }
  }
}