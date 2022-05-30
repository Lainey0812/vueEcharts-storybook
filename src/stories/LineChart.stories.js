// import MyButton from './Button.vue';
import { Secondary } from "./Button.stories";
import LineChart from "./line-chart.vue";

// console.log(LineChart)
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/Line",
  component: LineChart,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    lineLabel: {
      control: "boolean",
      default: false,
    },
    lineLabelPos: {
      control: { type: "select" },
      options: ["top", "left", "right", "bottom", "inside"],
    },
    xLabel: {
      type: { name: "array", required: true },
      defaultValue: [2013, 2014, 2015, 2016],
    },
    value: {
      type: { name: "array", required: true },
      defaultValue: [10, 11, 12, 13, 22],
    },
    colorList: {
      control: { type: "color" },
      defaultValue: "rgba(16, 142, 243, 0)",
      type: { required: true },
    },
    areaStyle: {
      control: { type: "color" },
    },
    yName: {
      type:{name: "string"},
      description: "the unit/name of yAxis"
    }
  },
};

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args, argTypes) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { LineChart },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    console.log(args, argTypes);
    return { args };
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<line-chart v-bind="args"/>',
});

export const Single = Template.bind({});
Single.args = {
  title: "single-line chart",
  yName: "%",
};

export const MultiLine = Template.bind({});
MultiLine.args ={
  title: "multi-Line",
  // value: [{name:first, data:[13, 16, 17, 18,22]},{name: second, data:[ tom, jerry, lily, amy]}]
}
