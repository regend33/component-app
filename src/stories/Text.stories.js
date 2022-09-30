import Text from "../components/Text";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    // fontStyle
    size: { control: "number" },
    strong: { control: "boolean" },
    underline: { control: "boolean" },
    strikethrough: { control: "boolean" },
    color: { control: "color" },
    mark: { control: "boolean" },
    code: { control: "boolean" },

    // Tag
    block: { control: "boolean" },
    paragraph: { control: "boolean" },
  },
};

export const Default = (args) => {
  return (
    <>
      <Text {...args}>Text1</Text>
    </>
  );
};

export const Size = (args) => {
  return (
    <>
      <Text {...args} size="small">
        small
      </Text>
      <Text {...args} size="normal">
        normal
      </Text>
      <Text {...args} size="large">
        large
      </Text>
      <Text {...args} size={24}>
        Custom
      </Text>
    </>
  );
};
