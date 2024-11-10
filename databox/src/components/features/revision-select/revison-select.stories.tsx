import { RevisionSelect } from "./revison-select";
import { Revision } from "@/lib/crud/revision";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof RevisionSelect> = {
  component: RevisionSelect,
};
export default meta;

type Story = StoryObj<typeof RevisionSelect>;

export const Primary: Story = {
  render: (args) => {
    const [selected, setSelected] = useState<Revision>(args.selected);
    return (
      <RevisionSelect {...args} selected={selected} onChange={setSelected} />
    );
  },
  args: {
    selected: {
      Id: "1",
      RevisionNumber: 1,
      RevisionDate: "2021-01-01",
      Description: "Initial Revision",
    },
    revisions: [
      {
        Id: "1",
        RevisionNumber: 1,
        RevisionDate: "2021-01-01",
        Description: "Initial Revision",
      },
      {
        Id: "2",
        RevisionNumber: 2,
        RevisionDate: "2021-01-02",
        Description: "Second Revision",
      },
    ],
  },
};
