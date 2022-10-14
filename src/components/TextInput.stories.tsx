import { Meta, StoryObj } from '@storybook/react'
import { TextInput, TextInputRootProps } from "./TextInput";
import { Envelope } from 'phosphor-react';

export default {
  title: 'Components/TextInput',
  component: TextInput.Root,
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input type="email" placeholder="Enter your e-mail address" />
    ],
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      }
    }
  }
} as Meta<TextInputRootProps>

export const Default: StoryObj = {}

export const WithoutIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: <TextInput.Input type="email" placeholder="Enter your e-mail address" />
  }
}
