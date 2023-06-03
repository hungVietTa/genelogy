(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_genelogy_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/Member.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/Member.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_images_Profile_avatar_placeholder_large_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/assets/images/Profile_avatar_placeholder_large.png */ "./resources/js/assets/images/Profile_avatar_placeholder_large.png");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _composables_memberFormHandle_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/composables/memberFormHandle.js */ "./resources/js/composables/memberFormHandle.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__.defineComponent)({
  emits: ["toggleModal"],
  props: {
    modalVisible: {
      type: Boolean,
      "default": function _default() {
        return false;
      }
    }
  },
  setup: function setup(props, _ref) {
    var emit = _ref.emit;
    var selectedFile = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__.ref)(null);
    var previewUrl = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__.ref)(null);
    var modalShow = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__.ref)(false);
    var modalDestroyShow = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__.ref)(false);
    var store = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__.inject)("vuex-store");
    var ancestor = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__.computed)(function () {
      return store.state.member;
    });
    store.dispatch("getOptions");
    var input = {
      id: null,
      spouse_id: null,
      parent_id: null,
      nth: null,
      name: "",
      gender: null,
      img_url: null
    };
    var formValue = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__.ref)((0,lodash__WEBPACK_IMPORTED_MODULE_3__.cloneDeep)(input));
    var spouseOptions = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__.computed)(function () {
      return store.state.ancestorOptions;
    });
    var parentOptions = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__.computed)(function () {
      return store.state.ancestorOptions;
    });
    var setNewData = function setNewData() {
      return formValue.value = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.cloneDeep)(input);
    };
    var reduceOption = function reduceOption(option) {
      return option.id;
    };
    var undo = /*#__PURE__*/function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(id) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return store.dispatch("undoMember", formValue.value.id);
              case 2:
                modalDestroyShow.value = false;
                emit("toggleModal", false);
              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return function undo(_x) {
        return _ref2.apply(this, arguments);
      };
    }();
    var showModal = function showModal() {
      setNewData();
      store.commit("setMember", {});
      previewUrl.value = null;
      emit("toggleModal", true);
    };
    var submitForm = function submitForm() {
      if (formValue.value.id) {
        var id = formValue.value.id;
        var data = (0,lodash__WEBPACK_IMPORTED_MODULE_3__.omit)(formValue.value, "id");
        store.dispatch("updateMember", {
          id: id,
          data: data
        });
      } else store.dispatch("plusMember", formValue.value);
      emit("toggleModal", false);
    };
    var handleFileChange = function handleFileChange(event) {
      var file = event.target.files[0];
      if (file) {
        selectedFile.value = file;
        previewUrl.value = URL.createObjectURL(file);
        var formData = new FormData();
        formData.append("image", selectedFile.value);
        axios__WEBPACK_IMPORTED_MODULE_1___default().post("upload", formData).then(function (response) {
          var imagePath = response.data.imagePath;
          formValue.value.img_url = imagePath;
        })["catch"](function (error) {
          // Handle the error
          console.error("Image Upload Error:", error);
        });
      } else {
        selectedFile.value = null;
        previewUrl.value = null;
      }
    };
    (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__.watch)(ancestor, function () {
      if (ancestor.value.id) formValue.value = (0,_composables_memberFormHandle_js__WEBPACK_IMPORTED_MODULE_4__.extractInputData)((0,lodash__WEBPACK_IMPORTED_MODULE_3__.cloneDeep)(ancestor.value));
    }, {
      immediate: true
    });
    (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__.watch)(function () {
      return props.modalVisible;
    }, function () {
      modalShow.value = props.modalVisible;
    });
    (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__.watch)(ancestor, function () {
      previewUrl.value = null;
    });
    (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__.watch)(modalShow, function () {
      return emit("toggleModal", modalShow.value);
    });
    return {
      selectedFile: selectedFile,
      previewUrl: previewUrl,
      ancestor: ancestor,
      formValue: formValue,
      spouseOptions: spouseOptions,
      parentOptions: parentOptions,
      modalShow: modalShow,
      modalDestroyShow: modalDestroyShow,
      yourImage: _assets_images_Profile_avatar_placeholder_large_png__WEBPACK_IMPORTED_MODULE_2__.default,
      showModal: showModal,
      setNewData: setNewData,
      submitForm: submitForm,
      undo: undo,
      reduceOption: reduceOption,
      handleFileChange: handleFileChange
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/genelogy.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/genelogy.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_family_tree_src_components_VueFamilyTree_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/vue-family-tree/src/components/VueFamilyTree.vue */ "./resources/js/vue-family-tree/src/components/VueFamilyTree.vue");
/* harmony import */ var _components_form_Member_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/form/Member.vue */ "./resources/js/components/form/Member.vue");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__.defineComponent)({
  components: {
    VueFamilyTree: _vue_family_tree_src_components_VueFamilyTree_vue__WEBPACK_IMPORTED_MODULE_1__.default,
    Member: _components_form_Member_vue__WEBPACK_IMPORTED_MODULE_2__.default
  },
  setup: function setup() {
    var store = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__.inject)("vuex-store");
    var trees = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__.computed)(function () {
      var _store$state$genology;
      return (_store$state$genology = store.state.genology) !== null && _store$state$genology !== void 0 ? _store$state$genology : [];
    });
    var cardClick = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(item) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return store.dispatch("getMember", item.id);
              case 2:
                modalVisible.value = true;
              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
      return function cardClick(_x) {
        return _ref.apply(this, arguments);
      };
    }();
    var modalVisible = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__.ref)(false);
    (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__.onMounted)(function () {
      return store.dispatch("getTree");
    });
    return {
      trees: trees,
      modalVisible: modalVisible,
      cardClick: cardClick
    };
  }
}));

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/VueFamilyTree.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/VueFamilyTree.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_Branch_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Branch.vue */ "./resources/js/vue-family-tree/src/components/components/Branch.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "VueFamilyTree",
  components: {
    VueFamilyTreeBranch: _components_Branch_vue__WEBPACK_IMPORTED_MODULE_0__.default
  },
  props: {
    tree: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    enableDrag: {
      type: Boolean,
      "default": true
    },
    wrapperStyles: {
      type: Object,
      "default": function _default() {
        return this.enableDrag ? {
          position: "relative",
          width: "100%",
          height: "600px"
        } : null;
      }
    },
    dragCursor: {
      type: String,
      "default": "grabbing"
    },
    mouseChangeDiff: {
      type: Number,
      "default": 2
    }
  },
  data: function data() {
    return {
      dragAndDrop: {
        dragStarted: false,
        dragStartX: 0,
        dragStartY: 0,
        diffX: 0,
        diffY: 0,
        mouseCursor: "default"
      },
      preventMouseEvents: false,
      position: {
        x: 0,
        y: 0
      }
    };
  },
  methods: {
    mouseover: function mouseover(region) {
      if (!this.preventMouseEvents) {
        this.$emit("mouseover", region);
      }
    },
    mouseleave: function mouseleave(region) {
      if (!this.preventMouseEvents) {
        this.$emit("mouseleave", region);
      }
    },
    cardClick: function cardClick(payload) {
      if (!this.preventMouseEvents) {
        this.$emit("card-click", payload);
      }
    },
    dragstart: function dragstart(event) {
      if (this.enableDrag) {
        if (this.mobilePreventScroll) {
          var breakpoint = this.mobilePreventScroll.breakpoint || 1024;
          var selector = this.mobilePreventScroll.selector || "body";
          var mql = window.matchMedia("(max-width: ".concat(breakpoint, "px)"));
          if (mql.matches) {
            var $el = document.querySelector(selector);
            this.previousMobileOverflowType = $el.style.overflow;
            $el.style.overflow = "hidden";
          }
        }
        this.dragAndDrop.dragStartX = event.pageX || event.touches[0].pageX;
        this.dragAndDrop.dragStartY = event.pageY || event.touches[0].pageY;
        this.dragAndDrop.dragStarted = true;
      }
      this.$emit("dragstart", event);
    },
    drag: function drag(event) {
      if (this.enableDrag) {
        if (this.dragAndDrop.dragStarted) {
          this.dragAndDrop.diffX = (event.pageX || event.touches[0].pageX) - this.dragAndDrop.dragStartX;
          this.dragAndDrop.diffY = (event.pageY || event.touches[0].pageY) - this.dragAndDrop.dragStartY;
          if (this.dragAndDrop.diffX > this.mouseChangeDiff || this.dragAndDrop.diffX < -this.mouseChangeDiff || this.dragAndDrop.diffY > this.mouseChangeDiff || this.dragAndDrop.diffX < -this.mouseChangeDiff) {
            this.preventMouseEvents = true;
            this.dragAndDrop.mouseCursor = this.dragCursor;
          }
          this.position.x += this.dragAndDrop.diffX;
          this.position.y += this.dragAndDrop.diffY;
          this.dragAndDrop.dragStartX = event.pageX || event.touches[0].pageX;
          this.dragAndDrop.dragStartY = event.pageY || event.touches[0].pageY;
          this.$emit("drag", event);
        }
      }
    },
    dragend: function dragend() {
      var _this = this;
      if (this.enableDrag) {
        this.dragAndDrop.dragStarted = false;
        this.dragAndDrop.mouseCursor = "default";
        if (this.mobilePreventScroll) {
          var selector = this.mobilePreventScroll.selector || "body";
          var $el = document.querySelector(selector);
          $el.style.overflow = this.previousMobileOverflowType;
        }
        setTimeout(function () {
          _this.preventMouseEvents = false;
        }, 150);
      }
      this.$emit("dragend", event);
    },
    getTreeClientRect: function getTreeClientRect() {
      return this.$refs.vueFamilyTree.getBoundingClientRect();
    },
    getWrapperClientRect: function getWrapperClientRect() {
      return this.$refs.wrapper.getBoundingClientRect();
    },
    centerTree: function centerTree() {
      var _this2 = this;
      return new Promise(function (resolve, reject) {
        try {
          var wrapperCenterX = _this2.getWrapperClientRect().width / 2;
          var wrapperCenterY = _this2.getWrapperClientRect().height / 2;
          var mapCenterX = _this2.getTreeClientRect().width / 2;
          var mapCenterY = _this2.getTreeClientRect().height / 2;
          _this2.position.x = wrapperCenterX - mapCenterX;
          _this2.position.y = wrapperCenterY - mapCenterY;
          _this2.$emit("center-map");
          resolve(true);
        } catch (e) {
          reject(e);
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/components/Branch.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/components/Branch.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card */ "./resources/js/vue-family-tree/src/components/components/Card.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "VueFamilyTreeBranch",
  components: {
    Card: _Card__WEBPACK_IMPORTED_MODULE_0__.default
  },
  props: {
    tree: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/components/Card.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/components/Card.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FamilyCard",
  props: {
    name: String,
    img_link: String,
    source: Object
  },
  methods: {
    click: function click() {
      this.$emit("click", this.source);
    }
  }
});

/***/ }),

/***/ "./resources/js/composables/memberFormHandle.js":
/*!******************************************************!*\
  !*** ./resources/js/composables/memberFormHandle.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "extractInputData": () => (/* binding */ extractInputData)
/* harmony export */ });
var extractInputData = function extractInputData(input) {
  var output = {
    id: input.id,
    spouse_id: input.spouse_id,
    parent_id: input.parent_id,
    nth: input.nth,
    name: input.name,
    gender: input.gender,
    img_url: null
  };
  return output;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/genelogy.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/genelogy.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".vue-family-tree {\n  height: 1300px !important;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/components/Branch.vue?vue&type=style&index=0&id=3cf6a47a&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/components/Branch.vue?vue&type=style&index=0&id=3cf6a47a&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".vue-family-tree__branch[data-v-3cf6a47a] {\n  position: relative;\n}\n.vue-family-tree__branch .vue-family-tree__branch[data-v-3cf6a47a] {\n  padding-top: 16px;\n}\n.vue-family-tree__branch .vue-family-tree__branch .vue-family-tree__col[data-v-3cf6a47a] {\n  padding-top: 16px;\n}\n.vue-family-tree__branch .vue-family-tree__branch .vue-family-tree__col[data-v-3cf6a47a]:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  width: 100%;\n  height: 16px;\n  right: 0;\n  border-top: 1px solid #ddd;\n}\n.vue-family-tree__branch .vue-family-tree__branch .vue-family-tree__col[data-v-3cf6a47a]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  height: 16px;\n  width: 1px;\n  background-color: #ddd;\n}\n.vue-family-tree__branch .vue-family-tree__branch .vue-family-tree__col[data-v-3cf6a47a]:first-child:before {\n  width: 82px;\n  border-left: 1px solid #ddd;\n}\n.vue-family-tree__branch .vue-family-tree__branch .vue-family-tree__col[data-v-3cf6a47a]:first-child:after {\n  display: none;\n}\n.vue-family-tree__branch .vue-family-tree__branch .vue-family-tree__col[data-v-3cf6a47a]:last-child:before {\n  width: 82px;\n  border-right: 1px solid #ddd;\n  left: 0;\n  right: auto;\n}\n.vue-family-tree__branch .vue-family-tree__branch .vue-family-tree__col[data-v-3cf6a47a]:last-child:after {\n  display: none;\n}\n.vue-family-tree__branch .vue-family-tree__branch .vue-family-tree__col[data-v-3cf6a47a]:first-child:last-child {\n  padding-top: 0;\n}\n.vue-family-tree__branch .vue-family-tree__branch .vue-family-tree__col[data-v-3cf6a47a]:first-child:last-child:before {\n  display: none;\n}\n.vue-family-tree__branch .vue-family-tree__branch .vue-family-tree__col[data-v-3cf6a47a]:first-child:last-child:after {\n  display: none;\n}\n.vue-family-tree__branch .vue-family-tree__branch .vue-family-tree__col_couple[data-v-3cf6a47a]:after {\n  left: calc(50% - 68px);\n}\n.vue-family-tree__branch .vue-family-tree__branch .vue-family-tree__col_couple[data-v-3cf6a47a]:first-child:before {\n  width: calc(50% + 68px);\n}\n.vue-family-tree__branch .vue-family-tree__branch .vue-family-tree__col_couple[data-v-3cf6a47a]:last-child:before {\n  width: calc(50% - 68px);\n}\n.vue-family-tree__branch .vue-family-tree__branch .vue-family-tree__col_couple[data-v-3cf6a47a]:first-child:last-child {\n  padding-left: 146px;\n}\n.vue-family-tree__row[data-v-3cf6a47a] {\n  display: flex;\n  justify-content: center;\n}\n.vue-family-tree__col[data-v-3cf6a47a] {\n  position: relative;\n}\n.vue-family-tree__col + .vue-family-tree__col[data-v-3cf6a47a] {\n  padding-left: 16px;\n}\n.vue-family-tree__content[data-v-3cf6a47a] {\n  display: flex;\n  justify-content: center;\n}\n.vue-family-tree__couple[data-v-3cf6a47a] {\n  position: relative;\n  display: inline-flex;\n}\n.vue-family-tree__couple[data-v-3cf6a47a]:before {\n  content: \"\";\n  position: absolute;\n  top: 50px;\n  left: 50%;\n  margin-left: -16px;\n  height: 1px;\n  width: 32px;\n  background-color: #ddd;\n}\n.vue-family-tree__couple .vue-family-tree__person[data-v-3cf6a47a]:first-child {\n  padding-right: 16px;\n}\n.vue-family-tree__couple .vue-family-tree__person[data-v-3cf6a47a]:last-child {\n  padding-left: 16px;\n}\n.vue-family-tree__couple_children .vue-family-tree__person[data-v-3cf6a47a]:last-child:before {\n  content: \"\";\n  position: absolute;\n  top: 50px;\n  left: 0;\n  width: 1px;\n  height: calc(100% - 34px);\n  background-color: #ddd;\n}\n.vue-family-tree__couple_children .vue-family-tree__person[data-v-3cf6a47a]:last-child:after {\n  content: \"\";\n  position: absolute;\n  top: 48px;\n  left: -3px;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background-color: #ddd;\n}\n.vue-family-tree__person[data-v-3cf6a47a] {\n  position: relative;\n  z-index: 10;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/components/Card.vue?vue&type=style&index=0&id=f0e83a30&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/components/Card.vue?vue&type=style&index=0&id=f0e83a30&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".vue-family-card[data-v-f0e83a30] {\n  text-align: center;\n  width: 100px;\n}\n.vue-family-card__image[data-v-f0e83a30] {\n  display: block;\n  width: 100px;\n  height: 100px;\n  margin-bottom: 16px;\n  background-position: 50%;\n  background-size: cover;\n  background-color: #dedede;\n}\n.vue-family-card__name[data-v-f0e83a30] {\n  font-weight: 600;\n}\n.vue-family-card__name a[data-v-f0e83a30] {\n  color: #000;\n  text-decoration: none;\n}\n.avatar-container[data-v-f0e83a30] {\n  display: block;\n  margin: auto;\n  width: 100px;\n  height: 100px;\n  overflow: hidden;\n  background-color: #dedede;\n}\n.avatar-image[data-v-f0e83a30] {\n  width: 100%; /* Make the width of the image 100% of the container */\n  height: auto; /* Allow the height to adjust based on the image's aspect ratio */\n  -o-object-fit: cover;\n     object-fit: cover;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/Member.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/Member.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.vue-family-tree {\n    height: 800px !important;\n}\n.avatar-container {\n    margin: auto;\n    width: 200px;\n    height: 200px;\n    overflow: hidden;\n}\n.avatar-image {\n    width: 100%; /* Make the width of the image 100% of the container */\n    height: auto; /* Allow the height to adjust based on the image's aspect ratio */\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./resources/js/assets/images/Profile_avatar_placeholder_large.png":
/*!*************************************************************************!*\
  !*** ./resources/js/assets/images/Profile_avatar_placeholder_large.png ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/images/Profile_avatar_placeholder_large.png?4d1dba3d8f0a3d9f693e695b3429ddf9");

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/genelogy.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/genelogy.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_genelogy_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./genelogy.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/genelogy.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_genelogy_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_genelogy_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/components/Branch.vue?vue&type=style&index=0&id=3cf6a47a&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/components/Branch.vue?vue&type=style&index=0&id=3cf6a47a&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Branch_vue_vue_type_style_index_0_id_3cf6a47a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Branch.vue?vue&type=style&index=0&id=3cf6a47a&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/components/Branch.vue?vue&type=style&index=0&id=3cf6a47a&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Branch_vue_vue_type_style_index_0_id_3cf6a47a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Branch_vue_vue_type_style_index_0_id_3cf6a47a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/components/Card.vue?vue&type=style&index=0&id=f0e83a30&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/components/Card.vue?vue&type=style&index=0&id=f0e83a30&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_f0e83a30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Card.vue?vue&type=style&index=0&id=f0e83a30&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/components/Card.vue?vue&type=style&index=0&id=f0e83a30&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_f0e83a30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_f0e83a30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/Member.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/Member.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Member_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Member.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/Member.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Member_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Member_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/form/Member.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/form/Member.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Member_vue_vue_type_template_id_470ca22c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Member.vue?vue&type=template&id=470ca22c& */ "./resources/js/components/form/Member.vue?vue&type=template&id=470ca22c&");
/* harmony import */ var _Member_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Member.vue?vue&type=script&lang=js& */ "./resources/js/components/form/Member.vue?vue&type=script&lang=js&");
/* harmony import */ var _Member_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Member.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/form/Member.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Member_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Member_vue_vue_type_template_id_470ca22c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Member_vue_vue_type_template_id_470ca22c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/form/Member.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/genelogy.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/admin/genelogy.vue ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _genelogy_vue_vue_type_template_id_5a7c66c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./genelogy.vue?vue&type=template&id=5a7c66c9& */ "./resources/js/views/admin/genelogy.vue?vue&type=template&id=5a7c66c9&");
/* harmony import */ var _genelogy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./genelogy.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/genelogy.vue?vue&type=script&lang=js&");
/* harmony import */ var _genelogy_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./genelogy.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/admin/genelogy.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _genelogy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _genelogy_vue_vue_type_template_id_5a7c66c9___WEBPACK_IMPORTED_MODULE_0__.render,
  _genelogy_vue_vue_type_template_id_5a7c66c9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/genelogy.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/vue-family-tree/src/components/VueFamilyTree.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/vue-family-tree/src/components/VueFamilyTree.vue ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VueFamilyTree_vue_vue_type_template_id_2bc73dc7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VueFamilyTree.vue?vue&type=template&id=2bc73dc7& */ "./resources/js/vue-family-tree/src/components/VueFamilyTree.vue?vue&type=template&id=2bc73dc7&");
/* harmony import */ var _VueFamilyTree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VueFamilyTree.vue?vue&type=script&lang=js& */ "./resources/js/vue-family-tree/src/components/VueFamilyTree.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _VueFamilyTree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _VueFamilyTree_vue_vue_type_template_id_2bc73dc7___WEBPACK_IMPORTED_MODULE_0__.render,
  _VueFamilyTree_vue_vue_type_template_id_2bc73dc7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue-family-tree/src/components/VueFamilyTree.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/vue-family-tree/src/components/components/Branch.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/vue-family-tree/src/components/components/Branch.vue ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Branch_vue_vue_type_template_id_3cf6a47a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Branch.vue?vue&type=template&id=3cf6a47a&scoped=true& */ "./resources/js/vue-family-tree/src/components/components/Branch.vue?vue&type=template&id=3cf6a47a&scoped=true&");
/* harmony import */ var _Branch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Branch.vue?vue&type=script&lang=js& */ "./resources/js/vue-family-tree/src/components/components/Branch.vue?vue&type=script&lang=js&");
/* harmony import */ var _Branch_vue_vue_type_style_index_0_id_3cf6a47a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Branch.vue?vue&type=style&index=0&id=3cf6a47a&lang=scss&scoped=true& */ "./resources/js/vue-family-tree/src/components/components/Branch.vue?vue&type=style&index=0&id=3cf6a47a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Branch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Branch_vue_vue_type_template_id_3cf6a47a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Branch_vue_vue_type_template_id_3cf6a47a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "3cf6a47a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue-family-tree/src/components/components/Branch.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/vue-family-tree/src/components/components/Card.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/vue-family-tree/src/components/components/Card.vue ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Card_vue_vue_type_template_id_f0e83a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Card.vue?vue&type=template&id=f0e83a30&scoped=true& */ "./resources/js/vue-family-tree/src/components/components/Card.vue?vue&type=template&id=f0e83a30&scoped=true&");
/* harmony import */ var _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.vue?vue&type=script&lang=js& */ "./resources/js/vue-family-tree/src/components/components/Card.vue?vue&type=script&lang=js&");
/* harmony import */ var _Card_vue_vue_type_style_index_0_id_f0e83a30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card.vue?vue&type=style&index=0&id=f0e83a30&lang=scss&scoped=true& */ "./resources/js/vue-family-tree/src/components/components/Card.vue?vue&type=style&index=0&id=f0e83a30&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Card_vue_vue_type_template_id_f0e83a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Card_vue_vue_type_template_id_f0e83a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "f0e83a30",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/vue-family-tree/src/components/components/Card.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/form/Member.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/form/Member.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Member_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Member.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/Member.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Member_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/admin/genelogy.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/admin/genelogy.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_genelogy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./genelogy.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/genelogy.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_genelogy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/vue-family-tree/src/components/VueFamilyTree.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/vue-family-tree/src/components/VueFamilyTree.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFamilyTree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VueFamilyTree.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/VueFamilyTree.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFamilyTree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/vue-family-tree/src/components/components/Branch.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/vue-family-tree/src/components/components/Branch.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Branch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Branch.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/components/Branch.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Branch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/vue-family-tree/src/components/components/Card.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/vue-family-tree/src/components/components/Card.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Card.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/components/Card.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/admin/genelogy.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/admin/genelogy.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_genelogy_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./genelogy.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/genelogy.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./resources/js/vue-family-tree/src/components/components/Branch.vue?vue&type=style&index=0&id=3cf6a47a&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/vue-family-tree/src/components/components/Branch.vue?vue&type=style&index=0&id=3cf6a47a&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Branch_vue_vue_type_style_index_0_id_3cf6a47a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Branch.vue?vue&type=style&index=0&id=3cf6a47a&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/components/Branch.vue?vue&type=style&index=0&id=3cf6a47a&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/vue-family-tree/src/components/components/Card.vue?vue&type=style&index=0&id=f0e83a30&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************!*\
  !*** ./resources/js/vue-family-tree/src/components/components/Card.vue?vue&type=style&index=0&id=f0e83a30&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_style_index_0_id_f0e83a30_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Card.vue?vue&type=style&index=0&id=f0e83a30&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/components/Card.vue?vue&type=style&index=0&id=f0e83a30&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/form/Member.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/form/Member.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Member_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Member.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/Member.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/form/Member.vue?vue&type=template&id=470ca22c&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/form/Member.vue?vue&type=template&id=470ca22c& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Member_vue_vue_type_template_id_470ca22c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Member_vue_vue_type_template_id_470ca22c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Member_vue_vue_type_template_id_470ca22c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Member.vue?vue&type=template&id=470ca22c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/Member.vue?vue&type=template&id=470ca22c&");


/***/ }),

/***/ "./resources/js/views/admin/genelogy.vue?vue&type=template&id=5a7c66c9&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/admin/genelogy.vue?vue&type=template&id=5a7c66c9& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_genelogy_vue_vue_type_template_id_5a7c66c9___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_genelogy_vue_vue_type_template_id_5a7c66c9___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_genelogy_vue_vue_type_template_id_5a7c66c9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./genelogy.vue?vue&type=template&id=5a7c66c9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/genelogy.vue?vue&type=template&id=5a7c66c9&");


/***/ }),

/***/ "./resources/js/vue-family-tree/src/components/VueFamilyTree.vue?vue&type=template&id=2bc73dc7&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/vue-family-tree/src/components/VueFamilyTree.vue?vue&type=template&id=2bc73dc7& ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFamilyTree_vue_vue_type_template_id_2bc73dc7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFamilyTree_vue_vue_type_template_id_2bc73dc7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VueFamilyTree_vue_vue_type_template_id_2bc73dc7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VueFamilyTree.vue?vue&type=template&id=2bc73dc7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/VueFamilyTree.vue?vue&type=template&id=2bc73dc7&");


/***/ }),

/***/ "./resources/js/vue-family-tree/src/components/components/Branch.vue?vue&type=template&id=3cf6a47a&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/vue-family-tree/src/components/components/Branch.vue?vue&type=template&id=3cf6a47a&scoped=true& ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Branch_vue_vue_type_template_id_3cf6a47a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Branch_vue_vue_type_template_id_3cf6a47a_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Branch_vue_vue_type_template_id_3cf6a47a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Branch.vue?vue&type=template&id=3cf6a47a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/components/Branch.vue?vue&type=template&id=3cf6a47a&scoped=true&");


/***/ }),

/***/ "./resources/js/vue-family-tree/src/components/components/Card.vue?vue&type=template&id=f0e83a30&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./resources/js/vue-family-tree/src/components/components/Card.vue?vue&type=template&id=f0e83a30&scoped=true& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_f0e83a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_f0e83a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Card_vue_vue_type_template_id_f0e83a30_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Card.vue?vue&type=template&id=f0e83a30&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/components/Card.vue?vue&type=template&id=f0e83a30&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/Member.vue?vue&type=template&id=470ca22c&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/form/Member.vue?vue&type=template&id=470ca22c& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "member-card" },
    [
      _c(
        "b-button",
        { attrs: { variant: "info" }, on: { click: _vm.showModal } },
        [_vm._v("Thêm thành viên")]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            title: "Thành viên",
            size: "lg",
            "footer-class": "justify-content-between"
          },
          on: {
            close: function($event) {
              return _vm.$emit("toggleModal", false)
            }
          },
          scopedSlots: _vm._u([
            {
              key: "modal-footer",
              fn: function() {
                return [
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: _vm.formValue.id,
                          expression: "formValue.id"
                        }
                      ]
                    },
                    [
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "danger" },
                          on: {
                            click: function($event) {
                              _vm.modalDestroyShow = true
                            }
                          }
                        },
                        [_vm._v("Delete")]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "ms-auto text-right" },
                    [
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "secondary" },
                          on: {
                            click: function($event) {
                              return _vm.$emit("toggleModal", false)
                            }
                          }
                        },
                        [_vm._v("Quay lại")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "info" },
                          on: { click: _vm.submitForm }
                        },
                        [_vm._v("Xác nhận")]
                      )
                    ],
                    1
                  )
                ]
              },
              proxy: true
            }
          ]),
          model: {
            value: _vm.modalShow,
            callback: function($$v) {
              _vm.modalShow = $$v
            },
            expression: "modalShow"
          }
        },
        [
          _c(
            "b-container",
            [
              _c("b-row", [
                _c(
                  "div",
                  { staticClass: "w-100" },
                  [
                    _c("b-card", { staticClass: "mt-4" }, [
                      _c("div", { staticClass: "avatar-container" }, [
                        _vm.previewUrl || _vm.ancestor.img_link
                          ? _c("img", {
                              staticClass: "avatar-image",
                              attrs: {
                                src: _vm.previewUrl || _vm.ancestor.img_link
                              }
                            })
                          : _c("img", {
                              staticClass: "avatar-image",
                              attrs: { src: _vm.yourImage, alt: "" }
                            })
                      ])
                    ]),
                    _vm._v(" "),
                    _c("b-form-file", {
                      staticClass: "mb-3",
                      on: { change: _vm.handleFileChange },
                      scopedSlots: _vm._u([
                        {
                          key: "file-name",
                          fn: function() {
                            return [
                              _c("strong", [_vm._v("Chọn ảnh:")]),
                              _vm._v(
                                "\n                            " +
                                  _vm._s(
                                    _vm.selectedFile
                                      ? _vm.selectedFile.name
                                      : "No file chosen"
                                  ) +
                                  "\n                        "
                              )
                            ]
                          },
                          proxy: true
                        }
                      ]),
                      model: {
                        value: _vm.selectedFile,
                        callback: function($$v) {
                          _vm.selectedFile = $$v
                        },
                        expression: "selectedFile"
                      }
                    })
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "ID" } },
                        [
                          _c("b-form-input", {
                            attrs: { disabled: "" },
                            model: {
                              value: _vm.formValue.id,
                              callback: function($$v) {
                                _vm.$set(_vm.formValue, "id", $$v)
                              },
                              expression: "formValue.id"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Họ và tên" } },
                        [
                          _c("b-form-input", {
                            model: {
                              value: _vm.formValue.name,
                              callback: function($$v) {
                                _vm.$set(_vm.formValue, "name", $$v)
                              },
                              expression: "formValue.name"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Con của ông/bà" } },
                        [
                          _vm.formValue.parent_id || !_vm.formValue.id
                            ? _c("vue-select", {
                                attrs: {
                                  options: _vm.parentOptions,
                                  disabled:
                                    (!_vm.ancestor.parent_id &&
                                      !!_vm.formValue.id) ||
                                    !!_vm.formValue.spouse_id,
                                  label: "name",
                                  filterable: true,
                                  reduce: _vm.reduceOption
                                },
                                model: {
                                  value: _vm.formValue.parent_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formValue, "parent_id", $$v)
                                  },
                                  expression: "formValue.parent_id"
                                }
                              })
                            : _c("vue-select", {
                                attrs: {
                                  options: _vm.parentOptions,
                                  disabled: !_vm.ancestor.parent_id,
                                  label: "name",
                                  filterable: true,
                                  reduce: _vm.reduceOption
                                },
                                model: {
                                  value: _vm.ancestor.parent_in_law_id,
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.ancestor,
                                      "parent_in_law_id",
                                      $$v
                                    )
                                  },
                                  expression: "ancestor.parent_in_law_id"
                                }
                              })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Là con thứ: " } },
                        [
                          _c("b-form-input", {
                            attrs: { type: "number" },
                            model: {
                              value: _vm.formValue.nth,
                              callback: function($$v) {
                                _vm.$set(_vm.formValue, "nth", $$v)
                              },
                              expression: "formValue.nth"
                            }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            id: "spouse_idFormGroup",
                            label: "( Dâu/Rể ) Là vợ chồng của:"
                          }
                        },
                        [
                          _vm.formValue.spouse_id || !_vm.formValue.id
                            ? _c("vue-select", {
                                attrs: {
                                  options: _vm.spouseOptions,
                                  label: "name",
                                  disabled: !!_vm.formValue.parent_id,
                                  filterable: true,
                                  reduce: _vm.reduceOption
                                },
                                model: {
                                  value: _vm.formValue.spouse_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.formValue, "spouse_id", $$v)
                                  },
                                  expression: "formValue.spouse_id"
                                }
                              })
                            : _c("div", { staticClass: "form-control" }, [
                                _vm.ancestor.spouses
                                  ? _c("span", [
                                      _vm._v(
                                        _vm._s(
                                          _vm.ancestor.spouses
                                            .map(function(item) {
                                              return item.name
                                            })
                                            .join(" ,")
                                        )
                                      )
                                    ])
                                  : _vm._e()
                              ])
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c(
                        "b-form-group",
                        { attrs: { label: "Nam nữ" } },
                        [
                          _c(
                            "b-form-select",
                            {
                              model: {
                                value: _vm.formValue.gender,
                                callback: function($$v) {
                                  _vm.$set(_vm.formValue, "gender", $$v)
                                },
                                expression: "formValue.gender"
                              }
                            },
                            [
                              _c("option", { attrs: { value: "1" } }, [
                                _vm._v("Nam")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "2" } }, [
                                _vm._v("Nữ")
                              ])
                            ]
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: { title: "Alert", "ok-only": "" },
          on: { ok: _vm.undo },
          model: {
            value: _vm.modalDestroyShow,
            callback: function($$v) {
              _vm.modalDestroyShow = $$v
            },
            expression: "modalDestroyShow"
          }
        },
        [_vm._v("\n        Bạn thực sự muốn thực hiện hành động này ?\n    ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/genelogy.vue?vue&type=template&id=5a7c66c9&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/genelogy.vue?vue&type=template&id=5a7c66c9& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "app" } }, [
    _c(
      "div",
      { staticClass: "mt-4" },
      [
        _c("Member", {
          attrs: { modalVisible: _vm.modalVisible },
          on: {
            toggleModal: function($event) {
              return (_vm.modalVisible = $event)
            }
          }
        }),
        _vm._v(" "),
        _c("VueFamilyTree", {
          attrs: { tree: _vm.trees },
          on: { "card-click": _vm.cardClick }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/VueFamilyTree.vue?vue&type=template&id=2bc73dc7&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/VueFamilyTree.vue?vue&type=template&id=2bc73dc7& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "wrapper",
      staticClass: "vue-family-tree",
      style: Object.assign(
        {},
        {
          overflow: _vm.enableDrag ? "hidden" : null,
          cursor: _vm.dragAndDrop.mouseCursor
        },
        _vm.wrapperStyles
      ),
      on: {
        mousedown: _vm.dragstart,
        mousemove: _vm.drag,
        mouseup: _vm.dragend,
        mouseleave: _vm.dragend,
        touchstart: _vm.dragstart,
        touchmove: _vm.drag,
        touchend: _vm.dragend,
        touchcancel: _vm.dragend,
        touchleave: _vm.dragend
      }
    },
    [
      _c(
        "div",
        {
          ref: "vueFamilyTree",
          style: {
            position: _vm.enableDrag ? "absolute" : null,
            top: _vm.position.y + "px",
            left: _vm.position.x + "px"
          }
        },
        [
          _c("VueFamilyTreeBranch", {
            attrs: { tree: _vm.tree },
            on: { "card-click": _vm.cardClick },
            scopedSlots: _vm._u(
              [
                {
                  key: "card",
                  fn: function(ref) {
                    var item = ref.item
                    return [_vm._t("card", null, { item: item })]
                  }
                }
              ],
              null,
              true
            )
          })
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/components/Branch.vue?vue&type=template&id=3cf6a47a&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/components/Branch.vue?vue&type=template&id=3cf6a47a&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "vue-family-tree__branch" }, [
    _c(
      "div",
      { staticClass: "vue-family-tree__row" },
      _vm._l(_vm.tree, function(block, index) {
        return _c(
          "div",
          {
            key: index,
            staticClass: "vue-family-tree__col",
            class: {
              "vue-family-tree__col_couple":
                block.firstPerson && block.spouses.length
            }
          },
          [
            _c("div", { staticClass: "vue-family-tree__content" }, [
              _c(
                "div",
                {
                  class: {
                    "vue-family-tree__couple":
                      block.firstPerson && block.spouses.length,
                    "vue-family-tree__couple_children":
                      block.children && block.children.length
                  }
                },
                [
                  block.firstPerson
                    ? _c("div", { staticClass: "vue-family-tree__person" }, [
                        _c(
                          "div",
                          { staticClass: "vue-family-tree__card" },
                          [
                            _vm._t(
                              "card",
                              function() {
                                return [
                                  _c("Card", {
                                    attrs: {
                                      img_link: block.firstPerson.img_link,
                                      name: block.firstPerson.name,
                                      source: block.firstPerson
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.$emit("card-click", $event)
                                      }
                                    }
                                  })
                                ]
                              },
                              { item: block.firstPerson }
                            )
                          ],
                          2
                        )
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm._l(block.spouses, function(spouse) {
                    return block.spouses.length
                      ? [
                          _c(
                            "div",
                            { staticClass: "vue-family-tree__person" },
                            [
                              _c(
                                "div",
                                { staticClass: "vue-family-tree__card" },
                                [
                                  _vm._t(
                                    "card",
                                    function() {
                                      return [
                                        _c("Card", {
                                          attrs: {
                                            img_link: spouse.img_link,
                                            name: spouse.name,
                                            source: spouse
                                          },
                                          on: {
                                            click: function($event) {
                                              return _vm.$emit(
                                                "card-click",
                                                $event
                                              )
                                            }
                                          }
                                        })
                                      ]
                                    },
                                    { item: spouse }
                                  )
                                ],
                                2
                              )
                            ]
                          )
                        ]
                      : _vm._e()
                  })
                ],
                2
              )
            ]),
            _vm._v(" "),
            block.children
              ? _c("VueFamilyTreeBranch", {
                  attrs: { tree: block.children },
                  on: {
                    "card-click": function($event) {
                      return _vm.$emit("card-click", $event)
                    }
                  },
                  scopedSlots: _vm._u(
                    [
                      {
                        key: "card",
                        fn: function(ref) {
                          var item = ref.item
                          return [_vm._t("card", null, { item: item })]
                        }
                      }
                    ],
                    null,
                    true
                  )
                })
              : _vm._e()
          ],
          1
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/components/Card.vue?vue&type=template&id=f0e83a30&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/vue-family-tree/src/components/components/Card.vue?vue&type=template&id=f0e83a30&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "vue-family-card" }, [
    _c(
      "a",
      {
        staticClass: "avatar-container",
        attrs: { href: "#" },
        on: {
          click: function($event) {
            $event.preventDefault()
            return _vm.click.apply(null, arguments)
          }
        }
      },
      [
        _c("img", {
          staticClass: "avatar-image",
          attrs: { src: _vm.img_link, alt: "" }
        })
      ]
    ),
    _vm._v(" "),
    _c("div", { staticClass: "vue-family-card__name" }, [
      _c(
        "a",
        {
          attrs: { href: "#" },
          on: {
            click: function($event) {
              $event.preventDefault()
              return _vm.click.apply(null, arguments)
            }
          }
        },
        [_vm._v("\n            " + _vm._s(_vm.name) + "\n        ")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);