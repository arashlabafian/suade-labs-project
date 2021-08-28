import axios from "axios";

export default {
  namespaced: true,
  state() {
    return {
      people: [],
    };
  },
  getters: {
    getPeople(state) {
      return state.people;
    },
  },
  mutations: {
    SET_PEOPLE(state, payload) {
      state.people = payload;
    },
    DELETE_PERSON(state, payload) {
      const personId = payload;
      state.people = state.people.filter((person) => person._id !== personId);
    },
    EDIT_PERSON(state, payload) {
      const { id } = payload;
      const selectedPersonIdx = state.people.findIndex(
        (person) => person._id === id
      );
      const newPerson = {
        _id: id,
        age: +payload.age,
        eyeColor: payload.eyeColor,
        gender: payload.gender,
        name: payload.fullName,
        preferences: {
          fruit: payload.preferredFruit,
          pet: payload.preferredPet,
        },
      };
      state.people.splice(selectedPersonIdx, 1, newPerson);
    },
  },
  actions: {
    async getPeople(context) {
      const response = await axios.get(
        "https://run.mocky.io/v3/8ec47f74-c546-4534-947f-23d885c9e7ef"
      );
      const responseData = response.data;
      if (response.status !== 200) {
        const error = new Error(
          responseData.message || "Failed to fetch requests."
        );
        throw error;
      }

      context.commit("SET_PEOPLE", responseData);
    },
    deletePerson(context, personId) {
      context.commit("DELETE_PERSON", personId);
    },
    editPerson(context, person) {
      context.commit("EDIT_PERSON", person);
    },
  },
};
