import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Test/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    label: "이메일",
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "이메일",
    placeholder: "이메일",
  },
};

export const WithValue: Story = {
  args: {
    label: "이메일",
    value: "example@example.com",
    onChange: () => {},
  },
};

export const Error: Story = {
  args: {
    label: "비밀번호",
    error: true,
    helperText: "비밀번호가 틀렸습니다.",
  },
};

export const Disabled: Story = {
  args: {
    label: "이메일",
    disabled: true,
    value: "readonly@example.com",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "전화번호",
    helperText: "'-' 없이 입력해주세요",
  },
};
