<template>
  <div class="content">
    <div class="container">
      <va-input
        style="width: 100%"
        v-model="filter"
        placeholder="Filter..."
        color="black"
      />
      <va-data-table :columns="columns" :items="notes" :filter="filter">
      </va-data-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filter: "",
      columns: [
        { key: "title", label: "Title" },
        { key: "note", label: "Note" },
        { key: "start", label: "Start" },
        { key: "end", label: "End" },
      ],
    };
  },
  computed: {
    notes() {
      return this.$store.getters["getNotes"];
    },
  },
};
</script>

<style scoped></style>
