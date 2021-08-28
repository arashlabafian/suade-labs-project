import Vue from "vue";
import { mount } from "@vue/test-utils";
import PeopleTable from "@/views/table/PeopleTable.vue";
import FeatherIcon from "@/components/base/feather-icon/FeatherIcon.vue";

Vue.component(FeatherIcon.name, FeatherIcon);

describe("PeopleTable.vue", () => {
  it("is a Vue instance", () => {
    const wrapper = mount(PeopleTable, {
      computed: {
        receivedPeople() {
          return [];
        },
      },
    });

    expect(wrapper.vm).toBeTruthy();
  });

  it("renders the row", () => {
    const person = {
      _id: "5d5d7ad6b0e83bc2d9d67dfb",
      age: 28,
      eyeColor: "brown",
      name: "Stephens Townsend",
      gender: "male",
      location: {
        latitude: 26.723281,
        longitude: 99.391104,
      },
      preferences: {
        pet: "bird",
        fruit: "apple",
      },
    };
    const wrapper = mount(PeopleTable, {
      computed: {
        receivedPeople() {
          return [person];
        },
      },
      propsData: {
        selectedRow: [],
      },
    });
    expect(wrapper.html()).toContain("brown");
    expect(wrapper.html()).toContain("Stephens Townsend");
    expect(wrapper.html()).toContain("male");
  });

  it("deletes a row when delete button is clicked", async () => {
    const deleteRow = jest.fn();
    const wrapper = mount(PeopleTable, {
      computed: {
        receivedPeople() {
          return [
            {
              _id: "5d5d7ad6b0e83bc2d9d67dfb",
              age: 28,
              eyeColor: "brown",
              name: "Stephens Townsend",
              gender: "male",
              location: {
                latitude: 26.723281,
                longitude: 99.391104,
              },
              preferences: {
                pet: "bird",
                fruit: "apple",
              },
            },
          ];
        },
      },
      propsData: {
        selectedRow: [],
      },
      methods: {
        deleteRow,
      },
    });
    const button = wrapper.find(".btn-link");
    await button.trigger("click");
    const deletebutton = wrapper.find("#delete-button");
    await deletebutton.trigger("click");
    expect(deleteRow).toHaveBeenCalled();
  });
});
