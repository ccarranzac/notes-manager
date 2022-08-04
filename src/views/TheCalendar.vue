<template>
  <the-loading v-if="loading" />
  <div class="content">
    <div class="container">
      <FullCalendar class="calendar" :options="calendarOptions">
        <template v-slot:eventContent="arg">
          {{ arg.event.title }}
        </template>
      </FullCalendar>
    </div>
  </div>
</template>

<script>
import "@fullcalendar/core/vdom";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

export default {
  components: {
    FullCalendar,
  },
  data() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin, interactionPlugin],
        initialDate: "2022-08-01",
        initialView: "dayGridMonth",
        editable: true,
        selectable: true,
        events: [],
        select: this.handleDateSelect,
        eventClick: this.handleEventClick,
        eventsSet: this.handleEvents,
      },
      currentNotes: [],
    };
  },
  computed: {
    loading() {
      return this.$store.getters["getLoading"];
    },
    notes() {
      return this.$store.getters["getNotes"];
    },
  },
  watch: {
    notes: {
      deep: true,
      handler() {
        this.handleEvents();
      },
    },
  },
  methods: {
    handleDateSelect(calendarProps) {
      let noteTitle = prompt("Ingresa la nueva nota: ");
      if (noteTitle) {
        const note = {
          title: noteTitle,
          start: calendarProps.startStr,
          end: calendarProps.endStr,
          allDay: calendarProps.allDay,
        };
        this.$store.dispatch("createNote", note);
      }
    },
    handleEventClick(calendarProps) {
      if (
        confirm(
          `Estas seguro que quieres borrar la nota: '${calendarProps.event.title}'?`
        )
      ) {
        const eventId = calendarProps.event.id;
        this.$store.dispatch("deleteNote", eventId);
      }
    },
    handleEvents() {
      const notes = this.$store.getters["getNotes"];
      this.calendarOptions.events = notes;
    },
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
