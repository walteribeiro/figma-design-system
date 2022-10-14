import { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  args: {
    children: 'Hello, world!'
  },
  argTypes: {
    size: {
      defaultValue: 'md',
      description: 'The size of the heading',      
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      }
    },
    children: {
      description: 'The node that contains the heading',      
    }
  }
} as Meta<HeadingProps>

export const Default: StoryObj = {}

export const Small: StoryObj<HeadingProps> = {
  args: {
    size: 'sm'
  }
}

export const Large: StoryObj<HeadingProps> = {
  args: {
    size: 'lg'
  }
}

export const CustomComponent: StoryObj<HeadingProps> = {
  args: {
    asChild: true,
    children: (
      <h1>Heading</h1>
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