<template>
  <b-modal
    id="modal-center"
    ref="form-modal"
    centered
    title="Edit Person"
    hide-footer
  >
    <b-form @submit.prevent="submitForm">
      <b-row>
        <b-col cols="12">
          <b-form-group
            label="Full Name"
            label-for="full-name"
            label-cols-md="4"
          >
            <b-form-input
              id="full-name"
              v-model.trim="fullName"
              placeholder="Full Name"
              data-id="name"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group label="Age" label-for="age" label-cols-md="4">
            <b-form-input
              id="age"
              v-model.trim="age"
              type="number"
              placeholder="Age"
              data-id="age"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
            label="Eye Color"
            label-for="eye-color"
            label-cols-md="4"
          >
            <b-form-input
              id="eye-color"
              v-model.trim="eyeColor"
              placeholder="Eye Color"
              data-id="eye-color"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group label="Gender" label-for="gender" label-cols-md="4">
            <b-form-input
              id="gender"
              v-model.trim="gender"
              placeholder="Gender"
              data-id="gender"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
            label="Preferred Pet"
            label-for="preferred-pet"
            label-cols-md="4"
          >
            <b-form-input
              id="preferred-pet"
              v-model.trim="preferredPet"
              placeholder="Preferred Pet"
              data-id="preferredPet"
            />
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group
            label="Preferred Fruit"
            label-for="preferred-fruit"
            label-cols-md="4"
          >
            <b-form-input
              id="preferred-fruit"
              v-model.trim="preferredFruit"
              placeholder="Preferred Fruit"
              data-id="preferredFruit"
            />
          </b-form-group>
        </b-col>
      </b-row>
      <div class="d-flex justify-content-end">
        <b-button type="submit" variant="primary" data-id="save">
          Save
        </b-button>
      </div>
    </b-form>
  </b-modal>
</template>

<script>
import {
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BForm,
  VBModal,
  BButton,
} from "bootstrap-vue";

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    BButton,
  },
  directives: {
    "b-modal": VBModal,
  },
  props: {
    selectedRow: { type: Object, default: null },
  },
  data() {
    return {
      fullName: "",
      age: "",
      eyeColor: "",
      gender: "",
      preferredPet: "",
      preferredFruit: "",
    };
  },
  watch: {
    selectedRow(newVal) {
      this.fullName = newVal.name || "";
      this.age = newVal.age || "";
      this.eyeColor = newVal.eyeColor || "";
      this.gender = newVal.gender || "";

      this.preferredPet = newVal["preferences.pet"] || "";
      this.preferredFruit = newVal["preferences.fruit"] || "";
    },
  },

  emits: ["save-data"],
  methods: {
    submitForm() {
      const formData = {
        id: this.selectedRow._id,
        fullName: this.fullName,
        age: this.age,
        eyeColor: this.eyeColor,
        gender: this.gender,
        preferredPet: this.preferredPet,
        preferredFruit: this.preferredFruit,
      };

      this.$emit("save-data", formData);
      this.$refs["form-modal"].hide();
    },
  },
};
</script>
