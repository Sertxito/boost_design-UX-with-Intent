# Storybook Component Story Template (CSF)

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  parameters: {
    a11y: {
      disable: false
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Primary action",
    disabled: false
  }
};

export const Disabled: Story = {
  args: {
    children: "Primary action",
    disabled: true
  }
};
```

## Checklist
- [ ] Includes default, hover/focus equivalent showcase, disabled and loading variants.
- [ ] Includes accessibility addon checks.
- [ ] Uses design tokens, not hardcoded values.
