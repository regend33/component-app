import Toggle from "../components/Toggle";

export default {
  title: "Components/Toggle",
  component: Toggle,
  argTypes: {
    disabled: { control: "boolean" },
  },
};

export const Default = (args) => {
  return <Toggle {...args} />;
};
