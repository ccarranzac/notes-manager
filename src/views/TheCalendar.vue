<template>
  <base-dialog
    v-if="dialog && mode === 'add'"
    title="Add Note"
    @close="closeDialog"
  >
    <template #default>
      <va-input
        class="custom-input"
        v-model.trim="title"
        placeholder="add Title..."
        color="black"
      />
      <va-input
        class="custom-input"
        v-model.trim="note"
        placeholder="new note..."
        color="black"
      />
    </template>
    <template #actions>
      <va-button @click="confirmAdd"> Add </va-button>
      <va-button flat @click="closeDialog"> Cancel </va-button>
    </template>
  </base-dialog>
  <base-dialog
    v-if="dialog && mode === 'delete'"
    title="Delete Note"
    @close="closeDialog"
  >
    <template #default>
      <p>¿Estas seguro que quieres borrar la nota?</p>
    </template>
    <template #actions>
      <va-button @click="confirmDelete"> Add </va-button>
      <va-button flat @click="closeDialog"> Cancel </va-button>
    </template>
  </base-dialog>
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
import BaseDialog from "../components/BaseModal.vue";

export default {
  components: {
    FullCalendar,
    BaseDialog,
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
      dialog: false,
      mode: "",
      note: "",
      title: "",
      calendarProps: null,
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
    closeDialog() {
      this.note = "";
      this.title = "";
      this.dialog = false;
      this.mode = "";
      //this.calendarOptions = null;
    },
    handleDateSelect(calendarProps) {
      this.dialog = true;
      this.mode = "add";
      this.calendarProps = calendarProps;
    },
    confirmAdd() {
      if (this.note !== "" && this.title !== "") {
        const note = {
          title: this.title,
          note: this.note,
          start: this.calendarProps.startStr,
          end: this.calendarProps.endStr,
          allDay: this.calendarProps.allDay,
        };
        this.closeDialog();
        this.$store.dispatch("createNote", note);
      } else {
        alert("Add a valid Note!!");
      }
    },
    handleEventClick(calendarProps) {
      this.dialog = true;
      this.mode = "delete";
      this.calendarProps = calendarProps;
    },
    confirmDelete() {
      const eventId = this.calendarProps.event.id;
      this.closeDialog();
      this.$store.dispatch("deleteNote", eventId);
    },
    handleEvents() {
      const notes = this.$store.getters["getNotes"];
      this.calendarOptions.events = notes;
    },
  },
};
</script>

<style scoped>
.calendar {
  max-height: 80vh;
}

.custom-input {
  width: 100%;
  margin-block: 1rem;
}
</style>
