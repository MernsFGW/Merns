/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst config = {\n  env: \"development\" || 0,\n  port: process.env.PORT || 3000,\n  jwtSecret: process.env.JWT_SECRET || \"mysecretkey123\",\n  mongoUri: process.env.MONGODB_URI || \"mongodb+srv://admin:admin@cluster0.edsdngb.mongodb.net/?retryWrites=true&w=majority\",\n  cloudName: process.env.CLOUD_NAME || \"dvxfixf5q\",\n  cloudApiKey: process.env.CLOUD_API_KEY || \"431122752423812\",\n  cloudApiSecret: process.env.CLOUD_API_SECRET || \"fVCKQfYd94d2zZBtO8qVLqCYX44\"\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n//# sourceURL=webpack://server/./config/config.js?");

/***/ }),

/***/ "./controllers/categories.controller/create/create.controller.js":
/*!***********************************************************************!*\
  !*** ./controllers/categories.controller/create/create.controller.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_category_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/category.model */ \"./models/category.model.js\");\n/* harmony import */ var _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/dbErrorHandler.js */ \"./helpers/dbErrorHandler.js\");\n\n\nconst createCategory = async (req, res) => {\n  try {\n    const category = req.body;\n    const newCategory = new _models_category_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](category);\n    await newCategory.save();\n    res.status(201).json(newCategory);\n  } catch (error) {\n    res.status(400).json({\n      error: _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(error)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  createCategory\n});\n\n//# sourceURL=webpack://server/./controllers/categories.controller/create/create.controller.js?");

/***/ }),

/***/ "./controllers/categories.controller/get/getCategoryById.controller.js":
/*!*****************************************************************************!*\
  !*** ./controllers/categories.controller/get/getCategoryById.controller.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_category_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/category.model */ \"./models/category.model.js\");\n/* harmony import */ var _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/dbErrorHandler.js */ \"./helpers/dbErrorHandler.js\");\n\n\nconst getCategoryById = async (req, res) => {\n  try {\n    const {\n      id\n    } = req.params;\n    const category = await _models_category_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id);\n    if (!category) return res(404).json({\n      message: 'No category with that id'\n    });\n    res.status(200).json(category);\n  } catch (error) {\n    res.status(400).json({\n      error: _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(error)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  getCategoryById\n});\n\n//# sourceURL=webpack://server/./controllers/categories.controller/get/getCategoryById.controller.js?");

/***/ }),

/***/ "./controllers/categories.controller/list/list.controller.js":
/*!*******************************************************************!*\
  !*** ./controllers/categories.controller/list/list.controller.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_category_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/category.model */ \"./models/category.model.js\");\n\nconst getAllCategories = async (req, res) => {\n  try {\n    const categories = await _models_category_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find();\n    res.status(200).json(categories);\n  } catch (error) {\n    res.status(404).json({\n      message: error.message\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  getAllCategories\n});\n\n//# sourceURL=webpack://server/./controllers/categories.controller/list/list.controller.js?");

/***/ }),

/***/ "./controllers/categories.controller/remove/remove.controller.js":
/*!***********************************************************************!*\
  !*** ./controllers/categories.controller/remove/remove.controller.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_category_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/category.model */ \"./models/category.model.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst removeCategory = async (req, res) => {\n  try {\n    const {\n      id\n    } = req.params;\n    if (!mongoose__WEBPACK_IMPORTED_MODULE_1___default().Types.ObjectId.isValid(id)) return res.status(404).send('No category with that id');\n    await _models_category_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndRemove(id);\n    res.json({\n      message: 'Category deleted successfully'\n    });\n  } catch (error) {\n    res.status(400).json({\n      error: errorHandler.getErrorMessage(error)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  removeCategory\n});\n\n//# sourceURL=webpack://server/./controllers/categories.controller/remove/remove.controller.js?");

/***/ }),

/***/ "./controllers/categories.controller/update/update.controller.js":
/*!***********************************************************************!*\
  !*** ./controllers/categories.controller/update/update.controller.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_category_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/category.model */ \"./models/category.model.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst updateCategory = async (req, res) => {\n  try {\n    const {\n      id: _id\n    } = req.params;\n    const category = req.body;\n    if (!mongoose__WEBPACK_IMPORTED_MODULE_1___default().Types.ObjectId.isValid(_id)) return res.status(404).send('No category with that id');\n    const updatedCategory = await _models_category_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(_id, {\n      ...category,\n      _id\n    }, {\n      new: true\n    });\n    res.json(updatedCategory);\n  } catch (error) {\n    res.status(400).json({\n      error: errorHandler.getErrorMessage(error)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  updateCategory\n});\n\n//# sourceURL=webpack://server/./controllers/categories.controller/update/update.controller.js?");

/***/ }),

/***/ "./controllers/departments.controller/create/create.controller.js":
/*!************************************************************************!*\
  !*** ./controllers/departments.controller/create/create.controller.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_department_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../models/department.model */ \"./models/department.model.js\");\n\nconst create = async (req, res) => {\n  const {\n    title\n  } = req.body;\n  try {\n    const newDepartment = new _models_department_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      title\n    });\n    await newDepartment.save();\n    res.status(201).json(newDepartment);\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  create\n});\n\n//# sourceURL=webpack://server/./controllers/departments.controller/create/create.controller.js?");

/***/ }),

/***/ "./controllers/departments.controller/id/id.controller.js":
/*!****************************************************************!*\
  !*** ./controllers/departments.controller/id/id.controller.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_department_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../models/department.model */ \"./models/department.model.js\");\n\nconst departmentById = async (req, res) => {\n  try {\n    const {\n      id\n    } = req.params;\n    console.log(id);\n    const department = await _models_department_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id);\n    if (!department) return res.status(400).json({\n      error: \"Department not found\"\n    });\n    res.status(200).json(department);\n  } catch (err) {\n    return res.status(400).json({\n      error: \"Could not retrieve department\"\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  departmentById\n});\n\n//# sourceURL=webpack://server/./controllers/departments.controller/id/id.controller.js?");

/***/ }),

/***/ "./controllers/departments.controller/list/list.controllers.js":
/*!*********************************************************************!*\
  !*** ./controllers/departments.controller/list/list.controllers.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/dbErrorHandler.js */ \"./helpers/dbErrorHandler.js\");\n/* harmony import */ var _models_department_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../models/department.model */ \"./models/department.model.js\");\n\n\nconst list = async (req, res) => {\n  try {\n    let ideas = await _models_department_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n    res.json(ideas);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  list\n});\n\n//# sourceURL=webpack://server/./controllers/departments.controller/list/list.controllers.js?");

/***/ }),

/***/ "./controllers/departments.controller/remove/remove.controllers.js":
/*!*************************************************************************!*\
  !*** ./controllers/departments.controller/remove/remove.controllers.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/dbErrorHandler.js */ \"./helpers/dbErrorHandler.js\");\n/* harmony import */ var _models_department_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../models/department.model */ \"./models/department.model.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst remove = async (req, res) => {\n  try {\n    const {\n      id\n    } = req.params;\n    if (!mongoose__WEBPACK_IMPORTED_MODULE_2___default().Types.ObjectId.isValid(id)) return res.status(404).send('No term with that id');\n    await _models_department_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndRemove(id);\n    res.status(200).json({\n      message: \"Deleted department Successfully\"\n    });\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  remove\n});\n\n//# sourceURL=webpack://server/./controllers/departments.controller/remove/remove.controllers.js?");

/***/ }),

/***/ "./controllers/departments.controller/update/update.controllers.js":
/*!*************************************************************************!*\
  !*** ./controllers/departments.controller/update/update.controllers.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/dbErrorHandler.js */ \"./helpers/dbErrorHandler.js\");\n/* harmony import */ var _models_department_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../models/department.model */ \"./models/department.model.js\");\n\n\nconst update = async (req, res) => {\n  const {\n    id\n  } = req.params;\n  const department = await _models_department_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(id);\n  department.updatedAt = Date.now();\n  department.title = req.body.title;\n  try {\n    await department.save();\n    res.json({\n      department: department,\n      message: \"Updated department successfully\"\n    });\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  update\n});\n\n//# sourceURL=webpack://server/./controllers/departments.controller/update/update.controllers.js?");

/***/ }),

/***/ "./controllers/document.controller/download/download.controller.js":
/*!*************************************************************************!*\
  !*** ./controllers/document.controller/download/download.controller.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cloudinary */ \"cloudinary\");\n/* harmony import */ var cloudinary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cloudinary__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var archiver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! archiver */ \"archiver\");\n/* harmony import */ var archiver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(archiver__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/dbErrorHandler.js */ \"./helpers/dbErrorHandler.js\");\n/* harmony import */ var _models_idea_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/idea.model */ \"./models/idea.model.js\");\n\n\n\n\nconst downloadImages = async (req, res) => {\n  const {\n    ideaId\n  } = req.params;\n  try {\n    // Get all images urls of the idea\n    const idea = await _models_idea_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findById(ideaId);\n    const imageUrl = idea.photo.url;\n    const publicId = idea.photo.public_id;\n\n    // Download images\n    const archive = archiver__WEBPACK_IMPORTED_MODULE_1___default()(\"zip\", {\n      zlib: {\n        level: 9\n      }\n    });\n\n    // Set the archive name \n    res.attachment(`images-${ideaId}.zip`);\n\n    // Pipe the archive to the response\n    archive.pipe(res);\n\n    // Get Image from Cloudinary\n    const resource = await cloudinary__WEBPACK_IMPORTED_MODULE_0___default().v2.api.resource(publicId);\n    const imageStream = cloudinary__WEBPACK_IMPORTED_MODULE_0___default().v2.uploader.download(resource.id);\n    archive.append(imageStream, {\n      name: publicId\n    });\n\n    // Finalize the archive and send it to the client\n    archive.finalize();\n    archive.pipe(res);\n  } catch (error) {\n    console.log(error);\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(error)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  downloadImages\n});\n\n//# sourceURL=webpack://server/./controllers/document.controller/download/download.controller.js?");

/***/ }),

/***/ "./controllers/feedbacks.controller/create/create.controller.js":
/*!**********************************************************************!*\
  !*** ./controllers/feedbacks.controller/create/create.controller.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_feedback_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../models/feedback.model */ \"./models/feedback.model.js\");\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../models/user.model */ \"./models/user.model.js\");\n/* harmony import */ var _models_idea_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../models/idea.model */ \"./models/idea.model.js\");\n/* harmony import */ var _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/dbErrorHandler.js */ \"./helpers/dbErrorHandler.js\");\n\n\n\n\nconst create = async (req, res) => {\n  try {\n    const {\n      ideaId,\n      content,\n      userId,\n      incognito\n    } = req.body;\n    const user = await _models_user_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(userId);\n    const idea = await _models_idea_model__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(ideaId).populate(\"userId\").exec();\n    if (!user) {\n      return res.status(400).json({\n        error: \"User not found\"\n      });\n    }\n    const {\n      fullName,\n      departmentId,\n      roleId,\n      _id\n    } = user;\n    let feedback = new _models_feedback_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      ideaId,\n      userId: {\n        _id,\n        fullName,\n        departmentId,\n        roleId\n      },\n      content,\n      incognito\n    });\n    const savedFeedback = await (await feedback.save()).execPopulate({\n      path: \"ideaId\",\n      select: \"content userId\",\n      populate: {\n        path: \"userId\",\n        select: \"username\"\n      }\n    });\n    res.status(200).json(savedFeedback);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  create\n});\n\n//# sourceURL=webpack://server/./controllers/feedbacks.controller/create/create.controller.js?");

/***/ }),

/***/ "./controllers/feedbacks.controller/download/download.controller.js":
/*!**************************************************************************!*\
  !*** ./controllers/feedbacks.controller/download/download.controller.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/dbErrorHandler.js */ \"./helpers/dbErrorHandler.js\");\n/* harmony import */ var _models_feedback_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/feedback.model */ \"./models/feedback.model.js\");\n/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! buffer */ \"buffer\");\n/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst download = async (req, res) => {\n  const {\n    ideaId,\n    parentId\n  } = req.params;\n  try {\n    let conditions = {};\n    if (ideaId && parentId) {\n      conditions = {\n        $or: [{\n          parentFeedbackId: parentId\n        }, {\n          ideaId: ideaId\n        }]\n      };\n    } else if (ideaId) {\n      conditions = {\n        ideaId: ideaId\n      };\n    } else if (parentId) {\n      conditions = {\n        parentFeedbackId: parentId\n      };\n    }\n    const feedbacks = await _models_feedback_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(conditions).populate(\"userId\", \"username\").populate(\"parentFeedbackId\").lean();\n    const records = feedbacks.map(feedback => {\n      return {\n        content: feedback.content,\n        incognito: feedback.incognito,\n        userId: feedback.userId._id,\n        userName: feedback.userId.username,\n        parentFeedbackId: feedback.parentFeedbackId[0]?._id\n      };\n    });\n    const header = Object.keys(records[0]).toString();\n    const main = records.map(record => Object.values(record).toString());\n    const csv = [header, ...main].join(\"\\n\");\n    const blob = new buffer__WEBPACK_IMPORTED_MODULE_2__.Blob([csv], {\n      type: \"application/csv\"\n    });\n    res.setHeader(\"Content-Disposition\", \"attachment; filename=feedbacks.csv\");\n    res.set(\"Content-Type\", \"text/csv\");\n    res.status(200).send(blob);\n  } catch (error) {\n    console.log(error);\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getErrorMessage(error)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  download\n});\n\n//# sourceURL=webpack://server/./controllers/feedbacks.controller/download/download.controller.js?");

/***/ }),

/***/ "./controllers/feedbacks.controller/findById/findById.controller.js":
/*!**************************************************************************!*\
  !*** ./controllers/feedbacks.controller/findById/findById.controller.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/dbErrorHandler.js */ \"./helpers/dbErrorHandler.js\");\n/* harmony import */ var _models_feedback_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/feedback.model */ \"./models/feedback.model.js\");\n\n\nconst findById = async (req, res) => {\n  try {\n    const feedback = await _models_feedback_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(req.params.id);\n    if (!feedback) {\n      return res.status(404).send();\n    }\n    res.status(200).json(feedback);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  findById\n});\n\n//# sourceURL=webpack://server/./controllers/feedbacks.controller/findById/findById.controller.js?");

/***/ }),

/***/ "./controllers/feedbacks.controller/id/id.controller.js":
/*!**************************************************************!*\
  !*** ./controllers/feedbacks.controller/id/id.controller.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/dbErrorHandler.js */ \"./helpers/dbErrorHandler.js\");\n/* harmony import */ var _models_feedback_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../models/feedback.model.js */ \"./models/feedback.model.js\");\n\n\nconst feedbackById = async (req, res, next, feedbackId) => {\n  try {\n    const feedback = await _models_feedback_model_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(feedbackId).populate(\"ideaId\").populate(\"userId\").populate(\"parentFeedbackId\").exec();\n    if (!feedback) {\n      return res.status(404).send();\n    }\n    req.feedback = feedback;\n    next();\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  feedbackById\n});\n\n//# sourceURL=webpack://server/./controllers/feedbacks.controller/id/id.controller.js?");

/***/ }),

/***/ "./controllers/feedbacks.controller/list/list.controllers.js":
/*!*******************************************************************!*\
  !*** ./controllers/feedbacks.controller/list/list.controllers.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/dbErrorHandler.js */ \"./helpers/dbErrorHandler.js\");\n/* harmony import */ var _models_feedback_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../models/feedback.model */ \"./models/feedback.model.js\");\n\n\nconst listFeedbacks = async (req, res) => {\n  try {\n    const {\n      start,\n      end,\n      ideaId\n    } = req.query;\n    let feedbacks = {};\n    if (start && end) {\n      const startIndex = parseInt(start);\n      const endIndex = parseInt(end);\n      feedbacks = await _models_feedback_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(ideaId ? {\n        ideaId\n      } : {}).skip(startIndex).limit(endIndex - startIndex).sort({\n        \"createdAt\": -1\n      });\n    } else {\n      feedbacks = await _models_feedback_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(ideaId ? {\n        ideaId\n      } : {}).sort({\n        createdAt: -1\n      });\n    }\n    res.json(feedbacks);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  listFeedbacks\n});\n\n//# sourceURL=webpack://server/./controllers/feedbacks.controller/list/list.controllers.js?");

/***/ }),

/***/ "./controllers/feedbacks.controller/remove/remove.controllers.js":
/*!***********************************************************************!*\
  !*** ./controllers/feedbacks.controller/remove/remove.controllers.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/dbErrorHandler.js */ \"./helpers/dbErrorHandler.js\");\n/* harmony import */ var _models_feedback_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../models/feedback.model.js */ \"./models/feedback.model.js\");\n\n\nconst remove = async (req, res) => {\n  try {\n    const feedbackId = req.params.feedbackId;\n    const feedback = await _models_feedback_model_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndDelete(feedbackId);\n    if (!feedback) {\n      return res.status(404).json({\n        message: \"Feedback not found\"\n      });\n    }\n    res.json({\n      message: \"Feedback removed successfully\"\n    });\n  } catch (error) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getErrorMessage(error)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  remove\n});\n\n//# sourceURL=webpack://server/./controllers/feedbacks.controller/remove/remove.controllers.js?");

/***/ }),

/***/ "./controllers/feedbacks.controller/update/update.controller.js":
/*!**********************************************************************!*\
  !*** ./controllers/feedbacks.controller/update/update.controller.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/dbErrorHandler.js */ \"./helpers/dbErrorHandler.js\");\n/* harmony import */ var _models_feedback_model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/feedback.model.js */ \"./models/feedback.model.js\");\n\n\nconst update = async (req, res) => {\n  const feedbackId = req.params.feedbackId;\n  const {\n    content\n  } = req.body;\n  try {\n    const feedback = await _models_feedback_model_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndUpdate(feedbackId, {\n      content\n    }, {\n      new: true\n    });\n    if (!feedback) {\n      return res.status(404).json({\n        message: \"Feedback not found\"\n      });\n    }\n    res.json(feedback);\n  } catch (error) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getErrorMessage(error)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  update\n});\n\n//# sourceURL=webpack://server/./controllers/feedbacks.controller/update/update.controller.js?");

/***/ }),

/***/ "./controllers/ideas.controller/create/create.controller.js":
/*!******************************************************************!*\
  !*** ./controllers/ideas.controller/create/create.controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_idea_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../models/idea.model */ \"./models/idea.model.js\");\n/* harmony import */ var _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/dbErrorHandler.js */ \"./helpers/dbErrorHandler.js\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_cloudinary_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/cloudinary.js */ \"./helpers/cloudinary.js\");\n/* harmony import */ var _helpers_cloudinary_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_helpers_cloudinary_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n// import fs from 'fs';\n\n\nconst create = async (req, res) => {\n  let form = new (formidable__WEBPACK_IMPORTED_MODULE_2___default().IncomingForm)();\n  form.keepExtension = true;\n  form.parse(req, async (err, fields, files) => {\n    if (err) {\n      return res.status(400).json({\n        error: \"File could not be uploaded\"\n      });\n    }\n    let idea = new _models_idea_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](fields);\n    idea.userId = req.profile;\n    if (files.photo) {\n      const photoResult = await _helpers_cloudinary_js__WEBPACK_IMPORTED_MODULE_3___default().uploader.upload(files.photo.path, {\n        folder: \"Photo\"\n      });\n      idea.photo.public_id = photoResult.public_id;\n      idea.photo.url = photoResult.secure_url;\n    }\n    try {\n      let ideaResult = await idea.save();\n      ideaResult = await ideaResult.execPopulate('categoryId');\n      res.status(200).json({\n        idea: ideaResult,\n        message: \"Created idea successfully\"\n      });\n    } catch (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n      });\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  create\n});\n\n//# sourceURL=webpack://server/./controllers/ideas.controller/create/create.controller.js?");

/***/ }),

/***/ "./controllers/ideas.controller/dislike/dislike.controller.js":
/*!********************************************************************!*\
  !*** ./controllers/ideas.controller/dislike/dislike.controller.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_idea_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../models/idea.model */ \"./models/idea.model.js\");\n/* harmony import */ var _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/dbErrorHandler.js */ \"./helpers/dbErrorHandler.js\");\n\n\n\nconst dislikeIdea = async (req, res) => {\n  try {\n    const {\n      id\n    } = req.params;\n    if (!req.params.userId) return res.status(404).json({\n      message: \"Unauthenticated\"\n    });\n    if (!mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId.isValid(id)) return res.status(404).send('No idea with that id');\n    const idea = await _models_idea_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(id);\n    idea.dislikes.push(req.params.userId);\n\n    // const updatedIdea = await Idea.findByIdAndUpdate(id, { likes: idea.likes + 1 }, { new: true });\n    const updatedIdea = await _models_idea_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndUpdate(id, idea, {\n      new: true\n    });\n    res.status(200).json(updatedIdea);\n  } catch (error) {\n    res.status(400).json({\n      error: _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(error)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  dislikeIdea\n});\n\n//# sourceURL=webpack://server/./controllers/ideas.controller/dislike/dislike.controller.js?");

/***/ }),

/***/ "./controllers/ideas.controller/dislike/undislike.controller.js":
/*!**********************************************************************!*\
  !*** ./controllers/ideas.controller/dislike/undislike.controller.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_idea_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../models/idea.model */ \"./models/idea.model.js\");\n/* harmony import */ var _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/dbErrorHandler.js */ \"./helpers/dbErrorHandler.js\");\n\n\n\nconst undislikeIdea = async (req, res) => {\n  try {\n    const {\n      id\n    } = req.params;\n    if (!req.params.userId) return res.status(404).json({\n      message: \"Unauthenticated\"\n    });\n    if (!mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId.isValid(id)) return res.status(404).send('No idea with that id');\n    const idea = await _models_idea_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(id);\n    await idea.dislikes.pull(req.params.userId);\n    const updatedIdea = await _models_idea_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndUpdate(id, idea, {\n      new: true\n    });\n    res.status(200).json(updatedIdea);\n  } catch (error) {\n    res.status(400).json({\n      error: _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(error)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  undislikeIdea\n});\n\n//# sourceURL=webpack://server/./controllers/ideas.controller/dislike/undislike.controller.js?");

/***/ }),

/***/ "./controllers/ideas.controller/download/download.controller.js":
/*!**********************************************************************!*\
  !*** ./controllers/ideas.controller/download/download.controller.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/dbErrorHandler.js */ \"./helpers/dbErrorHandler.js\");\n/* harmony import */ var _models_idea_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/idea.model */ \"./models/idea.model.js\");\n/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! buffer */ \"buffer\");\n/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst download = async (req, res) => {\n  const {\n    ideaId,\n    userId\n  } = req.params;\n  try {\n    let conditions = {};\n    if (ideaId && userId) {\n      conditions = {\n        $or: [{\n          userId: userId\n        }, {\n          ideaId: ideaId\n        }]\n      };\n    } else if (ideaId) {\n      conditions = {\n        ideaId: ideaId\n      };\n    } else if (userId) {\n      conditions = {\n        userId: userId\n      };\n    }\n    const ideas = await _models_idea_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(conditions).populate(\"userId\", \"username\").lean();\n    const records = ideas.map(idea => {\n      return {\n        title: idea.title,\n        content: idea.content,\n        incognito: idea.incognito,\n        userId: idea.userId._id,\n        userName: idea.userId.username\n      };\n    });\n    const header = Object.keys(records[0]).toString();\n    const main = records.map(record => Object.values(record).toString());\n    const csv = [header, ...main].join(\"\\n\");\n    const blob = new buffer__WEBPACK_IMPORTED_MODULE_2__.Blob([csv], {\n      type: \"application/csv\"\n    });\n    res.setHeader(\"Content-Disposition\", \"attachment; filename=feedbacks.csv\");\n    res.set(\"Content-Type\", \"text/csv\");\n    res.status(200).send(blob);\n  } catch (error) {\n    console.log(error);\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getErrorMessage(error)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  download\n});\n\n//# sourceURL=webpack://server/./controllers/ideas.controller/download/download.controller.js?");

/***/ }),

/***/ "./controllers/ideas.controller/filter/filter.controllers.js":
/*!*******************************************************************!*\
  !*** ./controllers/ideas.controller/filter/filter.controllers.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/dbErrorHandler.js */ \"./helpers/dbErrorHandler.js\");\n/* harmony import */ var _models_idea_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/idea.model */ \"./models/idea.model.js\");\n\n\nconst filterIdea = async (req, res) => {\n  try {\n    const {\n      categoryId,\n      termId,\n      userId\n    } = req.query;\n    const filterCriteria = {};\n    if (categoryId) {\n      filterCriteria.categoryId = categoryId;\n    }\n    if (termId) {\n      filterCriteria.termId = termId;\n    }\n    if (userId) {\n      filterCriteria.userId = userId;\n    }\n    const ideas = await _models_idea_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find(filterCriteria).populate('categoryId', 'title').populate('userId', 'fullName avatar').exec();\n    res.json(ideas);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  filterIdea\n});\n\n//# sourceURL=webpack://server/./controllers/ideas.controller/filter/filter.controllers.js?");

/***/ }),

/***/ "./controllers/ideas.controller/findById/findById.controller.js":
/*!**********************************************************************!*\
  !*** ./controllers/ideas.controller/findById/findById.controller.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/dbErrorHandler.js */ \"./helpers/dbErrorHandler.js\");\n\nconst findById = async (req, res) => {\n  try {\n    const idea = req.information;\n    res.status(200).json({\n      idea,\n      message: \"Idea found successfully\"\n    });\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  findById\n});\n\n//# sourceURL=webpack://server/./controllers/ideas.controller/findById/findById.controller.js?");

/***/ }),

/***/ "./controllers/ideas.controller/id/id.controller.js":
/*!**********************************************************!*\
  !*** ./controllers/ideas.controller/id/id.controller.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_idea_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../models/idea.model.js */ \"./models/idea.model.js\");\n\nconst ideaById = async (req, res, next, id) => {\n  try {\n    let idea = await _models_idea_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id).populate('likes').populate('dislikes').populate('categoryId', 'title').populate('userId', 'username fullName avatar').exec();\n    if (!idea) return res.status(400).json({\n      error: \"Idea not found\"\n    });\n    req.information = idea;\n    next();\n  } catch (err) {\n    return res.status(400).json({\n      error: \"Could not retrieve idea\"\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  ideaById\n});\n\n//# sourceURL=webpack://server/./controllers/ideas.controller/id/id.controller.js?");

/***/ }),

/***/ "./controllers/ideas.controller/like/like.controller.js":
/*!**************************************************************!*\
  !*** ./controllers/ideas.controller/like/like.controller.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_idea_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../models/idea.model */ \"./models/idea.model.js\");\n/* harmony import */ var _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/dbErrorHandler.js */ \"./helpers/dbErrorHandler.js\");\n\n\n\nconst likeIdea = async (req, res) => {\n  try {\n    const {\n      id\n    } = req.params;\n    if (!req.params.userId) return res.status(404).json({\n      message: \"Unauthenticated\"\n    });\n    if (!mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId.isValid(id)) return res.status(404).send('No idea with that id');\n    const idea = await _models_idea_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(id);\n    idea.likes.push(req.params.userId);\n\n    // const updatedIdea = await Idea.findByIdAndUpdate(id, { likes: idea.likes + 1 }, { new: true });\n    const updatedIdea = await _models_idea_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndUpdate(id, idea, {\n      new: true\n    });\n    res.status(200).json(updatedIdea);\n  } catch (error) {\n    res.status(400).json({\n      error: _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(error)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  likeIdea\n});\n\n//# sourceURL=webpack://server/./controllers/ideas.controller/like/like.controller.js?");

/***/ }),

/***/ "./controllers/ideas.controller/like/unlike.controller.js":
/*!****************************************************************!*\
  !*** ./controllers/ideas.controller/like/unlike.controller.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_idea_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../models/idea.model */ \"./models/idea.model.js\");\n/* harmony import */ var _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../helpers/dbErrorHandler.js */ \"./helpers/dbErrorHandler.js\");\n\n\n\nconst unlikeIdea = async (req, res) => {\n  try {\n    const {\n      id\n    } = req.params;\n    if (!req.params.userId) return res.status(404).json({\n      message: \"Unauthenticated\"\n    });\n    if (!mongoose__WEBPACK_IMPORTED_MODULE_0___default().Types.ObjectId.isValid(id)) return res.status(404).send('No idea with that id');\n    const idea = await _models_idea_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(id);\n    await idea.likes.pull(req.params.userId);\n    const updatedIdea = await _models_idea_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findByIdAndUpdate(id, idea, {\n      new: true\n    });\n    res.status(200).json(updatedIdea);\n  } catch (error) {\n    res.status(400).json({\n      error: _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(error)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  unlikeIdea\n});\n\n//# sourceURL=webpack://server/./controllers/ideas.controller/like/unlike.controller.js?");

/***/ }),

/***/ "./controllers/ideas.controller/list/list.controllers.js":
/*!***************************************************************!*\
  !*** ./controllers/ideas.controller/list/list.controllers.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/dbErrorHandler.js */ \"./helpers/dbErrorHandler.js\");\n/* harmony import */ var _models_idea_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../models/idea.model */ \"./models/idea.model.js\");\n\n\nconst list = async (req, res) => {\n  try {\n    const ideas = await _models_idea_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].aggregate([{\n      $match: {}\n    }, {\n      $lookup: {\n        from: \"feedbacks\",\n        localField: \"_id\",\n        foreignField: \"ideaId\",\n        as: \"feedbacks\"\n      }\n    }, {\n      $project: {\n        _id: 1,\n        title: 1,\n        content: 1,\n        incognito: 1,\n        userId: 1,\n        photo: 1,\n        categoryId: 1,\n        likes: 1,\n        dislikes: 1,\n        termId: 1,\n        createdAt: 1,\n        updatedAt: 1,\n        feedbackCount: {\n          $size: \"$feedbacks\"\n        }\n      }\n    }, {\n      $sort: {\n        createdAt: -1\n      }\n    }, {\n      $lookup: {\n        from: \"categories\",\n        localField: \"categoryId\",\n        foreignField: \"_id\",\n        as: \"category\"\n      }\n    }, {\n      $lookup: {\n        from: \"users\",\n        localField: \"userId\",\n        foreignField: \"_id\",\n        as: \"user\"\n      }\n    }, {\n      $project: {\n        _id: 1,\n        title: 1,\n        content: 1,\n        incognito: 1,\n        userId: 1,\n        photo: 1,\n        categoryId: {\n          $arrayElemAt: [\"$category\", 0]\n        },\n        likes: 1,\n        dislikes: 1,\n        termId: 1,\n        feedbackCount: 1,\n        userId: {\n          $arrayElemAt: [\"$user\", 0]\n        },\n        createdAt: 1,\n        updatedAt: 1\n      }\n    }, {\n      $project: {\n        _id: 1,\n        title: 1,\n        content: 1,\n        incognito: 1,\n        userId: 1,\n        photo: 1,\n        categoryId: {\n          \"title\": \"$categoryId.title\"\n        },\n        likes: 1,\n        dislikes: 1,\n        termId: 1,\n        feedbackCount: 1,\n        user: {\n          _id: \"$user._id\",\n          fullName: \"$user.fullName\",\n          avatar: \"$user.avatar\"\n        },\n        createdAt: 1,\n        updatedAt: 1\n      }\n    }]);\n    res.json(ideas);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  list\n});\n\n//# sourceURL=webpack://server/./controllers/ideas.controller/list/list.controllers.js?");

/***/ }),

/***/ "./controllers/ideas.controller/listbyUserId/listbyUserId.controller.js":
/*!******************************************************************************!*\
  !*** ./controllers/ideas.controller/listbyUserId/listbyUserId.controller.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_idea_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/idea.model */ \"./models/idea.model.js\");\n/* harmony import */ var _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/dbErrorHandler.js */ \"./helpers/dbErrorHandler.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst findbyUserId = async (req, res) => {\n  try {\n    const {\n      userId\n    } = req.params;\n    const ideas = await _models_idea_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].aggregate([{\n      $match: {\n        userId: mongoose__WEBPACK_IMPORTED_MODULE_2___default().Types.ObjectId(userId)\n      }\n    }, {\n      $lookup: {\n        from: \"feedbacks\",\n        localField: \"_id\",\n        foreignField: \"ideaId\",\n        as: \"feedbacks\"\n      }\n    }, {\n      $project: {\n        _id: 1,\n        title: 1,\n        content: 1,\n        incognito: 1,\n        userId: 1,\n        photo: 1,\n        categoryId: 1,\n        likes: 1,\n        dislikes: 1,\n        termId: 1,\n        createdAt: 1,\n        updatedAt: 1,\n        feedbackCount: {\n          $size: \"$feedbacks\"\n        }\n      }\n    }, {\n      $sort: {\n        createdAt: -1\n      }\n    }, {\n      $lookup: {\n        from: \"categories\",\n        localField: \"categoryId\",\n        foreignField: \"_id\",\n        as: \"category\"\n      }\n    }, {\n      $lookup: {\n        from: \"users\",\n        localField: \"userId\",\n        foreignField: \"_id\",\n        as: \"user\"\n      }\n    }, {\n      $project: {\n        _id: 1,\n        title: 1,\n        content: 1,\n        incognito: 1,\n        userId: 1,\n        photo: 1,\n        categoryId: {\n          $arrayElemAt: [\"$category\", 0]\n        },\n        likes: 1,\n        dislikes: 1,\n        termId: 1,\n        feedbackCount: 1,\n        userId: {\n          $arrayElemAt: [\"$user\", 0]\n        },\n        createdAt: 1,\n        updatedAt: 1\n      }\n    }, {\n      $project: {\n        _id: 1,\n        title: 1,\n        content: 1,\n        incognito: 1,\n        userId: 1,\n        photo: 1,\n        categoryId: {\n          \"title\": \"$categoryId.title\"\n        },\n        likes: 1,\n        dislikes: 1,\n        termId: 1,\n        feedbackCount: 1,\n        user: {\n          _id: \"$user._id\",\n          fullName: \"$user.fullName\",\n          avatar: \"$user.avatar\"\n        },\n        createdAt: 1,\n        updatedAt: 1\n      }\n    }]);\n    if (!ideas) return res(404).json({\n      message: 'No ideas found'\n    });\n    res.status(200).json(ideas);\n  } catch (error) {\n    res.status(400).json({\n      error: _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(error)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  findbyUserId\n});\n\n//# sourceURL=webpack://server/./controllers/ideas.controller/listbyUserId/listbyUserId.controller.js?");

/***/ }),

/***/ "./controllers/ideas.controller/remove/remove.controllers.js":
/*!*******************************************************************!*\
  !*** ./controllers/ideas.controller/remove/remove.controllers.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/dbErrorHandler.js */ \"./helpers/dbErrorHandler.js\");\n/* harmony import */ var _helpers_cloudinary_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/cloudinary.js */ \"./helpers/cloudinary.js\");\n/* harmony import */ var _helpers_cloudinary_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_helpers_cloudinary_js__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst remove = async (req, res) => {\n  let idea = req.information;\n  let image;\n  try {\n    if (Object.keys(idea.photo).length > 0) {\n      let public_id = idea.photo.public_id;\n      image = idea.photo.url;\n      const photoResult = await _helpers_cloudinary_js__WEBPACK_IMPORTED_MODULE_1___default().uploader.destroy(public_id, (err, result) => {\n        if (err) {\n          throw _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getErrorMessage(err);\n        }\n      });\n    }\n    let deletedIdea = await idea.remove();\n    res.status(200).json({\n      idea: deletedIdea._id,\n      image: image ? \"Deleted image Successfully\" : \"Cannot delete image\",\n      message: \"Deleted idea Successfully\"\n    });\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  remove\n});\n\n//# sourceURL=webpack://server/./controllers/ideas.controller/remove/remove.controllers.js?");

/***/ }),

/***/ "./controllers/ideas.controller/sort/sort.controllers.js":
/*!***************************************************************!*\
  !*** ./controllers/ideas.controller/sort/sort.controllers.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/dbErrorHandler.js */ \"./helpers/dbErrorHandler.js\");\n/* harmony import */ var _models_idea_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../models/idea.model */ \"./models/idea.model.js\");\n\n\nconst sortIdea = async (req, res) => {\n  try {\n    let sortObj = {};\n    // check params in req\n    const {\n      sort\n    } = req.query;\n    if (sort === 'like') {\n      sortObj[\"likesCount\"] = -1;\n    }\n    if (sort === 'dislike') {\n      sortObj[\"dislikesCount\"] = -1;\n    }\n    if (sort === 'feedback') {\n      sortObj[\"feedbackCount\"] = -1;\n    }\n    let ideas = await _models_idea_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].aggregate([{\n      $lookup: {\n        from: \"feedbacks\",\n        localField: \"_id\",\n        foreignField: \"ideaId\",\n        as: \"feedbacks\"\n      }\n    }, {\n      $lookup: {\n        from: \"users\",\n        localField: \"userId\",\n        foreignField: \"_id\",\n        as: \"userId\"\n      }\n    }, {\n      $lookup: {\n        from: \"categories\",\n        localField: \"categoryId\",\n        foreignField: \"_id\",\n        as: \"categoryId\"\n      }\n    }, {\n      $project: {\n        title: 1,\n        content: 1,\n        userId: 1,\n        photo: 1,\n        categoryId: 1,\n        createdAt: 1,\n        likes: 1,\n        dislikes: 1,\n        termId: 1,\n        feedbacks: 1,\n        // count the number of feedbacks\n        feedbackCount: {\n          $size: \"$feedbacks\"\n        },\n        // count the number of likes\n        likesCount: {\n          $size: \"$likes\"\n        },\n        // count the number of dislikes\n        dislikesCount: {\n          $size: \"$dislikes\"\n        }\n      }\n    }, {\n      $unwind: \"$userId\"\n    }, {\n      $unwind: \"$categoryId\"\n    },\n    // sort by the feedbackCount and likes\n    {\n      $sort: sortObj\n    }]);\n    res.json(ideas);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  sortIdea\n});\n\n//# sourceURL=webpack://server/./controllers/ideas.controller/sort/sort.controllers.js?");

/***/ }),

/***/ "./controllers/ideas.controller/update/update.controllers.js":
/*!*******************************************************************!*\
  !*** ./controllers/ideas.controller/update/update.controllers.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/dbErrorHandler.js */ \"./helpers/dbErrorHandler.js\");\n/* harmony import */ var lodash_extend_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/extend.js */ \"lodash/extend.js\");\n/* harmony import */ var lodash_extend_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_extend_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _helpers_cloudinary_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../helpers/cloudinary.js */ \"./helpers/cloudinary.js\");\n/* harmony import */ var _helpers_cloudinary_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_helpers_cloudinary_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst update = (req, res) => {\n  let form = new (formidable__WEBPACK_IMPORTED_MODULE_2___default().IncomingForm)();\n  form.keepExtensions = true;\n  form.parse(req, async (err, fields, files) => {\n    if (err) {\n      return res.status(400).json({\n        error: \"File could not be uploaded\"\n      });\n    }\n    let idea = req.information;\n    idea = lodash_extend_js__WEBPACK_IMPORTED_MODULE_1___default()(idea, fields);\n    idea.updatedAt = Date.now();\n    if (files.photo) {\n      const photoResult = await _helpers_cloudinary_js__WEBPACK_IMPORTED_MODULE_3___default().uploader.upload(files.photo.path, {\n        overwrite: true,\n        folder: \"Photo\"\n      });\n      idea.photo.public_id = photoResult.public_id;\n      idea.photo.url = photoResult.secure_url;\n    }\n    try {\n      await idea.save();\n      res.json({\n        idea: idea,\n        message: \"Updated idea successfully\"\n      });\n    } catch (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getErrorMessage(err)\n      });\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  update\n});\n\n//# sourceURL=webpack://server/./controllers/ideas.controller/update/update.controllers.js?");

/***/ }),

/***/ "./controllers/roles.controller/create/create.controller.js":
/*!******************************************************************!*\
  !*** ./controllers/roles.controller/create/create.controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_role_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/role.model */ \"./models/role.model.js\");\n\nconst create = async (req, res) => {\n  try {\n    const {\n      title\n    } = req.body;\n    const role = await _models_role_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n      title\n    });\n    res.status(200).json({\n      role: role,\n      message: \"Created role successfully\"\n    });\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  create\n});\n\n//# sourceURL=webpack://server/./controllers/roles.controller/create/create.controller.js?");

/***/ }),

/***/ "./controllers/roles.controller/list/list.controller.js":
/*!**************************************************************!*\
  !*** ./controllers/roles.controller/list/list.controller.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_role_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/role.model */ \"./models/role.model.js\");\n\nconst list = async (req, res) => {\n  try {\n    const roles = await _models_role_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find();\n    res.status(200).json(roles);\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  list\n});\n\n//# sourceURL=webpack://server/./controllers/roles.controller/list/list.controller.js?");

/***/ }),

/***/ "./controllers/roles.controller/remove/remove.controller.js":
/*!******************************************************************!*\
  !*** ./controllers/roles.controller/remove/remove.controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_role_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/role.model */ \"./models/role.model.js\");\n\nconst remove = async (req, res) => {\n  try {\n    const {\n      id\n    } = req.params;\n    const role = await _models_role_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndDelete(id);\n    res.status(200).json({\n      role: role,\n      message: \"Deleted role successfully\"\n    });\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  remove\n});\n\n//# sourceURL=webpack://server/./controllers/roles.controller/remove/remove.controller.js?");

/***/ }),

/***/ "./controllers/roles.controller/update/update.controller.js":
/*!******************************************************************!*\
  !*** ./controllers/roles.controller/update/update.controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_role_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/role.model */ \"./models/role.model.js\");\n\nconst update = async (req, res) => {\n  try {\n    const {\n      id\n    } = req.params;\n    const {\n      title\n    } = req.body;\n    const role = await _models_role_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(id, {\n      title\n    }, {\n      new: true\n    });\n    res.status(200).json({\n      role: role,\n      message: \"Updated role successfully\"\n    });\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  update\n});\n\n//# sourceURL=webpack://server/./controllers/roles.controller/update/update.controller.js?");

/***/ }),

/***/ "./controllers/terms.controller/create/create.controller.js":
/*!******************************************************************!*\
  !*** ./controllers/terms.controller/create/create.controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_term_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../models/term.model */ \"./models/term.model.js\");\n/* harmony import */ var _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../helpers/dbErrorHandler.js */ \"./helpers/dbErrorHandler.js\");\n\n\nconst create = async (req, res) => {\n  try {\n    const term = req.body;\n    const newterm = new _models_term_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](term);\n    await newterm.save();\n    res.status(201).json(newterm);\n  } catch (error) {\n    res.status(400).json({\n      error: _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  create\n});\n\n//# sourceURL=webpack://server/./controllers/terms.controller/create/create.controller.js?");

/***/ }),

/***/ "./controllers/terms.controller/id/id.controller.js":
/*!**********************************************************!*\
  !*** ./controllers/terms.controller/id/id.controller.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_term_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../models/term.model.js */ \"./models/term.model.js\");\n\nconst termById = async (req, res) => {\n  try {\n    const {\n      id\n    } = req.params;\n    const term = await _models_term_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id);\n    if (!term) {\n      return res.status(400).json({\n        error: \"Term not found\"\n      });\n    }\n    res.status(200).json(term);\n  } catch (err) {\n    return res.status(400).json({\n      error: \"Could not retrieve term\"\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  termById\n});\n\n//# sourceURL=webpack://server/./controllers/terms.controller/id/id.controller.js?");

/***/ }),

/***/ "./controllers/terms.controller/list/list.controller.js":
/*!**************************************************************!*\
  !*** ./controllers/terms.controller/list/list.controller.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../helpers/dbErrorHandler.js */ \"./helpers/dbErrorHandler.js\");\n/* harmony import */ var _models_term_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../models/term.model */ \"./models/term.model.js\");\n\n\nconst list = async (req, res) => {\n  try {\n    let terms = await _models_term_model__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find();\n    res.json(terms);\n  } catch (err) {\n    return res.status(400).json({\n      error: _helpers_dbErrorHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getErrorMessage(err)\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  list\n});\n\n//# sourceURL=webpack://server/./controllers/terms.controller/list/list.controller.js?");

/***/ }),

/***/ "./controllers/terms.controller/remove/remove.controllers.js":
/*!*******************************************************************!*\
  !*** ./controllers/terms.controller/remove/remove.controllers.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_term_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../models/term.model.js */ \"./models/term.model.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst removeTerm = async (req, res) => {\n  try {\n    const {\n      id\n    } = req.params;\n    if (!mongoose__WEBPACK_IMPORTED_MODULE_1___default().Types.ObjectId.isValid(id)) return res.status(404).send('No term with that id');\n    await _models_term_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndRemove(id);\n    res.status(200).json({\n      message: 'Term deleted successfully'\n    });\n  } catch (error) {\n    res.status(400).json({\n      message: error.message\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  removeTerm\n});\n\n//# sourceURL=webpack://server/./controllers/terms.controller/remove/remove.controllers.js?");

/***/ }),

/***/ "./controllers/terms.controller/update/update.controller.js":
/*!******************************************************************!*\
  !*** ./controllers/terms.controller/update/update.controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_term_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../models/term.model.js */ \"./models/term.model.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst updateTerm = async (req, res) => {\n  try {\n    const {\n      id: _id\n    } = req.params;\n    const term = req.body;\n    if (!mongoose__WEBPACK_IMPORTED_MODULE_1___default().Types.ObjectId.isValid(_id)) return res.status(404).send('No term with that id');\n    const updatedTerm = await _models_term_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(_id, {\n      ...term,\n      _id\n    }, {\n      new: true\n    });\n    res.status(200).json(updatedTerm);\n  } catch (error) {\n    res.status(400).json({\n      message: 'Term deleted failed'\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  updateTerm\n});\n\n//# sourceURL=webpack://server/./controllers/terms.controller/update/update.controller.js?");

/***/ }),

/***/ "./controllers/user.controller/id/id.controller.js":
/*!*********************************************************!*\
  !*** ./controllers/user.controller/id/id.controller.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_user_model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../models/user.model.js */ \"./models/user.model.js\");\n\nconst userByID = async (req, res, next, id) => {\n  try {\n    let user = await _models_user_model_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id).exec();\n    if (!user) return res.status(400).json({\n      error: \"User not found\"\n    });\n    req.profile = user;\n    next();\n  } catch (err) {\n    return res.status(400).json({\n      error: \"Could not retrieve user\"\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  userByID\n});\n\n//# sourceURL=webpack://server/./controllers/user.controller/id/id.controller.js?");

/***/ }),

/***/ "./controllers/users.controller/create/create.controller.js":
/*!******************************************************************!*\
  !*** ./controllers/users.controller/create/create.controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../models/user.model */ \"./models/user.model.js\");\n\nconst bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nconst saltRounds = 10;\nconst create = async (req, res) => {\n  const {\n    username,\n    password,\n    fullName,\n    roleId,\n    departmentId\n  } = req.body;\n  try {\n    const hashedPassword = await bcrypt.hash(password, saltRounds);\n    const newUser = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      username,\n      password: hashedPassword,\n      fullName,\n      roleId,\n      departmentId\n    });\n    await newUser.save();\n    res.json({\n      message: \"Created user successfully\"\n    });\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  create\n});\n\n//# sourceURL=webpack://server/./controllers/users.controller/create/create.controller.js?");

/***/ }),

/***/ "./controllers/users.controller/id/id.controller.js":
/*!**********************************************************!*\
  !*** ./controllers/users.controller/id/id.controller.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../models/user.model */ \"./models/user.model.js\");\n\nconst userById = async (req, res) => {\n  try {\n    const user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(req.params.id).populate('roleId', 'title').populate('departmentId', 'title').exec();\n    res.status(200).json(user);\n  } catch (err) {\n    res.status(404).json({\n      message: 'User not found'\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  userById\n});\n\n//# sourceURL=webpack://server/./controllers/users.controller/id/id.controller.js?");

/***/ }),

/***/ "./controllers/users.controller/list/list.controller.js":
/*!**************************************************************!*\
  !*** ./controllers/users.controller/list/list.controller.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../models/user.model */ \"./models/user.model.js\");\n\nconst list = async (req, res) => {\n  try {\n    const users = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find();\n    res.json(users);\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  list\n});\n\n//# sourceURL=webpack://server/./controllers/users.controller/list/list.controller.js?");

/***/ }),

/***/ "./controllers/users.controller/remove/remove.controller.js":
/*!******************************************************************!*\
  !*** ./controllers/users.controller/remove/remove.controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../models/user.model */ \"./models/user.model.js\");\n// Import model\n\nconst remove = async (req, res) => {\n  try {\n    _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndRemove(req.params.id, function (err, user) {\n      if (err) {\n        res.status(400).json({\n          message: err.message\n        });\n      } else {\n        res.status(200).json({\n          message: \"Deleted user successfully\",\n          user: user\n        });\n      }\n    }).exec();\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  remove\n});\n\n//# sourceURL=webpack://server/./controllers/users.controller/remove/remove.controller.js?");

/***/ }),

/***/ "./controllers/users.controller/updatePassword/updatePassword.controller.js":
/*!**********************************************************************************!*\
  !*** ./controllers/users.controller/updatePassword/updatePassword.controller.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../models/user.model */ \"./models/user.model.js\");\n\nconst bcrypt = __webpack_require__(/*! bcrypt */ \"bcrypt\");\nconst saltRounds = 10;\nconst updatePassword = async (req, res) => {\n  const {\n    password\n  } = req.body;\n  try {\n    const hashedPassword = await bcrypt.hash(password, saltRounds);\n    const updatedUser = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate({\n      _id: req.params.id\n    }, {\n      password: hashedPassword\n    }, {\n      upsert: true\n    });\n    res.json({\n      user: updatedUser,\n      message: \"Updated user successfully\"\n    });\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  updatePassword\n});\n\n//# sourceURL=webpack://server/./controllers/users.controller/updatePassword/updatePassword.controller.js?");

/***/ }),

/***/ "./controllers/users.controller/updateProfile/updateProfile.controller.js":
/*!********************************************************************************!*\
  !*** ./controllers/users.controller/updateProfile/updateProfile.controller.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../models/user.model */ \"./models/user.model.js\");\n\nconst updateProfile = async (req, res) => {\n  try {\n    const updatedUser = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findByIdAndUpdate(req.params.id, req.body, {\n      new: true\n    });\n    res.json({\n      user: updatedUser,\n      message: \"Updated user successfully\"\n    });\n  } catch (err) {\n    res.status(400).json({\n      message: err.message\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  updateProfile\n});\n\n//# sourceURL=webpack://server/./controllers/users.controller/updateProfile/updateProfile.controller.js?");

/***/ }),

/***/ "./express.js":
/*!********************!*\
  !*** ./express.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _routes_idea_routes_create_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/idea.routes/create.routes */ \"./routes/idea.routes/create.routes.js\");\n/* harmony import */ var _routes_idea_routes_update_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/idea.routes/update.routes */ \"./routes/idea.routes/update.routes.js\");\n/* harmony import */ var _routes_idea_routes_delete_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/idea.routes/delete.routes */ \"./routes/idea.routes/delete.routes.js\");\n/* harmony import */ var _routes_idea_routes_list_routes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/idea.routes/list.routes */ \"./routes/idea.routes/list.routes.js\");\n/* harmony import */ var _routes_idea_routes_id_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes/idea.routes/id.routes */ \"./routes/idea.routes/id.routes.js\");\n/* harmony import */ var _routes_idea_routes_sort_routes__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./routes/idea.routes/sort.routes */ \"./routes/idea.routes/sort.routes.js\");\n/* harmony import */ var _routes_idea_routes_like_routes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./routes/idea.routes/like.routes */ \"./routes/idea.routes/like.routes.js\");\n/* harmony import */ var _routes_idea_routes_dislike_routes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./routes/idea.routes/dislike.routes */ \"./routes/idea.routes/dislike.routes.js\");\n/* harmony import */ var _routes_idea_routes_unlike_routes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./routes/idea.routes/unlike.routes */ \"./routes/idea.routes/unlike.routes.js\");\n/* harmony import */ var _routes_idea_routes_undislike_routes__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./routes/idea.routes/undislike.routes */ \"./routes/idea.routes/undislike.routes.js\");\n/* harmony import */ var _routes_idea_routes_filter_routes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./routes/idea.routes/filter.routes */ \"./routes/idea.routes/filter.routes.js\");\n/* harmony import */ var _routes_idea_routes_listbyuserid_routes__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./routes/idea.routes/listbyuserid.routes */ \"./routes/idea.routes/listbyuserid.routes.js\");\n/* harmony import */ var _routes_idea_routes_download_routes__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./routes/idea.routes/download.routes */ \"./routes/idea.routes/download.routes.js\");\n/* harmony import */ var _routes_document_routes_download_routes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./routes/document.routes/download.routes */ \"./routes/document.routes/download.routes.js\");\n/* harmony import */ var _routes_category_routes_create_routes__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./routes/category.routes/create.routes */ \"./routes/category.routes/create.routes.js\");\n/* harmony import */ var _routes_category_routes_list_routes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./routes/category.routes/list.routes */ \"./routes/category.routes/list.routes.js\");\n/* harmony import */ var _routes_category_routes_remove_routes__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./routes/category.routes/remove.routes */ \"./routes/category.routes/remove.routes.js\");\n/* harmony import */ var _routes_category_routes_update_routes__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./routes/category.routes/update.routes */ \"./routes/category.routes/update.routes.js\");\n/* harmony import */ var _routes_category_routes_get_routes__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./routes/category.routes/get.routes */ \"./routes/category.routes/get.routes.js\");\n/* harmony import */ var _routes_user_routes_create_routes__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./routes/user.routes/create.routes */ \"./routes/user.routes/create.routes.js\");\n/* harmony import */ var _routes_user_routes_updateProfile_routes__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./routes/user.routes/updateProfile.routes */ \"./routes/user.routes/updateProfile.routes.js\");\n/* harmony import */ var _routes_user_routes_delete_routes__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./routes/user.routes/delete.routes */ \"./routes/user.routes/delete.routes.js\");\n/* harmony import */ var _routes_user_routes_list_routes__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./routes/user.routes/list.routes */ \"./routes/user.routes/list.routes.js\");\n/* harmony import */ var _routes_user_routes_login_routes__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./routes/user.routes/login.routes */ \"./routes/user.routes/login.routes.js\");\n/* harmony import */ var _routes_user_routes_id_routes__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./routes/user.routes/id.routes */ \"./routes/user.routes/id.routes.js\");\n/* harmony import */ var _routes_user_routes_updatePassword_routes__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./routes/user.routes/updatePassword.routes */ \"./routes/user.routes/updatePassword.routes.js\");\n/* harmony import */ var _routes_department_routes_create_routes__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./routes/department.routes/create.routes */ \"./routes/department.routes/create.routes.js\");\n/* harmony import */ var _routes_department_routes_update_routes__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./routes/department.routes/update.routes */ \"./routes/department.routes/update.routes.js\");\n/* harmony import */ var _routes_department_routes_delete_routes__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./routes/department.routes/delete.routes */ \"./routes/department.routes/delete.routes.js\");\n/* harmony import */ var _routes_department_routes_list_routes__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./routes/department.routes/list.routes */ \"./routes/department.routes/list.routes.js\");\n/* harmony import */ var _routes_department_routes_getId_routes__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./routes/department.routes/getId.routes */ \"./routes/department.routes/getId.routes.js\");\n/* harmony import */ var _routes_role_routes_create_routes__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./routes/role.routes/create.routes */ \"./routes/role.routes/create.routes.js\");\n/* harmony import */ var _routes_role_routes_update_routes__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./routes/role.routes/update.routes */ \"./routes/role.routes/update.routes.js\");\n/* harmony import */ var _routes_role_routes_delete_routes__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./routes/role.routes/delete.routes */ \"./routes/role.routes/delete.routes.js\");\n/* harmony import */ var _routes_role_routes_list_routes__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./routes/role.routes/list.routes */ \"./routes/role.routes/list.routes.js\");\n/* harmony import */ var _routes_term_routes_create_routes__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./routes/term.routes/create.routes */ \"./routes/term.routes/create.routes.js\");\n/* harmony import */ var _routes_term_routes_list_routes__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./routes/term.routes/list.routes */ \"./routes/term.routes/list.routes.js\");\n/* harmony import */ var _routes_term_routes_getId_routes__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./routes/term.routes/getId.routes */ \"./routes/term.routes/getId.routes.js\");\n/* harmony import */ var _routes_term_routes_remove_routes__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./routes/term.routes/remove.routes */ \"./routes/term.routes/remove.routes.js\");\n/* harmony import */ var _routes_term_routes_update_routes__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./routes/term.routes/update.routes */ \"./routes/term.routes/update.routes.js\");\n/* harmony import */ var _routes_feedback_routes_create_routes__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./routes/feedback.routes/create.routes */ \"./routes/feedback.routes/create.routes.js\");\n/* harmony import */ var _routes_feedback_routes_update_routes__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./routes/feedback.routes/update.routes */ \"./routes/feedback.routes/update.routes.js\");\n/* harmony import */ var _routes_feedback_routes_remove_routes__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./routes/feedback.routes/remove.routes */ \"./routes/feedback.routes/remove.routes.js\");\n/* harmony import */ var _routes_feedback_routes_list_routes__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./routes/feedback.routes/list.routes */ \"./routes/feedback.routes/list.routes.js\");\n/* harmony import */ var _routes_feedback_routes_id_routes__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./routes/feedback.routes/id.routes */ \"./routes/feedback.routes/id.routes.js\");\n/* harmony import */ var _routes_feedback_routes_download_routes__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./routes/feedback.routes/download.routes */ \"./routes/feedback.routes/download.routes.js\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst CURRENT_WORKING_DIR = process.cwd();\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\n// parse body params and attache them to req.body\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default().json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default().urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_4___default()());\n// secure apps by setting various HTTP headers\napp.use(helmet__WEBPACK_IMPORTED_MODULE_6___default()());\n// enable CORS - Cross Origin Resource Sharing\napp.use(cors__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](path__WEBPACK_IMPORTED_MODULE_1___default().join(CURRENT_WORKING_DIR, 'dist')));\napp.use('/', _routes_document_routes_download_routes__WEBPACK_IMPORTED_MODULE_20__[\"default\"]);\napp.use('/', _routes_idea_routes_download_routes__WEBPACK_IMPORTED_MODULE_19__[\"default\"]);\napp.use('/', _routes_idea_routes_sort_routes__WEBPACK_IMPORTED_MODULE_12__[\"default\"]);\napp.use('/', _routes_idea_routes_filter_routes__WEBPACK_IMPORTED_MODULE_17__[\"default\"]);\napp.use('/', _routes_idea_routes_create_routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\napp.use('/', _routes_idea_routes_update_routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\napp.use('/', _routes_idea_routes_delete_routes__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\napp.use('/', _routes_idea_routes_list_routes__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\napp.use('/', _routes_idea_routes_id_routes__WEBPACK_IMPORTED_MODULE_11__[\"default\"]);\napp.use('/', _routes_idea_routes_sort_routes__WEBPACK_IMPORTED_MODULE_12__[\"default\"]);\napp.use('/', _routes_idea_routes_like_routes__WEBPACK_IMPORTED_MODULE_13__[\"default\"]);\napp.use('/', _routes_idea_routes_dislike_routes__WEBPACK_IMPORTED_MODULE_14__[\"default\"]);\napp.use('/', _routes_idea_routes_unlike_routes__WEBPACK_IMPORTED_MODULE_15__[\"default\"]);\napp.use('/', _routes_idea_routes_undislike_routes__WEBPACK_IMPORTED_MODULE_16__[\"default\"]);\napp.use('/', _routes_idea_routes_filter_routes__WEBPACK_IMPORTED_MODULE_17__[\"default\"]);\napp.use('/', _routes_idea_routes_listbyuserid_routes__WEBPACK_IMPORTED_MODULE_18__[\"default\"]);\napp.use('/', _routes_category_routes_create_routes__WEBPACK_IMPORTED_MODULE_21__[\"default\"]);\napp.use('/', _routes_category_routes_list_routes__WEBPACK_IMPORTED_MODULE_22__[\"default\"]);\napp.use('/', _routes_category_routes_remove_routes__WEBPACK_IMPORTED_MODULE_23__[\"default\"]);\napp.use('/', _routes_category_routes_update_routes__WEBPACK_IMPORTED_MODULE_24__[\"default\"]);\napp.use('/', _routes_category_routes_get_routes__WEBPACK_IMPORTED_MODULE_25__[\"default\"]);\napp.use('/', _routes_user_routes_create_routes__WEBPACK_IMPORTED_MODULE_26__[\"default\"]);\napp.use('/', _routes_user_routes_updateProfile_routes__WEBPACK_IMPORTED_MODULE_27__[\"default\"]);\napp.use('/', _routes_user_routes_login_routes__WEBPACK_IMPORTED_MODULE_30__[\"default\"]);\napp.use('/', _routes_user_routes_delete_routes__WEBPACK_IMPORTED_MODULE_28__[\"default\"]);\napp.use('/', _routes_user_routes_list_routes__WEBPACK_IMPORTED_MODULE_29__[\"default\"]);\napp.use('/', _routes_user_routes_id_routes__WEBPACK_IMPORTED_MODULE_31__[\"default\"]);\napp.use('/', _routes_user_routes_updatePassword_routes__WEBPACK_IMPORTED_MODULE_32__[\"default\"]);\napp.use('/', _routes_department_routes_create_routes__WEBPACK_IMPORTED_MODULE_33__[\"default\"]);\napp.use('/', _routes_department_routes_update_routes__WEBPACK_IMPORTED_MODULE_34__[\"default\"]);\napp.use('/', _routes_department_routes_delete_routes__WEBPACK_IMPORTED_MODULE_35__[\"default\"]);\napp.use('/', _routes_department_routes_list_routes__WEBPACK_IMPORTED_MODULE_36__[\"default\"]);\napp.use('/', _routes_department_routes_getId_routes__WEBPACK_IMPORTED_MODULE_37__[\"default\"]);\napp.use('/', _routes_role_routes_create_routes__WEBPACK_IMPORTED_MODULE_38__[\"default\"]);\napp.use('/', _routes_role_routes_update_routes__WEBPACK_IMPORTED_MODULE_39__[\"default\"]);\napp.use('/', _routes_role_routes_delete_routes__WEBPACK_IMPORTED_MODULE_40__[\"default\"]);\napp.use('/', _routes_role_routes_list_routes__WEBPACK_IMPORTED_MODULE_41__[\"default\"]);\napp.use('/', _routes_term_routes_create_routes__WEBPACK_IMPORTED_MODULE_42__[\"default\"]);\napp.use('/', _routes_term_routes_list_routes__WEBPACK_IMPORTED_MODULE_43__[\"default\"]);\napp.use('/', _routes_term_routes_getId_routes__WEBPACK_IMPORTED_MODULE_44__[\"default\"]);\napp.use('/', _routes_term_routes_remove_routes__WEBPACK_IMPORTED_MODULE_45__[\"default\"]);\napp.use('/', _routes_term_routes_update_routes__WEBPACK_IMPORTED_MODULE_46__[\"default\"]);\napp.use('/', _routes_feedback_routes_download_routes__WEBPACK_IMPORTED_MODULE_52__[\"default\"]);\napp.use('/', _routes_feedback_routes_create_routes__WEBPACK_IMPORTED_MODULE_47__[\"default\"]);\napp.use('/', _routes_feedback_routes_update_routes__WEBPACK_IMPORTED_MODULE_48__[\"default\"]);\napp.use('/', _routes_feedback_routes_remove_routes__WEBPACK_IMPORTED_MODULE_49__[\"default\"]);\napp.use('/', _routes_feedback_routes_list_routes__WEBPACK_IMPORTED_MODULE_50__[\"default\"]);\napp.use('/', _routes_feedback_routes_id_routes__WEBPACK_IMPORTED_MODULE_51__[\"default\"]);\n\n// Catch unauthorised errors\napp.use((err, req, res, next) => {\n  if (err.name === 'UnauthorizedError') {\n    res.status(401).json({\n      \"error\": err.name + \": \" + err.message\n    });\n  } else if (err) {\n    res.status(400).json({\n      \"error\": err.name + \": \" + err.message\n    });\n    console.log(err);\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack://server/./express.js?");

/***/ }),

/***/ "./helpers/cloudinary.js":
/*!*******************************!*\
  !*** ./helpers/cloudinary.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const cloudinary = (__webpack_require__(/*! cloudinary */ \"cloudinary\").v2);\n\n// Configuration \ncloudinary.config({\n  cloud_name: \"dvxfixf5q\",\n  api_key: \"431122752423812\",\n  api_secret: \"fVCKQfYd94d2zZBtO8qVLqCYX44\"\n});\nmodule.exports = cloudinary;\n\n//# sourceURL=webpack://server/./helpers/cloudinary.js?");

/***/ }),

/***/ "./helpers/dbErrorHandler.js":
/*!***********************************!*\
  !*** ./helpers/dbErrorHandler.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst getErrorMessage = err => {\n  let message = '';\n  if (err.code) {\n    switch (err.code) {\n      case 11000:\n      case 11001:\n        message = getUniqueErrorMessage(err);\n        break;\n      default:\n        message = 'Something went wrong';\n    }\n  } else {\n    for (let errName in err.errors) {\n      if (err.errors[errName].message) message = err.errors[errName].message;\n    }\n  }\n  return message;\n};\nconst getUniqueErrorMessage = err => {\n  let output;\n  try {\n    let fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n    output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';\n  } catch (ex) {\n    output = 'Unique field already exists';\n  }\n  return output;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  getErrorMessage\n});\n\n//# sourceURL=webpack://server/./helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./helpers/verifyToken.js":
/*!********************************!*\
  !*** ./helpers/verifyToken.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config/config */ \"./config/config.js\");\n\n\n\n// Middleware to verify token\nconst verifyToken = (req, res, next) => {\n  const token = req.headers.authorization;\n  if (!token) {\n    return res.status(401).json({\n      message: \"Unauthorized\"\n    });\n  }\n  try {\n    const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].jwtSecret);\n    req.userId = decoded.id;\n    let route = req.originalUrl.split(\"/\")[2];\n    if ([\"terms\", \"admin\"].includes(route)) {\n      if (![\"admin\"].includes(decoded.role?.title?.toLowerCase())) {\n        return res.status(401).json({\n          message: \"Only admin can do this\"\n        });\n      } else {\n        req.role = decoded.role;\n      }\n    }\n    next();\n  } catch (err) {\n    res.status(401).json({\n      message: \"Unauthorized\"\n    });\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (verifyToken);\n\n//# sourceURL=webpack://server/./helpers/verifyToken.js?");

/***/ }),

/***/ "./models/category.model.js":
/*!**********************************!*\
  !*** ./models/category.model.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CategorySchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  title: {\n    type: String,\n    required: true\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Category', CategorySchema));\n\n//# sourceURL=webpack://server/./models/category.model.js?");

/***/ }),

/***/ "./models/department.model.js":
/*!************************************!*\
  !*** ./models/department.model.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst DepartmentSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  title: {\n    type: String,\n    required: true\n  }\n}, {\n  timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Department\", DepartmentSchema));\n\n//# sourceURL=webpack://server/./models/department.model.js?");

/***/ }),

/***/ "./models/feedback.model.js":
/*!**********************************!*\
  !*** ./models/feedback.model.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst FeedbackSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  ideaId: {\n    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),\n    ref: \"Idea\",\n    required: true\n  },\n  userId: {\n    type: Object,\n    ref: \"User\",\n    required: false\n  },\n  parentFeedbackId: [{\n    type: mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema.Types.ObjectId,\n    ref: \"Feedback\",\n    required: false\n  }],\n  content: {\n    type: String,\n    required: true\n  },\n  incognito: {\n    type: Boolean\n  }\n}, {\n  timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Feedback\", FeedbackSchema));\n\n//# sourceURL=webpack://server/./models/feedback.model.js?");

/***/ }),

/***/ "./models/idea.model.js":
/*!******************************!*\
  !*** ./models/idea.model.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst IdeaSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  title: {\n    type: String,\n    required: \"Title is required\"\n  },\n  content: {\n    type: String,\n    required: \"Content is required\"\n  },\n  incognito: {\n    type: Boolean\n  },\n  userId: {\n    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),\n    ref: \"User\",\n    required: \"User is required\"\n  },\n  photo: {\n    public_id: {\n      type: String\n    },\n    url: {\n      type: String\n    }\n  },\n  categoryId: {\n    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),\n    ref: \"Category\",\n    required: \"Category is required\"\n  },\n  likes: [{\n    // type: [String],\n    // default: [],\n    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),\n    ref: \"User\"\n  }],\n  dislikes: [{\n    // type: [String],\n    // default: [],\n    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),\n    ref: \"User\"\n  }],\n  termId: {\n    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),\n    ref: \"Term\",\n    required: false\n  }\n}, {\n  timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Idea\", IdeaSchema));\n\n//# sourceURL=webpack://server/./models/idea.model.js?");

/***/ }),

/***/ "./models/role.model.js":
/*!******************************!*\
  !*** ./models/role.model.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst RoleSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  title: String\n}, {\n  timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Role', RoleSchema));\n\n//# sourceURL=webpack://server/./models/role.model.js?");

/***/ }),

/***/ "./models/term.model.js":
/*!******************************!*\
  !*** ./models/term.model.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst TermSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  title: String,\n  description: String,\n  startDate: Date,\n  closureDate: Date,\n  endDate: Date,\n  active: Boolean\n}, {\n  timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Term\", TermSchema));\n\n//# sourceURL=webpack://server/./models/term.model.js?");

/***/ }),

/***/ "./models/user.model.js":
/*!******************************!*\
  !*** ./models/user.model.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  username: {\n    type: String,\n    unique: \"Username is already exist\",\n    required: \"Username is required\"\n  },\n  password: {\n    type: String,\n    required: \"Password is required\"\n  },\n  avatar: {\n    public_id: {\n      type: String\n    },\n    url: {\n      type: String\n    },\n    required: false\n  },\n  fullName: {\n    type: String,\n    required: \"Full name is required\"\n  },\n  roleId: {\n    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),\n    ref: \"Role\",\n    required: false\n  },\n  departmentId: {\n    type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema.Types.ObjectId),\n    ref: \"Department\",\n    required: false\n  }\n}, {\n  timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('User', UserSchema));\n\n//# sourceURL=webpack://server/./models/user.model.js?");

/***/ }),

/***/ "./routes/category.routes/create.routes.js":
/*!*************************************************!*\
  !*** ./routes/category.routes/create.routes.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_categories_controller_create_create_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/categories.controller/create/create.controller.js */ \"./controllers/categories.controller/create/create.controller.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/categories/new').post(_controllers_categories_controller_create_create_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createCategory);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/category.routes/create.routes.js?");

/***/ }),

/***/ "./routes/category.routes/get.routes.js":
/*!**********************************************!*\
  !*** ./routes/category.routes/get.routes.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_categories_controller_get_getCategoryById_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/categories.controller/get/getCategoryById.controller.js */ \"./controllers/categories.controller/get/getCategoryById.controller.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/categories/:id').get(_controllers_categories_controller_get_getCategoryById_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getCategoryById);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/category.routes/get.routes.js?");

/***/ }),

/***/ "./routes/category.routes/list.routes.js":
/*!***********************************************!*\
  !*** ./routes/category.routes/list.routes.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_categories_controller_list_list_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/categories.controller/list/list.controller.js */ \"./controllers/categories.controller/list/list.controller.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/categories').get(_controllers_categories_controller_list_list_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getAllCategories);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/category.routes/list.routes.js?");

/***/ }),

/***/ "./routes/category.routes/remove.routes.js":
/*!*************************************************!*\
  !*** ./routes/category.routes/remove.routes.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_categories_controller_remove_remove_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/categories.controller/remove/remove.controller.js */ \"./controllers/categories.controller/remove/remove.controller.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/categories/delete/:id').delete(_controllers_categories_controller_remove_remove_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].removeCategory);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/category.routes/remove.routes.js?");

/***/ }),

/***/ "./routes/category.routes/update.routes.js":
/*!*************************************************!*\
  !*** ./routes/category.routes/update.routes.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_categories_controller_update_update_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/categories.controller/update/update.controller.js */ \"./controllers/categories.controller/update/update.controller.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/categories/update/:id').patch(_controllers_categories_controller_update_update_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].updateCategory);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/category.routes/update.routes.js?");

/***/ }),

/***/ "./routes/department.routes/create.routes.js":
/*!***************************************************!*\
  !*** ./routes/department.routes/create.routes.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_departments_controller_create_create_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/departments.controller/create/create.controller.js */ \"./controllers/departments.controller/create/create.controller.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/departments/new').post(_controllers_departments_controller_create_create_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/department.routes/create.routes.js?");

/***/ }),

/***/ "./routes/department.routes/delete.routes.js":
/*!***************************************************!*\
  !*** ./routes/department.routes/delete.routes.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_departments_controller_remove_remove_controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/departments.controller/remove/remove.controllers */ \"./controllers/departments.controller/remove/remove.controllers.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/departments/:id').delete(_controllers_departments_controller_remove_remove_controllers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/department.routes/delete.routes.js?");

/***/ }),

/***/ "./routes/department.routes/getId.routes.js":
/*!**************************************************!*\
  !*** ./routes/department.routes/getId.routes.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_departments_controller_id_id_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/departments.controller/id/id.controller.js */ \"./controllers/departments.controller/id/id.controller.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route(\"/api/departments/:id\").get(_controllers_departments_controller_id_id_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].departmentById);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/department.routes/getId.routes.js?");

/***/ }),

/***/ "./routes/department.routes/list.routes.js":
/*!*************************************************!*\
  !*** ./routes/department.routes/list.routes.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_departments_controller_list_list_controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/departments.controller/list/list.controllers */ \"./controllers/departments.controller/list/list.controllers.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/departments').get(_controllers_departments_controller_list_list_controllers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/department.routes/list.routes.js?");

/***/ }),

/***/ "./routes/department.routes/update.routes.js":
/*!***************************************************!*\
  !*** ./routes/department.routes/update.routes.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_departments_controller_update_update_controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/departments.controller/update/update.controllers */ \"./controllers/departments.controller/update/update.controllers.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/departments/:id').put(_controllers_departments_controller_update_update_controllers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/department.routes/update.routes.js?");

/***/ }),

/***/ "./routes/document.routes/download.routes.js":
/*!***************************************************!*\
  !*** ./routes/document.routes/download.routes.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_document_controller_download_download_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/document.controller/download/download.controller.js */ \"./controllers/document.controller/download/download.controller.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\n\n// Download images route\nrouter.route(\"/ideas/:ideaId/documents\").get(_controllers_document_controller_download_download_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].downloadImages);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/document.routes/download.routes.js?");

/***/ }),

/***/ "./routes/feedback.routes/create.routes.js":
/*!*************************************************!*\
  !*** ./routes/feedback.routes/create.routes.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_feedbacks_controller_create_create_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/feedbacks.controller/create/create.controller.js */ \"./controllers/feedbacks.controller/create/create.controller.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route(\"/api/new/feedbacks\").post(_controllers_feedbacks_controller_create_create_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/feedback.routes/create.routes.js?");

/***/ }),

/***/ "./routes/feedback.routes/download.routes.js":
/*!***************************************************!*\
  !*** ./routes/feedback.routes/download.routes.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_verifyToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/verifyToken */ \"./helpers/verifyToken.js\");\n/* harmony import */ var _controllers_feedbacks_controller_download_download_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/feedbacks.controller/download/download.controller.js */ \"./controllers/feedbacks.controller/download/download.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route(\"/api/feedbacks/download\").get(_helpers_verifyToken__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _controllers_feedbacks_controller_download_download_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].download);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/feedback.routes/download.routes.js?");

/***/ }),

/***/ "./routes/feedback.routes/id.routes.js":
/*!*********************************************!*\
  !*** ./routes/feedback.routes/id.routes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_feedbacks_controller_id_id_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/feedbacks.controller/id/id.controller.js */ \"./controllers/feedbacks.controller/id/id.controller.js\");\n/* harmony import */ var _controllers_feedbacks_controller_findById_findById_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/feedbacks.controller/findById/findById.controller.js */ \"./controllers/feedbacks.controller/findById/findById.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route(\"/api/feedbacks/:feedbackId\").get(_controllers_feedbacks_controller_findById_findById_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById);\nrouter.param(\"feedbackId\", _controllers_feedbacks_controller_id_id_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].feedbackById);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/feedback.routes/id.routes.js?");

/***/ }),

/***/ "./routes/feedback.routes/list.routes.js":
/*!***********************************************!*\
  !*** ./routes/feedback.routes/list.routes.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_feedbacks_controller_list_list_controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/feedbacks.controller/list/list.controllers */ \"./controllers/feedbacks.controller/list/list.controllers.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route(\"/api/feedbacks\").get(_controllers_feedbacks_controller_list_list_controllers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listFeedbacks);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/feedback.routes/list.routes.js?");

/***/ }),

/***/ "./routes/feedback.routes/remove.routes.js":
/*!*************************************************!*\
  !*** ./routes/feedback.routes/remove.routes.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_feedbacks_controller_remove_remove_controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/feedbacks.controller/remove/remove.controllers */ \"./controllers/feedbacks.controller/remove/remove.controllers.js\");\n/* harmony import */ var _controllers_feedbacks_controller_id_id_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/feedbacks.controller/id/id.controller */ \"./controllers/feedbacks.controller/id/id.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route(\"/api/feedbacks/:feedbackId\").delete(_controllers_feedbacks_controller_remove_remove_controllers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove);\nrouter.param(\"feedbackId\", _controllers_feedbacks_controller_id_id_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].feedbackById);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/feedback.routes/remove.routes.js?");

/***/ }),

/***/ "./routes/feedback.routes/update.routes.js":
/*!*************************************************!*\
  !*** ./routes/feedback.routes/update.routes.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_feedbacks_controller_update_update_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/feedbacks.controller/update/update.controller */ \"./controllers/feedbacks.controller/update/update.controller.js\");\n/* harmony import */ var _controllers_feedbacks_controller_id_id_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/feedbacks.controller/id/id.controller */ \"./controllers/feedbacks.controller/id/id.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route(\"/api/feedbacks/:feedbackId\").put(_controllers_feedbacks_controller_update_update_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update);\nrouter.param(\"feedbackId\", _controllers_feedbacks_controller_id_id_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].feedbackById);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/feedback.routes/update.routes.js?");

/***/ }),

/***/ "./routes/idea.routes/create.routes.js":
/*!*********************************************!*\
  !*** ./routes/idea.routes/create.routes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_ideas_controller_create_create_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/ideas.controller/create/create.controller.js */ \"./controllers/ideas.controller/create/create.controller.js\");\n/* harmony import */ var _controllers_user_controller_id_id_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/user.controller/id/id.controller.js */ \"./controllers/user.controller/id/id.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/ideas/new/:userId').post(_controllers_ideas_controller_create_create_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create);\nrouter.param('userId', _controllers_user_controller_id_id_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userByID);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/idea.routes/create.routes.js?");

/***/ }),

/***/ "./routes/idea.routes/delete.routes.js":
/*!*********************************************!*\
  !*** ./routes/idea.routes/delete.routes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_ideas_controller_remove_remove_controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/ideas.controller/remove/remove.controllers */ \"./controllers/ideas.controller/remove/remove.controllers.js\");\n/* harmony import */ var _controllers_ideas_controller_id_id_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/ideas.controller/id/id.controller */ \"./controllers/ideas.controller/id/id.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route(\"/api/ideas/:ideaId\").delete(_controllers_ideas_controller_remove_remove_controllers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove);\nrouter.param(\"ideaId\", _controllers_ideas_controller_id_id_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ideaById);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/idea.routes/delete.routes.js?");

/***/ }),

/***/ "./routes/idea.routes/dislike.routes.js":
/*!**********************************************!*\
  !*** ./routes/idea.routes/dislike.routes.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_ideas_controller_dislike_dislike_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/ideas.controller/dislike/dislike.controller.js */ \"./controllers/ideas.controller/dislike/dislike.controller.js\");\n/* harmony import */ var _controllers_user_controller_id_id_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/user.controller/id/id.controller.js */ \"./controllers/user.controller/id/id.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/ideas/:userId/dislike/:id').patch(_controllers_ideas_controller_dislike_dislike_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].dislikeIdea);\nrouter.param('userId', _controllers_user_controller_id_id_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userByID);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/idea.routes/dislike.routes.js?");

/***/ }),

/***/ "./routes/idea.routes/download.routes.js":
/*!***********************************************!*\
  !*** ./routes/idea.routes/download.routes.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_verifyToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/verifyToken */ \"./helpers/verifyToken.js\");\n/* harmony import */ var _controllers_ideas_controller_download_download_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/ideas.controller/download/download.controller.js */ \"./controllers/ideas.controller/download/download.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route(\"/api/ideas/download\").get(_helpers_verifyToken__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _controllers_ideas_controller_download_download_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].download);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/idea.routes/download.routes.js?");

/***/ }),

/***/ "./routes/idea.routes/filter.routes.js":
/*!*********************************************!*\
  !*** ./routes/idea.routes/filter.routes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_ideas_controller_filter_filter_controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/ideas.controller/filter/filter.controllers */ \"./controllers/ideas.controller/filter/filter.controllers.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route(\"/api/ideas/filter\").get(_controllers_ideas_controller_filter_filter_controllers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].filterIdea);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/idea.routes/filter.routes.js?");

/***/ }),

/***/ "./routes/idea.routes/id.routes.js":
/*!*****************************************!*\
  !*** ./routes/idea.routes/id.routes.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_ideas_controller_id_id_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/ideas.controller/id/id.controller.js */ \"./controllers/ideas.controller/id/id.controller.js\");\n/* harmony import */ var _controllers_ideas_controller_findById_findById_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/ideas.controller/findById/findById.controller.js */ \"./controllers/ideas.controller/findById/findById.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route(\"/api/ideas/:ideaId\").get(_controllers_ideas_controller_findById_findById_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById);\nrouter.param(\"ideaId\", _controllers_ideas_controller_id_id_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].ideaById);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/idea.routes/id.routes.js?");

/***/ }),

/***/ "./routes/idea.routes/like.routes.js":
/*!*******************************************!*\
  !*** ./routes/idea.routes/like.routes.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_ideas_controller_like_like_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/ideas.controller/like/like.controller.js */ \"./controllers/ideas.controller/like/like.controller.js\");\n/* harmony import */ var _controllers_user_controller_id_id_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/user.controller/id/id.controller.js */ \"./controllers/user.controller/id/id.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/ideas/:userId/like/:id').patch(_controllers_ideas_controller_like_like_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].likeIdea);\nrouter.param('userId', _controllers_user_controller_id_id_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userByID);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/idea.routes/like.routes.js?");

/***/ }),

/***/ "./routes/idea.routes/list.routes.js":
/*!*******************************************!*\
  !*** ./routes/idea.routes/list.routes.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_ideas_controller_list_list_controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/ideas.controller/list/list.controllers */ \"./controllers/ideas.controller/list/list.controllers.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route(\"/api/ideas\").get(_controllers_ideas_controller_list_list_controllers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/idea.routes/list.routes.js?");

/***/ }),

/***/ "./routes/idea.routes/listbyuserid.routes.js":
/*!***************************************************!*\
  !*** ./routes/idea.routes/listbyuserid.routes.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_ideas_controller_listbyUserId_listbyUserId_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/ideas.controller/listbyUserId/listbyUserId.controller.js */ \"./controllers/ideas.controller/listbyUserId/listbyUserId.controller.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route(\"/api/ideas/user/:userId\").get(_controllers_ideas_controller_listbyUserId_listbyUserId_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findbyUserId);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/idea.routes/listbyuserid.routes.js?");

/***/ }),

/***/ "./routes/idea.routes/sort.routes.js":
/*!*******************************************!*\
  !*** ./routes/idea.routes/sort.routes.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_ideas_controller_sort_sort_controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/ideas.controller/sort/sort.controllers */ \"./controllers/ideas.controller/sort/sort.controllers.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/ideas/sort').get(_controllers_ideas_controller_sort_sort_controllers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sortIdea);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/idea.routes/sort.routes.js?");

/***/ }),

/***/ "./routes/idea.routes/undislike.routes.js":
/*!************************************************!*\
  !*** ./routes/idea.routes/undislike.routes.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_ideas_controller_dislike_undislike_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/ideas.controller/dislike/undislike.controller.js */ \"./controllers/ideas.controller/dislike/undislike.controller.js\");\n/* harmony import */ var _controllers_user_controller_id_id_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/user.controller/id/id.controller.js */ \"./controllers/user.controller/id/id.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/ideas/:userId/undislike/:id').patch(_controllers_ideas_controller_dislike_undislike_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].undislikeIdea);\nrouter.param('userId', _controllers_user_controller_id_id_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userByID);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/idea.routes/undislike.routes.js?");

/***/ }),

/***/ "./routes/idea.routes/unlike.routes.js":
/*!*********************************************!*\
  !*** ./routes/idea.routes/unlike.routes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_ideas_controller_like_unlike_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/ideas.controller/like/unlike.controller.js */ \"./controllers/ideas.controller/like/unlike.controller.js\");\n/* harmony import */ var _controllers_user_controller_id_id_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/user.controller/id/id.controller.js */ \"./controllers/user.controller/id/id.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/ideas/:userId/unlike/:id').patch(_controllers_ideas_controller_like_unlike_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].unlikeIdea);\nrouter.param('userId', _controllers_user_controller_id_id_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userByID);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/idea.routes/unlike.routes.js?");

/***/ }),

/***/ "./routes/idea.routes/update.routes.js":
/*!*********************************************!*\
  !*** ./routes/idea.routes/update.routes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_ideas_controller_update_update_controllers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/ideas.controller/update/update.controllers */ \"./controllers/ideas.controller/update/update.controllers.js\");\n/* harmony import */ var _controllers_ideas_controller_id_id_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/ideas.controller/id/id.controller */ \"./controllers/ideas.controller/id/id.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/ideas/:ideaId').put(_controllers_ideas_controller_update_update_controllers__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update);\nrouter.param('ideaId', _controllers_ideas_controller_id_id_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].ideaById);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/idea.routes/update.routes.js?");

/***/ }),

/***/ "./routes/role.routes/create.routes.js":
/*!*********************************************!*\
  !*** ./routes/role.routes/create.routes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_verifyToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/verifyToken */ \"./helpers/verifyToken.js\");\n/* harmony import */ var _controllers_roles_controller_create_create_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/roles.controller/create/create.controller */ \"./controllers/roles.controller/create/create.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/roles/new').post(_helpers_verifyToken__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _controllers_roles_controller_create_create_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/role.routes/create.routes.js?");

/***/ }),

/***/ "./routes/role.routes/delete.routes.js":
/*!*********************************************!*\
  !*** ./routes/role.routes/delete.routes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_verifyToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/verifyToken */ \"./helpers/verifyToken.js\");\n/* harmony import */ var _controllers_roles_controller_remove_remove_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/roles.controller/remove/remove.controller */ \"./controllers/roles.controller/remove/remove.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/roles/:id').delete(_helpers_verifyToken__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _controllers_roles_controller_remove_remove_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/role.routes/delete.routes.js?");

/***/ }),

/***/ "./routes/role.routes/list.routes.js":
/*!*******************************************!*\
  !*** ./routes/role.routes/list.routes.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_verifyToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/verifyToken */ \"./helpers/verifyToken.js\");\n/* harmony import */ var _controllers_roles_controller_list_list_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/roles.controller/list/list.controller */ \"./controllers/roles.controller/list/list.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/roles').get(_helpers_verifyToken__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _controllers_roles_controller_list_list_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].list);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/role.routes/list.routes.js?");

/***/ }),

/***/ "./routes/role.routes/update.routes.js":
/*!*********************************************!*\
  !*** ./routes/role.routes/update.routes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_verifyToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/verifyToken */ \"./helpers/verifyToken.js\");\n/* harmony import */ var _controllers_roles_controller_update_update_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/roles.controller/update/update.controller */ \"./controllers/roles.controller/update/update.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/roles/:id').put(_helpers_verifyToken__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _controllers_roles_controller_update_update_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].update);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/role.routes/update.routes.js?");

/***/ }),

/***/ "./routes/term.routes/create.routes.js":
/*!*********************************************!*\
  !*** ./routes/term.routes/create.routes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_verifyToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/verifyToken */ \"./helpers/verifyToken.js\");\n/* harmony import */ var _controllers_terms_controller_create_create_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/terms.controller/create/create.controller.js */ \"./controllers/terms.controller/create/create.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route(\"/api/terms/new\").post(_helpers_verifyToken__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _controllers_terms_controller_create_create_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].create);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/term.routes/create.routes.js?");

/***/ }),

/***/ "./routes/term.routes/getId.routes.js":
/*!********************************************!*\
  !*** ./routes/term.routes/getId.routes.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_verifyToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/verifyToken */ \"./helpers/verifyToken.js\");\n/* harmony import */ var _controllers_terms_controller_id_id_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/terms.controller/id/id.controller.js */ \"./controllers/terms.controller/id/id.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route(\"/api/terms/:id\").get(_helpers_verifyToken__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _controllers_terms_controller_id_id_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].termById);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/term.routes/getId.routes.js?");

/***/ }),

/***/ "./routes/term.routes/list.routes.js":
/*!*******************************************!*\
  !*** ./routes/term.routes/list.routes.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_terms_controller_list_list_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/terms.controller/list/list.controller.js */ \"./controllers/terms.controller/list/list.controller.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route(\"/api/terms\").get(_controllers_terms_controller_list_list_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/term.routes/list.routes.js?");

/***/ }),

/***/ "./routes/term.routes/remove.routes.js":
/*!*********************************************!*\
  !*** ./routes/term.routes/remove.routes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_verifyToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/verifyToken */ \"./helpers/verifyToken.js\");\n/* harmony import */ var _controllers_terms_controller_remove_remove_controllers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/terms.controller/remove/remove.controllers.js */ \"./controllers/terms.controller/remove/remove.controllers.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route(\"/api/terms/remove/:id\").delete(_helpers_verifyToken__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _controllers_terms_controller_remove_remove_controllers_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].removeTerm);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/term.routes/remove.routes.js?");

/***/ }),

/***/ "./routes/term.routes/update.routes.js":
/*!*********************************************!*\
  !*** ./routes/term.routes/update.routes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_verifyToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/verifyToken */ \"./helpers/verifyToken.js\");\n/* harmony import */ var _controllers_terms_controller_update_update_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/terms.controller/update/update.controller.js */ \"./controllers/terms.controller/update/update.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route(\"/api/terms/update/:id\").patch(_helpers_verifyToken__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _controllers_terms_controller_update_update_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateTerm);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/term.routes/update.routes.js?");

/***/ }),

/***/ "./routes/user.routes/create.routes.js":
/*!*********************************************!*\
  !*** ./routes/user.routes/create.routes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_users_controller_create_create_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../controllers/users.controller/create/create.controller */ \"./controllers/users.controller/create/create.controller.js\");\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/users/new').post(_controllers_users_controller_create_create_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/user.routes/create.routes.js?");

/***/ }),

/***/ "./routes/user.routes/delete.routes.js":
/*!*********************************************!*\
  !*** ./routes/user.routes/delete.routes.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_verifyToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/verifyToken */ \"./helpers/verifyToken.js\");\n/* harmony import */ var _controllers_users_controller_remove_remove_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/users.controller/remove/remove.controller */ \"./controllers/users.controller/remove/remove.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/users/:id').delete(_helpers_verifyToken__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _controllers_users_controller_remove_remove_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].remove);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/user.routes/delete.routes.js?");

/***/ }),

/***/ "./routes/user.routes/id.routes.js":
/*!*****************************************!*\
  !*** ./routes/user.routes/id.routes.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_verifyToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/verifyToken */ \"./helpers/verifyToken.js\");\n/* harmony import */ var _controllers_users_controller_id_id_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/users.controller/id/id.controller */ \"./controllers/users.controller/id/id.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/users/:id').get(_helpers_verifyToken__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _controllers_users_controller_id_id_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userById);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/user.routes/id.routes.js?");

/***/ }),

/***/ "./routes/user.routes/list.routes.js":
/*!*******************************************!*\
  !*** ./routes/user.routes/list.routes.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_verifyToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/verifyToken */ \"./helpers/verifyToken.js\");\n/* harmony import */ var _controllers_users_controller_list_list_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/users.controller/list/list.controller */ \"./controllers/users.controller/list/list.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.route('/api/users').get(_helpers_verifyToken__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _controllers_users_controller_list_list_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].list);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/user.routes/list.routes.js?");

/***/ }),

/***/ "./routes/user.routes/login.routes.js":
/*!********************************************!*\
  !*** ./routes/user.routes/login.routes.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models/user.model */ \"./models/user.model.js\");\n/* harmony import */ var _models_role_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../models/role.model */ \"./models/role.model.js\");\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/config */ \"./config/config.js\");\n\n\n\n\n\n// import Department from '../../models/department.model'\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\nrouter.post('/api/login', async (req, res) => {\n  const {\n    username,\n    password\n  } = req.body;\n  try {\n    const user = await _models_user_model__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n      username\n    }).populate('roleId').populate('departmentId');\n    const role = await _models_role_model__WEBPACK_IMPORTED_MODULE_4__[\"default\"].findOne({\n      _id: user.roleId\n    });\n    // const department = await Department.findOne({ _id: user.departmentId });\n\n    if (!user) {\n      return res.status(401).json({\n        error: 'Invalid username'\n      });\n    }\n    const passwordMatch = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().compare(password, user.password);\n    if (!passwordMatch) {\n      return res.status(401).json({\n        error: 'Invalid password'\n      });\n    }\n    const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_2___default().sign({\n      id: user._id,\n      role: role\n    }, _config_config__WEBPACK_IMPORTED_MODULE_5__[\"default\"].jwtSecret);\n    res.status(200).json({\n      message: 'Login successfully',\n      token,\n      user: {\n        id: user._id,\n        username: user.username,\n        fullName: user.fullName,\n        role: user.roleId,\n        department: user.departmentId\n      }\n    });\n  } catch (err) {\n    console.log(err);\n    return res.status('401').json({\n      error: \"Could not sign in\"\n    });\n  }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/user.routes/login.routes.js?");

/***/ }),

/***/ "./routes/user.routes/updatePassword.routes.js":
/*!*****************************************************!*\
  !*** ./routes/user.routes/updatePassword.routes.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_verifyToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/verifyToken */ \"./helpers/verifyToken.js\");\n/* harmony import */ var _controllers_users_controller_updatePassword_updatePassword_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/users.controller/updatePassword/updatePassword.controller */ \"./controllers/users.controller/updatePassword/updatePassword.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\n\n// router.route('/api/users/changePassword/:id')\n//     .put(verifyToken,userCtrl.updatePassword);\n\nrouter.route('/api/users/changepassword/:id').put(_controllers_users_controller_updatePassword_updatePassword_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updatePassword);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/user.routes/updatePassword.routes.js?");

/***/ }),

/***/ "./routes/user.routes/updateProfile.routes.js":
/*!****************************************************!*\
  !*** ./routes/user.routes/updateProfile.routes.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _helpers_verifyToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/verifyToken */ \"./helpers/verifyToken.js\");\n/* harmony import */ var _controllers_users_controller_updateProfile_updateProfile_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../controllers/users.controller/updateProfile/updateProfile.controller */ \"./controllers/users.controller/updateProfile/updateProfile.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\n\n// router.route('/api/users/:id')\n//     .put(verifyToken,userCtrl.updateProfile);\n\nrouter.route('/api/users/:id').put(_controllers_users_controller_updateProfile_updateProfile_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].updateProfile);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://server/./routes/user.routes/updateProfile.routes.js?");

/***/ }),

/***/ "./server.js":
/*!*******************!*\
  !*** ./server.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/config */ \"./config/config.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ \"./express.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n(mongoose__WEBPACK_IMPORTED_MODULE_2___default().Promise) = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri, {\n  useNewUrlParser: true,\n  useCreateIndex: true,\n  useUnifiedTopology: true\n});\nmongoose__WEBPACK_IMPORTED_MODULE_2___default().connection.on('error', () => {\n  throw new Error(`unable to connect to database: ${_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri}`);\n});\n_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listen(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, err => {\n  if (err) {\n    console.log(err);\n  }\n  console.info('Server started on port %s.', _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port);\n});\n\n//# sourceURL=webpack://server/./server.js?");

/***/ }),

/***/ "archiver":
/*!***************************!*\
  !*** external "archiver" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("archiver");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("bcrypt");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "cloudinary":
/*!*****************************!*\
  !*** external "cloudinary" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("cloudinary");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("compression");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("formidable");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("helmet");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ "lodash/extend.js":
/*!***********************************!*\
  !*** external "lodash/extend.js" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("lodash/extend.js");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;