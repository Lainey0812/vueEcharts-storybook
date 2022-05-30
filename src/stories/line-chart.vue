<template>
  <div class="chart">
    <v-chart
      class="vueChart"
      :option="option"
      width="100"
      height="100"
    ></v-chart>
  </div>
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  AxisPointerComponent,
  GridComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, defineComponent, reactive } from "vue";

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  AxisPointerComponent,
  GridComponent,
]);
export default defineComponent({
  name: "LineChart",
  props: {
    value: Array,
    title: String,
    xLabel: Array,
    lineLabel: Boolean,
    colorList: String,
    rotate: Number,
    lineLabelPos: String,
    yName: String,
  },
  components: {
    VChart,
  },
  // provide: {
  //   [THEME_KEY]: "dark",
  // },

  setup(props) {
    const option = ref({
      title: {
        text: props.title,
        left: "center",
      },
      xAxis: {
        type: "category",
        data: props.xLabel,
        axisLabel: {
          fontSize: props.xLabelSize,
          rotate: props.rotate,
        },
      },
      yAxis: {
        name: props.yName,
        type: "value",
      },
      series: [
        {
          type: "line",
          data: props.value,
        },
      ],
      lineStyle: {
        color: props.colorList[0],
      },
      label: {
        show: props.lineLabel,
        position: props.lineLabelPos,
        // color: "black",
      },
    });

    return { option };
  },
});
</script>
<style scoped>
.chart {
  height: 420px;
  width: 900px;
}
/* .vueChart {
  height: 400px;
} */
</style>

