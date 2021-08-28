import { shallowMount } from "@vue/test-utils";
import PersonForm from "@/components/person-form/PersonForm.vue";
import Vue from "vue";

import BootstrapVue from "bootstrap-vue";
Vue.use(BootstrapVue);

describe("PersonForm.vue", () => {
  it("is a Vue instance", () => {
    const wrapper = shallowMount(PersonForm, {
      propsData: {
        selectedRow: {},
      },
    });
    expect(wrapper.vm).toBeTruthy();
  });

  it("shows person data", () => {
    const person = {
      _id: "5d5d7ad6b0e83bc2d9d67dfb",
      name: "Stephens Townsend",
      age: 28,
      eyeColor: "brown",
      gender: "male",
      "preferences.pet": "bird",
      "preferences.fruit": "apple",
    };
    const wrapper = shallowMount(PersonForm, {
      propsData: {
        selectedRow: person,
      },
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
