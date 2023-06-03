<template>
  <div id="app">
      <VueFamilyTree :tree="trees" @card-click="cardClick" />
  </div>
</template>

<script>
import VueFamilyTree from "vue-family-tree";
import axios from "axios";
import { defineComponent, ref, reactive } from '@vue/composition-api'

export default defineComponent({
  components: {
      VueFamilyTree
  },
  setup() {
      axios
          .get("ancestors/tree")
          .then(result => trees.value = result.data.tree)

      const cardClick = item => {
          console.log(item);
      };

      const trees = ref([])

      const tree = [
          {
              firstPerson: {
                  name: "John Walker",
                  image: "https://picsum.photos/300/300?random=1"
              },
              secondPerson: {
                  name: "Jannet Grem",
                  image: "https://picsum.photos/300/300?random=2"
              },
              children: [
                  {
                      firstPerson: {
                          name: "Katia"
                      },
                      secondPerson: {
                          name: "Oleg"
                      },
                      children: [
                          {
                              firstPerson: {
                                  name: "Gleb"
                              },
                              secondPerson: {
                                  name: "Viktoriya"
                              },
                              children: [
                                  {
                                      firstPerson: {
                                          name: "Rim"
                                      },
                                      secondPerson: {
                                          name: "Natasha"
                                      }
                                  },
                                  {
                                      firstPerson: {
                                          name: "Leonid"
                                      }
                                  }
                              ]
                          },
                          {
                              firstPerson: {
                                  name: "Olga"
                              },
                              secondPerson: {
                                  name: "Nikita"
                              }
                          }
                      ]
                  },
                  {
                      firstPerson: {
                          name: "Vitia"
                      },
                      secondPerson: {
                          name: "Dasha"
                      }
                  },
                  {
                      firstPerson: {
                          name: "Antonio Wild",
                          image: "https://picsum.photos/300/300?random=3"
                      },
                      secondPerson: {
                          name: "Olivia Olson"
                      },
                      children: [
                          {
                              firstPerson: {
                                  name: "Kristina Wild"
                              }
                          },
                          {
                              firstPerson: {
                                  name: "Alexey Wild"
                              }
                          },
                          {
                              firstPerson: {
                                  name: "Viktor Wild"
                              }
                          }
                      ]
                  }
              ]
          }
      ];

      return {
          trees,
          cardClick
      };
  }
});

// export default {
//     name: "App",
//     components: {
//         VueFamilyTree
//     },
//     setup() {
//       console.log(23423)
//         axios.get("api/ancestors/tree").then(result => console.log(result)).catch(e => console.log(e));
//     },
//     data() {
//         return {
//             tree: [
//                 {
//                     firstPerson: {
//                         name: "John Walker",
//                         image: "https://picsum.photos/300/300?random=1"
//                     },
//                     secondPerson: {
//                         name: "Jannet Grem",
//                         image: "https://picsum.photos/300/300?random=2"
//                     },
//                     children: [
//                         {
//                             firstPerson: {
//                                 name: "Katia"
//                             },
//                             secondPerson: {
//                                 name: "Oleg"
//                             },
//                             children: [
//                                 {
//                                     firstPerson: {
//                                         name: "Gleb"
//                                     },
//                                     secondPerson: {
//                                         name: "Viktoriya"
//                                     },
//                                     children: [
//                                         {
//                                             firstPerson: {
//                                                 name: "Rim"
//                                             },
//                                             secondPerson: {
//                                                 name: "Natasha"
//                                             }
//                                         },
//                                         {
//                                             firstPerson: {
//                                                 name: "Leonid"
//                                             }
//                                         }
//                                     ]
//                                 },
//                                 {
//                                     firstPerson: {
//                                         name: "Olga"
//                                     },
//                                     secondPerson: {
//                                         name: "Nikita"
//                                     }
//                                 }
//                             ]
//                         },
//                         {
//                             firstPerson: {
//                                 name: "Vitia"
//                             },
//                             secondPerson: {
//                                 name: "Dasha"
//                             }
//                         },
//                         {
//                             firstPerson: {
//                                 name: "Antonio Wild",
//                                 image: "https://picsum.photos/300/300?random=3"
//                             },
//                             secondPerson: {
//                                 name: "Olivia Olson"
//                             },
//                             children: [
//                                 {
//                                     firstPerson: {
//                                         name: "Kristina Wild"
//                                     }
//                                 },
//                                 {
//                                     firstPerson: {
//                                         name: "Alexey Wild"
//                                     }
//                                 },
//                                 {
//                                     firstPerson: {
//                                         name: "Viktor Wild"
//                                     }
//                                 }
//                             ]
//                         }
//                     ]
//                 }
//             ]
//         };
//     },
//     methods: {
//         cardClick(item) {
//             console.log(item);
//         }
//     }
// };
</script>
