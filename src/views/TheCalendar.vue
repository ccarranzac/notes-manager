<template>
  <div class="content">
    <div class="container">
      <FullCalendar class="calendar" :options="calendarOptions" />
    </div>
  </div>
</template>

<script>
import "@fullcalendar/core/vdom"; // solves problem with Vite
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  components: {
    FullCalendar, // make the <FullCalendar> tag available
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialView: "dayGridMonth",
      },
    };
  },
};
</script>

<style scoped>
.container {
  background-color: white;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
}

.calendar {
  max-height: 80vh;
}
</style>
