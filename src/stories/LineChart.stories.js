// import MyButton from './Button.vue';
import LineChart from "./line-chart.vue";

// console.log(LineChart)
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: "Example/Line",
  component: LineChart,

  argTypes: {
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
      control: {type: 'color'},
      defaultValue:"rgba(16, 142, 243, 0)",
      type: { required: true }
    },
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
  title: "今日测试",
  lineLabel: false,
  yName: "%",
};
