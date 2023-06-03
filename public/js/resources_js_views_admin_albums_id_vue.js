(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_albums_id_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/AlbumForm.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/AlbumForm.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  props: {
    album: {
      type: Object,
      required: true
    }
  },
  data: function data() {
    return {
      form: {
        title: "",
        description: ""
      },
      showModal: false
    };
  },
  watch: {
    album: {
      immediate: true,
      handler: function handler() {
        this.form.title = this.album.title;
        this.form.description = this.album.description;
      }
    }
  },
  methods: {
    openModal: function openModal() {
      this.showModal = true;
    },
    submitForm: function submitForm() {
      // Emit an event with the updated album data
      this.$emit("update-album", {
        id: this.album.id,
        albumData: this.form
      });
      this.showModal = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/albums/id.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/albums/id.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/router.js */ "./resources/js/router.js");
/* harmony import */ var vue_picture_swipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-picture-swipe */ "./node_modules/vue-picture-swipe/src/main.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_pages_AlbumForm_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/pages/AlbumForm.vue */ "./resources/js/components/pages/AlbumForm.vue");

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






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    VuePictureSwipe: vue_picture_swipe__WEBPACK_IMPORTED_MODULE_2__.default,
    EditAlbum: _components_pages_AlbumForm_vue__WEBPACK_IMPORTED_MODULE_4__.default
  },
  setup: function setup(props, _ref) {
    var root = _ref.root;
    var store = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__.inject)("vuex-store");
    var album = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__.computed)(function () {
      return store.state.album.album;
    });
    var items = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__.computed)(function () {
      return album.value.images ? album.value.images.map(transformImage) : [];
    });
    var uploadModalOpen = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__.ref)(false);
    var deleteModalOpen = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__.ref)(false);
    var deleteImagesModalOpen = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__.ref)(false);
    var selectedFiles = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__.ref)([]);
    var imagePreviews = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__.ref)([]);
    var selectedImages = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__.ref)([]);
    (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_5__.onMounted)(function () {
      return store.dispatch("showAlbum", root.$route.params.id);
    });
    function updateAlbum(payload) {
      store.dispatch("updateAlbum", payload);
    }
    function showUploadModal() {
      uploadModalOpen.value = true;
    }
    function handleFileInputChange(event) {
      selectedFiles.value = Array.from(event.target.files);
      generateImagePreviews();
    }
    function generateImagePreviews() {
      imagePreviews.value = [];
      selectedFiles.value.forEach(function (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
          imagePreviews.value.push({
            id: generateId(),
            src: e.target.result,
            name: file.name
          });
        };
        reader.readAsDataURL(file);
      });
    }
    function generateId() {
      return Math.random().toString(36).substr(2, 9);
    }
    function uploadImages() {
      return _uploadImages.apply(this, arguments);
    }
    function _uploadImages() {
      _uploadImages = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var formData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                formData = new FormData();
                selectedFiles.value.forEach(function (file) {
                  formData.append("images[]", file);
                });
                _context.prev = 2;
                _context.next = 5;
                return axios__WEBPACK_IMPORTED_MODULE_3___default().post("http://127.0.0.1:8000/api/albums/".concat(album.value.id, "/images"), formData, {
                  headers: {
                    "Content-Type": "multipart/form-data"
                  }
                });
              case 5:
                // Success message or additional logic
                uploadModalOpen.value = false;
                selectedFiles.value = [];
                imagePreviews.value = [];
                _context.next = 12;
                break;
              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[2, 10]]);
      }));
      return _uploadImages.apply(this, arguments);
    }
    function transformImage(image) {
      return {
        src: image.url,
        thumbnail: image.url,
        w: 1000,
        h: 800
      };
    }
    function showDeleteModal() {
      deleteModalOpen.value = true;
    }
    function deleteAlbum() {
      store.dispatch("deleteAlbum", root.$route.params.id);
      _router_js__WEBPACK_IMPORTED_MODULE_1__.default.push('/albums');
      deleteModalOpen.value = false;
    }
    function showDeleteImagesModal() {
      selectedImages.value = [];
      deleteImagesModalOpen.value = true;
    }
    function deleteImages() {
      return _deleteImages.apply(this, arguments);
    }
    function _deleteImages() {
      _deleteImages = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return store.dispatch("deleteImages", selectedImages.value);
              case 2:
                store.dispatch("showAlbum", root.$route.params.id);
              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
      return _deleteImages.apply(this, arguments);
    }
    return {
      album: album,
      items: items,
      imagePreviews: imagePreviews,
      uploadModalOpen: uploadModalOpen,
      deleteModalOpen: deleteModalOpen,
      deleteImagesModalOpen: deleteImagesModalOpen,
      selectedFiles: selectedFiles,
      selectedImages: selectedImages,
      showUploadModal: showUploadModal,
      handleFileInputChange: handleFileInputChange,
      generateImagePreviews: generateImagePreviews,
      uploadImages: uploadImages,
      updateAlbum: updateAlbum,
      showDeleteModal: showDeleteModal,
      deleteAlbum: deleteAlbum,
      showDeleteImagesModal: showDeleteImagesModal,
      deleteImages: deleteImages
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/albums/id.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/albums/id.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* Your styles */\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/albums/id.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/albums/id.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./id.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/albums/id.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/pages/AlbumForm.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/pages/AlbumForm.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AlbumForm_vue_vue_type_template_id_5166e0a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AlbumForm.vue?vue&type=template&id=5166e0a6& */ "./resources/js/components/pages/AlbumForm.vue?vue&type=template&id=5166e0a6&");
/* harmony import */ var _AlbumForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AlbumForm.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/AlbumForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AlbumForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AlbumForm_vue_vue_type_template_id_5166e0a6___WEBPACK_IMPORTED_MODULE_0__.render,
  _AlbumForm_vue_vue_type_template_id_5166e0a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/AlbumForm.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/albums/id.vue":
/*!************************************************!*\
  !*** ./resources/js/views/admin/albums/id.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _id_vue_vue_type_template_id_66af64b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./id.vue?vue&type=template&id=66af64b7& */ "./resources/js/views/admin/albums/id.vue?vue&type=template&id=66af64b7&");
/* harmony import */ var _id_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./id.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/albums/id.vue?vue&type=script&lang=js&");
/* harmony import */ var _id_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./id.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/admin/albums/id.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _id_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _id_vue_vue_type_template_id_66af64b7___WEBPACK_IMPORTED_MODULE_0__.render,
  _id_vue_vue_type_template_id_66af64b7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/albums/id.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/AlbumForm.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/pages/AlbumForm.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbumForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AlbumForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/AlbumForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbumForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/admin/albums/id.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/admin/albums/id.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./id.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/albums/id.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/admin/albums/id.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/admin/albums/id.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./id.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/albums/id.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/pages/AlbumForm.vue?vue&type=template&id=5166e0a6&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/pages/AlbumForm.vue?vue&type=template&id=5166e0a6& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbumForm_vue_vue_type_template_id_5166e0a6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbumForm_vue_vue_type_template_id_5166e0a6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AlbumForm_vue_vue_type_template_id_5166e0a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AlbumForm.vue?vue&type=template&id=5166e0a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/AlbumForm.vue?vue&type=template&id=5166e0a6&");


/***/ }),

/***/ "./resources/js/views/admin/albums/id.vue?vue&type=template&id=66af64b7&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/admin/albums/id.vue?vue&type=template&id=66af64b7& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_template_id_66af64b7___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_template_id_66af64b7___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_template_id_66af64b7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./id.vue?vue&type=template&id=66af64b7& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/albums/id.vue?vue&type=template&id=66af64b7&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/AlbumForm.vue?vue&type=template&id=5166e0a6&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/AlbumForm.vue?vue&type=template&id=5166e0a6& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "b-button",
        { attrs: { variant: "info" }, on: { click: _vm.openModal } },
        [
          _vm._t("default", function() {
            return [_vm._v("Edit")]
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: { title: "Edit Album" },
          on: { ok: _vm.submitForm },
          model: {
            value: _vm.showModal,
            callback: function($$v) {
              _vm.showModal = $$v
            },
            expression: "showModal"
          }
        },
        [
          _c(
            "b-form",
            [
              _c(
                "b-form-group",
                { attrs: { label: "Title", "label-for": "title" } },
                [
                  _c("b-form-input", {
                    attrs: { id: "title", required: "" },
                    model: {
                      value: _vm.form.title,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "title", $$v)
                      },
                      expression: "form.title"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                { attrs: { label: "Description", "label-for": "description" } },
                [
                  _c("b-form-textarea", {
                    attrs: { id: "description" },
                    model: {
                      value: _vm.form.description,
                      callback: function($$v) {
                        _vm.$set(_vm.form, "description", $$v)
                      },
                      expression: "form.description"
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/albums/id.vue?vue&type=template&id=66af64b7&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/albums/id.vue?vue&type=template&id=66af64b7& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "b-card",
        {
          scopedSlots: _vm._u([
            {
              key: "header",
              fn: function() {
                return [
                  _c("b-row", { staticClass: "justify-content-between" }, [
                    _c("div", [_vm._v(_vm._s(_vm.album.title))])
                  ])
                ]
              },
              proxy: true
            },
            {
              key: "footer",
              fn: function() {
                return [
                  _c(
                    "div",
                    {
                      staticClass:
                        "d-flex align-items-center justify-content-around gx-5"
                    },
                    [
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "info" },
                          on: { click: _vm.showUploadModal }
                        },
                        [_vm._v("Add New Images")]
                      ),
                      _vm._v(" "),
                      _c("edit-album", {
                        attrs: { album: _vm.album },
                        on: { "update-album": _vm.updateAlbum }
                      }),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        { attrs: { variant: "info" } },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "text-white",
                              attrs: { to: "/albums" }
                            },
                            [_vm._v("Back to Albums")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "danger" },
                          on: { click: _vm.showDeleteModal }
                        },
                        [_vm._v("Delete Album")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "danger" },
                          on: { click: _vm.showDeleteImagesModal }
                        },
                        [_vm._v("Delete Images")]
                      )
                    ],
                    1
                  )
                ]
              },
              proxy: true
            }
          ])
        },
        [_vm._v(" "), _c("vue-picture-swipe", { attrs: { items: _vm.items } })],
        1
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: { title: "Add Images" },
          scopedSlots: _vm._u([
            {
              key: "modal-footer",
              fn: function() {
                return [
                  _c(
                    "div",
                    [
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "info" },
                          on: { click: _vm.uploadImages }
                        },
                        [_vm._v("OK")]
                      ),
                      _vm._v(" "),
                      _c("router-link", { attrs: { to: "/albums" } }, [
                        _vm._v("Back to Albums")
                      ])
                    ],
                    1
                  )
                ]
              },
              proxy: true
            }
          ]),
          model: {
            value: _vm.uploadModalOpen,
            callback: function($$v) {
              _vm.uploadModalOpen = $$v
            },
            expression: "uploadModalOpen"
          }
        },
        [
          _c(
            "div",
            [
              _c("input", {
                attrs: { type: "file", multiple: "" },
                on: { change: _vm.handleFileInputChange }
              }),
              _vm._v(" "),
              _vm._l(_vm.imagePreviews, function(preview) {
                return _c("div", { key: preview.id }, [
                  _c("img", {
                    attrs: {
                      src: preview.src,
                      alt: preview.name,
                      width: "100",
                      height: "100"
                    }
                  })
                ])
              })
            ],
            2
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: { title: "Confirm Delete" },
          scopedSlots: _vm._u([
            {
              key: "modal-footer",
              fn: function() {
                return [
                  _c(
                    "div",
                    [
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "primary" },
                          on: { click: _vm.deleteAlbum }
                        },
                        [_vm._v("Delete")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "secondary" },
                          on: {
                            click: function($event) {
                              _vm.deleteModalOpen = false
                            }
                          }
                        },
                        [_vm._v("Cancel")]
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
            value: _vm.deleteModalOpen,
            callback: function($$v) {
              _vm.deleteModalOpen = $$v
            },
            expression: "deleteModalOpen"
          }
        },
        [_c("div", [_vm._v("Are you sure you want to delete this album?")])]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: { size: "xl", title: "Delete Images" },
          scopedSlots: _vm._u([
            {
              key: "modal-footer",
              fn: function() {
                return [
                  _c(
                    "div",
                    [
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "primary" },
                          on: { click: _vm.deleteImages }
                        },
                        [_vm._v("Delete")]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "secondary" },
                          on: {
                            click: function($event) {
                              _vm.deleteImagesModalOpen = false
                            }
                          }
                        },
                        [_vm._v("Cancel")]
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
            value: _vm.deleteImagesModalOpen,
            callback: function($$v) {
              _vm.deleteImagesModalOpen = $$v
            },
            expression: "deleteImagesModalOpen"
          }
        },
        [
          _c(
            "div",
            _vm._l(_vm.album.images, function(image) {
              return _c("div", { key: image.id }, [
                _c("label", [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.selectedImages,
                        expression: "selectedImages"
                      }
                    ],
                    attrs: { type: "checkbox" },
                    domProps: {
                      value: image.id,
                      checked: Array.isArray(_vm.selectedImages)
                        ? _vm._i(_vm.selectedImages, image.id) > -1
                        : _vm.selectedImages
                    },
                    on: {
                      change: function($event) {
                        var $$a = _vm.selectedImages,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = image.id,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 && (_vm.selectedImages = $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              (_vm.selectedImages = $$a
                                .slice(0, $$i)
                                .concat($$a.slice($$i + 1)))
                          }
                        } else {
                          _vm.selectedImages = $$c
                        }
                      }
                    }
                  })
                ]),
                _vm._v(" "),
                _c("img", { attrs: { src: image.url, alt: "" } })
              ])
            }),
            0
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);