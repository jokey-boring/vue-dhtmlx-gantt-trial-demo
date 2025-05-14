<template>
  <div class="container">
    <GanttComponent
      class="left-container"
      :tasks="tasks"
      @task-updated="logTaskUpdate"
      @link-updated="logLinkUpdate"
      @task-selected="selectTask"
    ></GanttComponent>
  </div>
</template>

<script>
import GanttComponent from "./components/GanttComponent.vue";

export default {
  name: "app",
  components: { GanttComponent },
  props: {
    tasks: {
      type: Object,
      default() {
        return {
          data: [
            {
              id: 10000,
              text: "我是项目名",
              start_date: "2025-06-01",
              end_date: "2025-06-12",
              type: "project1",
              // 任务名前缀
              // "WBSName": '0',
              progress: 0.12,
              priority: "中",
            },
            {
              id: 10001,
              text: "任务 1",
              start_date: "2025-04-01",
              end_date: "2025-04-18",
              WBSName: "1",
              progress: 1,
              type: "project2",
              priority: "高",
            },
            {
              id: 10002,
              text: "任务 2",
              start_date: "2025-04-01",
              end_date: "2025-04-18",
              WBSName: "1",
              progress: 1,
              type: "project3",
              priority: "高",
            },
            {
              id: 10003,
              text: "任务 3",
              start_date: "2025-04-01",
              end_date: "2025-04-18",
              WBSName: "1",
              progress: 1,
              type: "project4",
              priority: "高",
            },
            {
              id: 10004,
              text: "任务 4",
              start_date: "2025-04-01",
              end_date: "2025-04-18",
              WBSName: "1",
              progress: 0.5,
              type: "project5",
              priority: "高"
            },
          ],
        };
      },
    },
  },
  data() {
    return {
      selectedTask: null,
      messages: [],
    };
  },
  computed: {
    progressPercentage() {
      let taskProgress = this.selectedTask.progress;
      if (!taskProgress) {
        return "0";
      }
      return `${Math.round(+taskProgress * 100)} %`;
    },
    formattedStartDate() {
      let taskStart = this.selectedTask.start_date;
      return `${taskStart.getFullYear()} / ${
        taskStart.getMonth() + 1
      } / ${taskStart.getDate()}`;
    },
    formattedEndDate() {
      let taskEnd = this.selectedTask.end_date;
      return `${taskEnd.getFullYear()} / ${
        taskEnd.getMonth() + 1
      } / ${taskEnd.getDate()}`;
    },
  },
  methods: {
    selectTask(task) {
      this.selectedTask = task;
    },

    addMessage(message) {
      this.messages.unshift(message);
      if (this.messages.length > 40) {
        this.messages.pop();
      }
    },

    logTaskUpdate(id, mode, task) {
      let text = task && task.text ? ` (${task.text})` : "";
      let message = `Task ${mode}: ${id} ${text}`;
      this.addMessage(message);
    },

    logLinkUpdate(id, mode, link) {
      let message = `Link ${mode}: ${id}`;
      if (link) {
        message += ` ( source: ${link.source}, target: ${link.target} )`;
      }
      this.addMessage(message);
    },
  },
};
</script>

<style>
/* html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
} */

.container {
  height: 350px;
  width: 100%;
  overflow-y: scroll;
}

.left-container {
  overflow: hidden;
  position: relative;
  height: 100%;
}

.right-container {
  border-right: 1px solid #cecece;
  float: right;
  height: 100%;
  width: 340px;
  box-shadow: 0 0 5px 2px #aaa;
  position: relative;
  z-index: 2;
}

.gantt-messages {
  list-style-type: none;
  height: 50%;
  margin: 0;
  overflow-x: hidden;
  overflow-y: auto;
  padding-left: 5px;
}

.gantt-messages > .gantt-message {
  background-color: #f4f4f4;
  box-shadow: inset 5px 0 #d69000;
  font-family: Geneva, Arial, Helvetica, sans-serif;
  font-size: 14px;
  margin: 5px 0;
  padding: 8px 0 8px 10px;
}

.gantt-selected-info {
  border-bottom: 1px solid #cecece;
  box-sizing: border-box;
  font-family: Geneva, Arial, Helvetica, sans-serif;
  height: 50%;
  line-height: 28px;
  padding: 10px;
}

.gantt-selected-info h2 {
  border-bottom: 1px solid #cecece;
}

.select-task-prompt h2 {
  color: #d9d9d9;
}
</style>
