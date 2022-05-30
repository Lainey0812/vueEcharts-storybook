import { createApp } from 'vue'
import App from './App.vue'
import ECharts from 'vue-echarts'
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

use([
    CanvasRenderer,
    LineChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
    AxisPointerComponent,
    GridComponent,
  ]);

const app = createApp(App)

app.component('v-chart', ECharts)
app.mount('#app')
