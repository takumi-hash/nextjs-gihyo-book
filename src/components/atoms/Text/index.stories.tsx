import { ComponentMeta, ComponentStory } from "@storybook/react";
import Text from "./index";

export default {
  title: "Atom/Text",
  argType: {
    variant: {
      options: [
        "extraSmall",
        "small",
        "medium",
        "mediumLarge",
        "large",
        "extraLarge",
      ],
      control: { type: "select" },
      defaultValue: "medium",
      description: "テキストバリアント",
      table: {
        type: {
          summary: "extraSmall, small, medium, mediumLarge, large, extraLarge",
        },
        defaultValue: { summary: "medium" },
      },
    },
  },
  children: {
    control: { type: "text" },
    description: "テキスト",
    table: {
      type: { summary: "string" },
    },
  },
  fontWeight: {
    control: { type: "text" },
    description: "フォントの太さ",
    table: {
      type: { summary: "string" },
    },
  },
  lineHeight: {
    control: { type: "text" },
    description: "行の高さ",
    table: {
      type: { summary: "string" },
    },
  },
  color: {
    control: { type: "color" },
    description: "テキストの色",
    table: {
      type: { summary: "string" },
    },
  },
  backgroundColor: {
    control: { type: "color" },
    description: "背景色",
    table: {
      type: { summary: "string" },
    },
  },
  m: {
    control: { type: "number" },
    description: "マージン",
    table: {
      type: { summary: "number" },
    },
  },
  mt: {
    control: { type: "number" },
    description: "マージントップ",
    table: {
      type: { summary: "number" },
    },
  },
  mr: {
    control: { type: "number" },
    description: "マージンライト",
    table: {
      type: { summary: "number" },
    },
  },
  mb: {
    control: { type: "number" },
    description: "マージンボトム",
    table: {
      type: { summary: "number" },
    },
  },
  ml: {
    control: { type: "number" },
    description: "マージンレフト",
    table: {
      type: { summary: "number" },
    },
  },
  p: {
    control: { type: "number" },
    description: "パディング",
    table: {
      type: { summary: "number" },
    },
  },
  pt: {
    control: { type: "number" },
    description: "パディングトップ",
    table: {
      type: { summary: "number" },
    },
  },
  pr: {
    control: { type: "number" },
    description: "パディングライト",
    table: {
      type: { summary: "number" },
    },
  },
  pb: {
    control: { type: "number" },
    description: "パディングボトム",
    table: {
      type: { summary: "number" },
    },
  },
  pl: {
    control: { type: "number" },
    description: "パディングレフト",
    table: {
      type: { summary: "number" },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

const longText = `ヘッケはこれらのL-函数が全複素平面へ有理型接続を持ち、指標が自明であるときには s = 1 でオーダー 1 である極を持ち、それ以外では解析的であることを証明した。原始ヘッケ指標（原始ディリクレ指標に同じ方法である modulus に相対的に定義された）に対し、ヘッケは、これらのL-函数が指標の L-函数の函数等式を満たし、L-函数の複素共役指標であることを示した。 主イデアル上の座と、無限での座を含む全ての例外有限集合の上で 1 である単円の上への写像を取ることで、イデール類群の指標 ψ を考える。すると、ψ はイデアル群 IS の指標 χ を生成し、イデアル群は S 上に入らない素イデアル上の自由アーベル群となる。[2] S に入らない各々の素イデアル p の統一された元 π を取り、各々の p を、p の中では π であり、そうでない場合は 1 であるようなイデールのクラスへ写すことにより、IS からイデアル類への写像 Π を定義することができる。χ を Π と ψ の合成とすると、χ はイデアル群上の指標としてうまく定義できる。`;

export const ExtraSmall = Template.bind({});
ExtraSmall.args = { variant: "extraSmall", children: longText };

export const Small = Template.bind({});
Small.args = { variant: "small", children: longText };

export const Medium = Template.bind({});
Medium.args = { variant: "medium", children: longText };

export const MediumLarge = Template.bind({});
MediumLarge.args = { variant: "mediumLarge", children: longText };

export const Large = Template.bind({});
Large.args = { variant: "large", children: longText };

export const ExtraLarge = Template.bind({});
ExtraLarge.args = { variant: "extraLarge", children: longText };
