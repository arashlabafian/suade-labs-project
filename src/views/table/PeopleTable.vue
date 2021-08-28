<template>
  <b-card-code title="People Table">
    <div class="custom-search d-flex justify-content-end">
      <b-form-group>
        <div class="d-flex align-items-center">
          <label class="mr-1">Search</label>
          <b-form-input
            v-model="searchTerm"
            placeholder="Search"
            type="text"
            class="d-inline-block"
          />
        </div>
      </b-form-group>
    </div>

    <vue-good-table
      :columns="columns"
      :rows="receivedPeople"
      :search-options="{
        enabled: true,
        externalQuery: searchTerm,
      }"
      :pagination-options="{
        enabled: true,
        perPage: pageLength,
      }"
    >
      <template slot="table-row" slot-scope="props">
        <span v-if="props.column.field === 'action'">
          <span>
            <b-dropdown
              variant="link"
              toggle-class="text-decoration-none"
              no-caret
              data-id="drop"
            >
              <template v-slot:button-content>
                <feather-icon
                  icon="MoreVerticalIcon"
                  size="16"
                  class="text-body align-middle mr-25"
                />
              </template>
              <b-dropdown-item
                @click="editRow(props.formattedRow)"
                data-id="edit"
              >
                <feather-icon icon="Edit2Icon" class="mr-50" />
                <span>Edit</span>
              </b-dropdown-item>
              <b-dropdown-item
                id="delete-button"
                @click="deleteRow(props.formattedRow)"
                data-id="delete"
              >
                <feather-icon icon="TrashIcon" class="mr-50" />
                <span>Delete</span>
              </b-dropdown-item>
            </b-dropdown>
          </span>
        </span>

        <span v-else>
          {{ props.formattedRow[props.column.field] }}
        </span>
      </template>

      <template slot="pagination-bottom" slot-scope="props">
        <div class="d-flex justify-content-between flex-wrap">
          <div class="d-flex align-items-center mb-0 mt-1">
            <span class="text-nowrap"> Showing 1 to </span>
            <b-form-select
              v-model="pageLength"
              :options="['3', '5', '10']"
              class="mx-1"
              @input="
                (value) => props.perPageChanged({ currentPerPage: value })
              "
            />
            <span class="text-nowrap"> of {{ props.total }} entries </span>
          </div>
          <div>
            <b-pagination
              :value="1"
              :total-rows="props.total"
              :per-page="pageLength"
              first-number
              last-number
              align="right"
              prev-class="prev-item"
              next-class="next-item"
              class="mt-1 mb-0"
              @input="(value) => props.pageChanged({ currentPage: value })"
            >
              <template #prev-text>
                <feather-icon icon="ChevronLeftIcon" size="18" />
              </template>
              <template #next-text>
                <feather-icon icon="ChevronRightIcon" size="18" />
              </template>
            </b-pagination>
          </div>
        </div>
      </template>
    </vue-good-table>

    <person-form :selected-row="selectedRow" @save-data="saveData" />
  </b-card-code>
</template>

<script>
import {
  BPagination,
  BFormGroup,
  BFormInput,
  BFormSelect,
  BDropdown,
  BDropdownItem,
} from "bootstrap-vue";
import { VueGoodTable } from "vue-good-table";
import BCardCode from "@/components/base/b-card-code/BCardCode.vue";
import PersonForm from "@/components/person-form/PersonForm.vue";

export default {
  components: {
    BCardCode,
    VueGoodTable,

    BPagination,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BDropdown,
    BDropdownItem,
    PersonForm,
  },

  data() {
    return {
      selectedRow: null,
      pageLength: 10,
      columns: [
        {
          label: "id",
          field: "_id",
          hidden: true,
        },
        {
          label: "Full Name",
          field: "name",
        },
        {
          label: "Age",
          field: "age",
          type: "number",
        },
        {
          label: "Eye Color",
          field: "eyeColor",
        },
        {
          label: "Gender",
          field: "gender",
        },
        {
          label: "Preferred Pet",
          field: "preferences.pet",
        },
        {
          label: "Preferred Fruit",
          field: "preferences.fruit",
        },
        {
          label: "Action",
          field: "action",
        },
      ],
      searchTerm: "",
    };
  },
  computed: {
    receivedPeople() {
      return this.$store.getters["people/getPeople"];
    },
  },

  methods: {
    async loadPeople() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("people/getPeople");
      } catch (error) {
        this.error = error.message || "Something failed!";
      }
      this.isLoading = false;
    },

    deleteRow(row) {
      const selectedPersonIdx = row._id;
      this.$store.dispatch("people/deletePerson", selectedPersonIdx);
    },
    editRow(row) {
      this.selectedRow = row;
      this.$bvModal.show("modal-center");
    },
    saveData(person) {
      this.$store.dispatch("people/editPerson", person);
    },
  },
};
</script>

<style lang="scss">
@import "@/scss/vue/libs/vue-good-table.scss";
</style>
