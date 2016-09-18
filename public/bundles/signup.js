/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _components_FormValidationEs6Js = __webpack_require__(77);

	var _components_FormValidationEs6Js2 = _interopRequireDefault(_components_FormValidationEs6Js);

	var _components_menuEs6Js = __webpack_require__(1);

	var _components_menuEs6Js2 = _interopRequireDefault(_components_menuEs6Js);

	(function () {

	    'use strict';

	    var constraints = {
	        username: {
	            presence: true,
	            length: {
	                minimum: 3,
	                maximum: 20
	            },
	            format: {
	                pattern: '[a-z0-9]+',
	                flags: 'i',
	                message: '^Your name must only contain only letters or numbers (no spaces)'
	            }
	        },
	        name: {
	            presence: true,
	            length: {
	                minimum: 4,
	                maximum: 20
	            },
	            format: {
	                pattern: '[a-z0-9]+',
	                flags: 'i',
	                message: '^Room name must only contain only letters or numbers (no spaces)'
	            },
	            exclusion: ['rooms', 'settings', 'overview', 'index', 'todo-lists'],
	            nameUnique: true
	        },
	        passcode: {
	            length: {
	                minimum: 5,
	                maximum: 70
	            },
	            presence: true,
	            equality: {
	                attribute: 'adminPassword',
	                message: '^Passcode must not match admin password',
	                comparator: function comparator(v1, v2) {
	                    return v1 !== v2;
	                }
	            }
	        },
	        adminPassword: {
	            presence: true,
	            length: {
	                minimum: 5,
	                maximum: 70
	            }
	        },
	        confirmAdmin: {
	            presence: true,
	            equality: {
	                attribute: 'adminPassword',
	                message: '^Passwords do not match'
	            }
	        }
	    };

	    if (navigator.userAgent.indexOf('MSIE') === -1 && navigator.userAgent.indexOf('rv:11.0') === -1) {
	        var validateForm = new _components_FormValidationEs6Js2['default']('sign-up-form', constraints);
	    }
	    var menuToggle = new _components_menuEs6Js2['default']('menu', ['close-menu']);
	})();

/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _addEventEs6Js = __webpack_require__(2);

	var _addEventEs6Js2 = _interopRequireDefault(_addEventEs6Js);

	var Menu = (function () {
	  function Menu() {
	    var openMenuClass = arguments.length <= 0 || arguments[0] === undefined ? 'menu' : arguments[0];
	    var closeMenuIDs = arguments.length <= 1 || arguments[1] === undefined ? ['overlay'] : arguments[1];

	    _classCallCheck(this, Menu);

	    this.body = document.body || document.getElementsByTagName('body')[0];

	    this.elements = Array.prototype.slice.call(document.getElementsByClassName(openMenuClass));

	    this.closeMenuElements = closeMenuIDs.map(function (ID) {
	      return document.getElementById(ID);
	    });

	    this.placeListeners();
	  }

	  _createClass(Menu, [{
	    key: 'placeListeners',
	    value: function placeListeners() {
	      var _this = this;

	      this.elements.forEach(function (el) {
	        return (0, _addEventEs6Js2['default'])('click', el, _this.toggleMenu.bind(_this));
	      }, this);
	      this.closeMenuElements.forEach(function (el) {
	        return (0, _addEventEs6Js2['default'])('click', el, _this.closeMenu.bind(_this));
	      }, this);
	    }
	  }, {
	    key: 'toggleMenu',
	    value: function toggleMenu(e, close) {
	      if (!close) {
	        var evt = e || window.event;
	        if (evt.preventDefault) {
	          evt.preventDefault();
	        } else {
	          evt.returnValue = false;
	        }
	      }
	      if (this.body.className.indexOf(' menu-open') > -1 || close) {
	        this.body.className = this.body.className.replace(' menu-open', '');
	      } else {
	        this.body.className += ' menu-open';
	      }
	    }
	  }, {
	    key: 'closeMenu',
	    value: function closeMenu(e) {
	      var evt = e || window.event;
	      if (evt.preventDefault) {
	        evt.preventDefault();
	      } else {
	        evt.returnValue = false;
	      }
	      this.toggleMenu(null, true);
	    }
	  }]);

	  return Menu;
	})();

	exports['default'] = Menu;
	module.exports = exports['default'];

/***/ },

/***/ 2:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	var addEvent = function addEvent(evnt, elem, func) {
	  'use strict';
	  if (!evnt || !elem || !func) {
	    return false;
	  }
	  if (elem.addEventListener) {
	    elem.addEventListener(evnt, func, false);
	  } else if (elem.attachEvent) {
	    elem.attachEvent('on' + evnt, func);
	  } else {
	    elem[evnt] = func;
	  }
	};

	exports['default'] = addEvent;
	module.exports = exports['default'];

/***/ },

/***/ 16:
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _validateJs = __webpack_require__(78);

	var _validateJs2 = _interopRequireDefault(_validateJs);

	var _addEventEs6Js = __webpack_require__(2);

	var _addEventEs6Js2 = _interopRequireDefault(_addEventEs6Js);

	_validateJs2['default'].validators.nameUnique = function (value) {
	    'use strict';
	    return new _validateJs2['default'].Promise(function (resolve, reject) {
	        if (!value) {
	            resolve();
	        } else {

	            var request = new XMLHttpRequest();
	            (0, _addEventEs6Js2['default'])('load', request, function () {
	                var result = JSON.parse(this.responseText);
	                if (result) {
	                    resolve();
	                } else {
	                    resolve('^Sorry, that name is already taken');
	                }
	            });
	            (0, _addEventEs6Js2['default'])('error', request, function () {
	                reject();
	            });
	            (0, _addEventEs6Js2['default'])('abort', request, function () {
	                reject();
	            });
	            request.open('GET', '/rooms/is-unique?name=' + value, true);
	            request.setRequestHeader('Accept', 'application/json');
	            request.send();
	        }
	    });
	};

	var FormValidation = (function () {
	    function FormValidation(formId, constraints) {
	        _classCallCheck(this, FormValidation);

	        this.formId = formId;

	        this.constraints = constraints;

	        this.form = document.getElementById(this.formId);

	        this.inputs = [];

	        this.errors = {};

	        this.init();
	    }

	    _createClass(FormValidation, [{
	        key: 'init',
	        value: function init() {
	            var _this = this;

	            if (!this.form || !this.inputs) {
	                console.warn('Could not attach to form: ' + this.formId);
	                return false;
	            }

	            this.inputs = Array.prototype.slice.call(this.form.querySelectorAll('input, textarea, select'));

	            (0, _addEventEs6Js2['default'])('submit', this.form, (function (ev) {
	                ev.preventDefault();
	                this.handleSubmission();
	                return false;
	            }).bind(this));

	            this.form.noValidate = true;

	            this.inputs.forEach(function (el) {
	                (0, _addEventEs6Js2['default'])('change', el, (function (evt) {
	                    evt.preventDefault();
	                    this.validateInput(el);
	                }).bind(_this));
	            }, this);
	        }
	    }, {
	        key: 'createObjectFromInputs',
	        value: function createObjectFromInputs(inputArray) {
	            var object = {};
	            inputArray.forEach(function (el) {
	                return object[el.name] = el.value;
	            }, this);
	            return object;
	        }
	    }, {
	        key: 'validateInput',
	        value: function validateInput(element) {
	            var _this2 = this;

	            _validateJs2['default'].async(this.createObjectFromInputs(this.inputs), this.constraints || {}).then(function (success) {
	                _this2.errors = {};
	                _this2.showAllErrors();
	            }, (function (errors) {
	                if (errors instanceof Error) {
	                    throw errors;
	                } else {
	                    this.errors = errors;
	                    this.showErrorsForInput(element, this.errors[element.name]);
	                }
	            }).bind(this));
	        }
	    }, {
	        key: 'showErrorsForInput',
	        value: function showErrorsForInput(element, errors) {
	            var _this3 = this;

	            this.resetErrors(element);
	            if (errors) {
	                element.className = element.className.replace(/\s(error|valid)/gi, '') + ' error';
	                errors.forEach(function (error) {
	                    return _this3.addErrorsToElement(element, error);
	                }, this);
	            } else {
	                element.className = element.className.replace(/\s(error|valid)/gi, '') + ' valid';
	            }
	        }
	    }, {
	        key: 'addErrorsToElement',
	        value: function addErrorsToElement(element, error) {
	            var errorEl = document.createElement('p');
	            errorEl.className = 'error error-' + element.id;
	            errorEl.innerText = error;
	            element.parentNode.insertBefore(errorEl, element.nextSibling);
	        }
	    }, {
	        key: 'resetErrors',
	        value: function resetErrors(element) {
	            var errorsClass = 'error-' + element.id;
	            var errorMessages = Array.prototype.slice.call(this.form.getElementsByClassName(errorsClass));
	            errorMessages.forEach(function (el) {
	                el.parentNode.removeChild(el);
	            }, this);
	            element.className = element.className.replace(/\s(error|valid)/gi, '');
	        }
	    }, {
	        key: 'showAllErrors',
	        value: function showAllErrors() {
	            var _this4 = this;

	            this.inputs.forEach(function (el) {
	                if (_this4.errors[el.name]) {
	                    _this4.showErrorsForInput(el, _this4.errors[el.name]);
	                } else {
	                    _this4.resetErrors(el);
	                }
	            });
	        }
	    }, {
	        key: 'handleSubmission',
	        value: function handleSubmission() {
	            _validateJs2['default'].async(this.createObjectFromInputs(this.inputs), this.constraints || {}).then((function () {
	                this.errors = {};
	                this.showAllErrors();
	                this.form.submit();
	            }).bind(this), (function (errors) {
	                if (errors instanceof Error) {
	                    throw errors;
	                } else {
	                    this.errors = errors;
	                    this.showAllErrors();
	                }
	            }).bind(this));
	        }
	    }]);

	    return FormValidation;
	})();

	exports['default'] = FormValidation;
	module.exports = exports['default'];

/***/ },

/***/ 78:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/*!
	 * validate.js 0.10.0
	 *
	 * (c) 2013-2016 Nicklas Ansman, 2013 Wrapp
	 * Validate.js may be freely distributed under the MIT license.
	 * For all details and documentation:
	 * http://validatejs.org/
	 */

	(function(exports, module, define) {
	  "use strict";

	  // The main function that calls the validators specified by the constraints.
	  // The options are the following:
	  //   - format (string) - An option that controls how the returned value is formatted
	  //     * flat - Returns a flat array of just the error messages
	  //     * grouped - Returns the messages grouped by attribute (default)
	  //     * detailed - Returns an array of the raw validation data
	  //   - fullMessages (boolean) - If `true` (default) the attribute name is prepended to the error.
	  //
	  // Please note that the options are also passed to each validator.
	  var validate = function(attributes, constraints, options) {
	    options = v.extend({}, v.options, options);

	    var results = v.runValidations(attributes, constraints, options)
	      , attr
	      , validator;

	    for (attr in results) {
	      for (validator in results[attr]) {
	        if (v.isPromise(results[attr][validator])) {
	          throw new Error("Use validate.async if you want support for promises");
	        }
	      }
	    }
	    return validate.processValidationResults(results, options);
	  };

	  var v = validate;

	  // Copies over attributes from one or more sources to a single destination.
	  // Very much similar to underscore's extend.
	  // The first argument is the target object and the remaining arguments will be
	  // used as sources.
	  v.extend = function(obj) {
	    [].slice.call(arguments, 1).forEach(function(source) {
	      for (var attr in source) {
	        obj[attr] = source[attr];
	      }
	    });
	    return obj;
	  };

	  v.extend(validate, {
	    // This is the version of the library as a semver.
	    // The toString function will allow it to be coerced into a string
	    version: {
	      major: 0,
	      minor: 10,
	      patch: 0,
	      metadata: null,
	      toString: function() {
	        var version = v.format("%{major}.%{minor}.%{patch}", v.version);
	        if (!v.isEmpty(v.version.metadata)) {
	          version += "+" + v.version.metadata;
	        }
	        return version;
	      }
	    },

	    // Below is the dependencies that are used in validate.js

	    // The constructor of the Promise implementation.
	    // If you are using Q.js, RSVP or any other A+ compatible implementation
	    // override this attribute to be the constructor of that promise.
	    // Since jQuery promises aren't A+ compatible they won't work.
	    Promise: typeof Promise !== "undefined" ? Promise : /* istanbul ignore next */ null,

	    EMPTY_STRING_REGEXP: /^\s*$/,

	    // Runs the validators specified by the constraints object.
	    // Will return an array of the format:
	    //     [{attribute: "<attribute name>", error: "<validation result>"}, ...]
	    runValidations: function(attributes, constraints, options) {
	      var results = []
	        , attr
	        , validatorName
	        , value
	        , validators
	        , validator
	        , validatorOptions
	        , error;

	      if (v.isDomElement(attributes) || v.isJqueryElement(attributes)) {
	        attributes = v.collectFormValues(attributes);
	      }

	      // Loops through each constraints, finds the correct validator and run it.
	      for (attr in constraints) {
	        value = v.getDeepObjectValue(attributes, attr);
	        // This allows the constraints for an attribute to be a function.
	        // The function will be called with the value, attribute name, the complete dict of
	        // attributes as well as the options and constraints passed in.
	        // This is useful when you want to have different
	        // validations depending on the attribute value.
	        validators = v.result(constraints[attr], value, attributes, attr, options, constraints);

	        for (validatorName in validators) {
	          validator = v.validators[validatorName];

	          if (!validator) {
	            error = v.format("Unknown validator %{name}", {name: validatorName});
	            throw new Error(error);
	          }

	          validatorOptions = validators[validatorName];
	          // This allows the options to be a function. The function will be
	          // called with the value, attribute name, the complete dict of
	          // attributes as well as the options and constraints passed in.
	          // This is useful when you want to have different
	          // validations depending on the attribute value.
	          validatorOptions = v.result(validatorOptions, value, attributes, attr, options, constraints);
	          if (!validatorOptions) {
	            continue;
	          }
	          results.push({
	            attribute: attr,
	            value: value,
	            validator: validatorName,
	            globalOptions: options,
	            attributes: attributes,
	            options: validatorOptions,
	            error: validator.call(validator,
	                value,
	                validatorOptions,
	                attr,
	                attributes,
	                options)
	          });
	        }
	      }

	      return results;
	    },

	    // Takes the output from runValidations and converts it to the correct
	    // output format.
	    processValidationResults: function(errors, options) {
	      var attr;

	      errors = v.pruneEmptyErrors(errors, options);
	      errors = v.expandMultipleErrors(errors, options);
	      errors = v.convertErrorMessages(errors, options);

	      switch (options.format || "grouped") {
	        case "detailed":
	          // Do nothing more to the errors
	          break;

	        case "flat":
	          errors = v.flattenErrorsToArray(errors);
	          break;

	        case "grouped":
	          errors = v.groupErrorsByAttribute(errors);
	          for (attr in errors) {
	            errors[attr] = v.flattenErrorsToArray(errors[attr]);
	          }
	          break;

	        default:
	          throw new Error(v.format("Unknown format %{format}", options));
	      }

	      return v.isEmpty(errors) ? undefined : errors;
	    },

	    // Runs the validations with support for promises.
	    // This function will return a promise that is settled when all the
	    // validation promises have been completed.
	    // It can be called even if no validations returned a promise.
	    async: function(attributes, constraints, options) {
	      options = v.extend({}, v.async.options, options);

	      var WrapErrors = options.wrapErrors || function(errors) {
	        return errors;
	      };

	      // Removes unknown attributes
	      if (options.cleanAttributes !== false) {
	        attributes = v.cleanAttributes(attributes, constraints);
	      }

	      var results = v.runValidations(attributes, constraints, options);

	      return new v.Promise(function(resolve, reject) {
	        v.waitForResults(results).then(function() {
	          var errors = v.processValidationResults(results, options);
	          if (errors) {
	            reject(new WrapErrors(errors, options, attributes, constraints));
	          } else {
	            resolve(attributes);
	          }
	        }, function(err) {
	          reject(err);
	        });
	      });
	    },

	    single: function(value, constraints, options) {
	      options = v.extend({}, v.single.options, options, {
	        format: "flat",
	        fullMessages: false
	      });
	      return v({single: value}, {single: constraints}, options);
	    },

	    // Returns a promise that is resolved when all promises in the results array
	    // are settled. The promise returned from this function is always resolved,
	    // never rejected.
	    // This function modifies the input argument, it replaces the promises
	    // with the value returned from the promise.
	    waitForResults: function(results) {
	      // Create a sequence of all the results starting with a resolved promise.
	      return results.reduce(function(memo, result) {
	        // If this result isn't a promise skip it in the sequence.
	        if (!v.isPromise(result.error)) {
	          return memo;
	        }

	        return memo.then(function() {
	          return result.error.then(
	            function(error) {
	              result.error = error || null;
	            },
	            function(error) {
	              if (error instanceof Error) {
	                throw error;
	              }
	              v.error("Rejecting promises with the result is deprecated. Please use the resolve callback instead.");
	              result.error = error;
	            }
	          );
	        });
	      }, new v.Promise(function(r) { r(); })); // A resolved promise
	    },

	    // If the given argument is a call: function the and: function return the value
	    // otherwise just return the value. Additional arguments will be passed as
	    // arguments to the function.
	    // Example:
	    // ```
	    // result('foo') // 'foo'
	    // result(Math.max, 1, 2) // 2
	    // ```
	    result: function(value) {
	      var args = [].slice.call(arguments, 1);
	      if (typeof value === 'function') {
	        value = value.apply(null, args);
	      }
	      return value;
	    },

	    // Checks if the value is a number. This function does not consider NaN a
	    // number like many other `isNumber` functions do.
	    isNumber: function(value) {
	      return typeof value === 'number' && !isNaN(value);
	    },

	    // Returns false if the object is not a function
	    isFunction: function(value) {
	      return typeof value === 'function';
	    },

	    // A simple check to verify that the value is an integer. Uses `isNumber`
	    // and a simple modulo check.
	    isInteger: function(value) {
	      return v.isNumber(value) && value % 1 === 0;
	    },

	    // Checks if the value is a boolean
	    isBoolean: function(value) {
	      return typeof value === 'boolean';
	    },

	    // Uses the `Object` function to check if the given argument is an object.
	    isObject: function(obj) {
	      return obj === Object(obj);
	    },

	    // Simply checks if the object is an instance of a date
	    isDate: function(obj) {
	      return obj instanceof Date;
	    },

	    // Returns false if the object is `null` of `undefined`
	    isDefined: function(obj) {
	      return obj !== null && obj !== undefined;
	    },

	    // Checks if the given argument is a promise. Anything with a `then`
	    // function is considered a promise.
	    isPromise: function(p) {
	      return !!p && v.isFunction(p.then);
	    },

	    isJqueryElement: function(o) {
	      return o && v.isString(o.jquery);
	    },

	    isDomElement: function(o) {
	      if (!o) {
	        return false;
	      }

	      if (!o.querySelectorAll || !o.querySelector) {
	        return false;
	      }

	      if (v.isObject(document) && o === document) {
	        return true;
	      }

	      // http://stackoverflow.com/a/384380/699304
	      /* istanbul ignore else */
	      if (typeof HTMLElement === "object") {
	        return o instanceof HTMLElement;
	      } else {
	        return o &&
	          typeof o === "object" &&
	          o !== null &&
	          o.nodeType === 1 &&
	          typeof o.nodeName === "string";
	      }
	    },

	    isEmpty: function(value) {
	      var attr;

	      // Null and undefined are empty
	      if (!v.isDefined(value)) {
	        return true;
	      }

	      // functions are non empty
	      if (v.isFunction(value)) {
	        return false;
	      }

	      // Whitespace only strings are empty
	      if (v.isString(value)) {
	        return v.EMPTY_STRING_REGEXP.test(value);
	      }

	      // For arrays we use the length property
	      if (v.isArray(value)) {
	        return value.length === 0;
	      }

	      // Dates have no attributes but aren't empty
	      if (v.isDate(value)) {
	        return false;
	      }

	      // If we find at least one property we consider it non empty
	      if (v.isObject(value)) {
	        for (attr in value) {
	          return false;
	        }
	        return true;
	      }

	      return false;
	    },

	    // Formats the specified strings with the given values like so:
	    // ```
	    // format("Foo: %{foo}", {foo: "bar"}) // "Foo bar"
	    // ```
	    // If you want to write %{...} without having it replaced simply
	    // prefix it with % like this `Foo: %%{foo}` and it will be returned
	    // as `"Foo: %{foo}"`
	    format: v.extend(function(str, vals) {
	      if (!v.isString(str)) {
	        return str;
	      }
	      return str.replace(v.format.FORMAT_REGEXP, function(m0, m1, m2) {
	        if (m1 === '%') {
	          return "%{" + m2 + "}";
	        } else {
	          return String(vals[m2]);
	        }
	      });
	    }, {
	      // Finds %{key} style patterns in the given string
	      FORMAT_REGEXP: /(%?)%\{([^\}]+)\}/g
	    }),

	    // "Prettifies" the given string.
	    // Prettifying means replacing [.\_-] with spaces as well as splitting
	    // camel case words.
	    prettify: function(str) {
	      if (v.isNumber(str)) {
	        // If there are more than 2 decimals round it to two
	        if ((str * 100) % 1 === 0) {
	          return "" + str;
	        } else {
	          return parseFloat(Math.round(str * 100) / 100).toFixed(2);
	        }
	      }

	      if (v.isArray(str)) {
	        return str.map(function(s) { return v.prettify(s); }).join(", ");
	      }

	      if (v.isObject(str)) {
	        return str.toString();
	      }

	      // Ensure the string is actually a string
	      str = "" + str;

	      return str
	        // Splits keys separated by periods
	        .replace(/([^\s])\.([^\s])/g, '$1 $2')
	        // Removes backslashes
	        .replace(/\\+/g, '')
	        // Replaces - and - with space
	        .replace(/[_-]/g, ' ')
	        // Splits camel cased words
	        .replace(/([a-z])([A-Z])/g, function(m0, m1, m2) {
	          return "" + m1 + " " + m2.toLowerCase();
	        })
	        .toLowerCase();
	    },

	    stringifyValue: function(value) {
	      return v.prettify(value);
	    },

	    isString: function(value) {
	      return typeof value === 'string';
	    },

	    isArray: function(value) {
	      return {}.toString.call(value) === '[object Array]';
	    },

	    // Checks if the object is a hash, which is equivalent to an object that
	    // is neither an array nor a function.
	    isHash: function(value) {
	      return v.isObject(value) && !v.isArray(value) && !v.isFunction(value);
	    },

	    contains: function(obj, value) {
	      if (!v.isDefined(obj)) {
	        return false;
	      }
	      if (v.isArray(obj)) {
	        return obj.indexOf(value) !== -1;
	      }
	      return value in obj;
	    },

	    unique: function(array) {
	      if (!v.isArray(array)) {
	        return array;
	      }
	      return array.filter(function(el, index, array) {
	        return array.indexOf(el) == index;
	      });
	    },

	    forEachKeyInKeypath: function(object, keypath, callback) {
	      if (!v.isString(keypath)) {
	        return undefined;
	      }

	      var key = ""
	        , i
	        , escape = false;

	      for (i = 0; i < keypath.length; ++i) {
	        switch (keypath[i]) {
	          case '.':
	            if (escape) {
	              escape = false;
	              key += '.';
	            } else {
	              object = callback(object, key, false);
	              key = "";
	            }
	            break;

	          case '\\':
	            if (escape) {
	              escape = false;
	              key += '\\';
	            } else {
	              escape = true;
	            }
	            break;

	          default:
	            escape = false;
	            key += keypath[i];
	            break;
	        }
	      }

	      return callback(object, key, true);
	    },

	    getDeepObjectValue: function(obj, keypath) {
	      if (!v.isObject(obj)) {
	        return undefined;
	      }

	      return v.forEachKeyInKeypath(obj, keypath, function(obj, key) {
	        if (v.isObject(obj)) {
	          return obj[key];
	        }
	      });
	    },

	    // This returns an object with all the values of the form.
	    // It uses the input name as key and the value as value
	    // So for example this:
	    // <input type="text" name="email" value="foo@bar.com" />
	    // would return:
	    // {email: "foo@bar.com"}
	    collectFormValues: function(form, options) {
	      var values = {}
	        , i
	        , input
	        , inputs
	        , value;

	      if (v.isJqueryElement(form)) {
	        form = form[0];
	      }

	      if (!form) {
	        return values;
	      }

	      options = options || {};

	      inputs = form.querySelectorAll("input[name], textarea[name]");
	      for (i = 0; i < inputs.length; ++i) {
	        input = inputs.item(i);

	        if (v.isDefined(input.getAttribute("data-ignored"))) {
	          continue;
	        }

	        value = v.sanitizeFormValue(input.value, options);
	        if (input.type === "number") {
	          value = value ? +value : null;
	        } else if (input.type === "checkbox") {
	          if (input.attributes.value) {
	            if (!input.checked) {
	              value = values[input.name] || null;
	            }
	          } else {
	            value = input.checked;
	          }
	        } else if (input.type === "radio") {
	          if (!input.checked) {
	            value = values[input.name] || null;
	          }
	        }
	        values[input.name] = value;
	      }

	      inputs = form.querySelectorAll("select[name]");
	      for (i = 0; i < inputs.length; ++i) {
	        input = inputs.item(i);
	        value = v.sanitizeFormValue(input.options[input.selectedIndex].value, options);
	        values[input.name] = value;
	      }

	      return values;
	    },

	    sanitizeFormValue: function(value, options) {
	      if (options.trim && v.isString(value)) {
	        value = value.trim();
	      }

	      if (options.nullify !== false && value === "") {
	        return null;
	      }
	      return value;
	    },

	    capitalize: function(str) {
	      if (!v.isString(str)) {
	        return str;
	      }
	      return str[0].toUpperCase() + str.slice(1);
	    },

	    // Remove all errors who's error attribute is empty (null or undefined)
	    pruneEmptyErrors: function(errors) {
	      return errors.filter(function(error) {
	        return !v.isEmpty(error.error);
	      });
	    },

	    // In
	    // [{error: ["err1", "err2"], ...}]
	    // Out
	    // [{error: "err1", ...}, {error: "err2", ...}]
	    //
	    // All attributes in an error with multiple messages are duplicated
	    // when expanding the errors.
	    expandMultipleErrors: function(errors) {
	      var ret = [];
	      errors.forEach(function(error) {
	        // Removes errors without a message
	        if (v.isArray(error.error)) {
	          error.error.forEach(function(msg) {
	            ret.push(v.extend({}, error, {error: msg}));
	          });
	        } else {
	          ret.push(error);
	        }
	      });
	      return ret;
	    },

	    // Converts the error mesages by prepending the attribute name unless the
	    // message is prefixed by ^
	    convertErrorMessages: function(errors, options) {
	      options = options || {};

	      var ret = [];
	      errors.forEach(function(errorInfo) {
	        var error = v.result(errorInfo.error,
	            errorInfo.value,
	            errorInfo.attribute,
	            errorInfo.options,
	            errorInfo.attributes,
	            errorInfo.globalOptions);

	        if (!v.isString(error)) {
	          ret.push(errorInfo);
	          return;
	        }

	        if (error[0] === '^') {
	          error = error.slice(1);
	        } else if (options.fullMessages !== false) {
	          error = v.capitalize(v.prettify(errorInfo.attribute)) + " " + error;
	        }
	        error = error.replace(/\\\^/g, "^");
	        error = v.format(error, {value: v.stringifyValue(errorInfo.value)});
	        ret.push(v.extend({}, errorInfo, {error: error}));
	      });
	      return ret;
	    },

	    // In:
	    // [{attribute: "<attributeName>", ...}]
	    // Out:
	    // {"<attributeName>": [{attribute: "<attributeName>", ...}]}
	    groupErrorsByAttribute: function(errors) {
	      var ret = {};
	      errors.forEach(function(error) {
	        var list = ret[error.attribute];
	        if (list) {
	          list.push(error);
	        } else {
	          ret[error.attribute] = [error];
	        }
	      });
	      return ret;
	    },

	    // In:
	    // [{error: "<message 1>", ...}, {error: "<message 2>", ...}]
	    // Out:
	    // ["<message 1>", "<message 2>"]
	    flattenErrorsToArray: function(errors) {
	      return errors.map(function(error) { return error.error; });
	    },

	    cleanAttributes: function(attributes, whitelist) {
	      function whitelistCreator(obj, key, last) {
	        if (v.isObject(obj[key])) {
	          return obj[key];
	        }
	        return (obj[key] = last ? true : {});
	      }

	      function buildObjectWhitelist(whitelist) {
	        var ow = {}
	          , lastObject
	          , attr;
	        for (attr in whitelist) {
	          if (!whitelist[attr]) {
	            continue;
	          }
	          v.forEachKeyInKeypath(ow, attr, whitelistCreator);
	        }
	        return ow;
	      }

	      function cleanRecursive(attributes, whitelist) {
	        if (!v.isObject(attributes)) {
	          return attributes;
	        }

	        var ret = v.extend({}, attributes)
	          , w
	          , attribute;

	        for (attribute in attributes) {
	          w = whitelist[attribute];

	          if (v.isObject(w)) {
	            ret[attribute] = cleanRecursive(ret[attribute], w);
	          } else if (!w) {
	            delete ret[attribute];
	          }
	        }
	        return ret;
	      }

	      if (!v.isObject(whitelist) || !v.isObject(attributes)) {
	        return {};
	      }

	      whitelist = buildObjectWhitelist(whitelist);
	      return cleanRecursive(attributes, whitelist);
	    },

	    exposeModule: function(validate, root, exports, module, define) {
	      if (exports) {
	        if (module && module.exports) {
	          exports = module.exports = validate;
	        }
	        exports.validate = validate;
	      } else {
	        root.validate = validate;
	        if (validate.isFunction(define) && define.amd) {
	          define([], function () { return validate; });
	        }
	      }
	    },

	    warn: function(msg) {
	      if (typeof console !== "undefined" && console.warn) {
	        console.warn("[validate.js] " + msg);
	      }
	    },

	    error: function(msg) {
	      if (typeof console !== "undefined" && console.error) {
	        console.error("[validate.js] " + msg);
	      }
	    }
	  });

	  validate.validators = {
	    // Presence validates that the value isn't empty
	    presence: function(value, options) {
	      options = v.extend({}, this.options, options);
	      if (v.isEmpty(value)) {
	        return options.message || this.message || "can't be blank";
	      }
	    },
	    length: function(value, options, attribute) {
	      // Empty values are allowed
	      if (v.isEmpty(value)) {
	        return;
	      }

	      options = v.extend({}, this.options, options);

	      var is = options.is
	        , maximum = options.maximum
	        , minimum = options.minimum
	        , tokenizer = options.tokenizer || function(val) { return val; }
	        , err
	        , errors = [];

	      value = tokenizer(value);
	      var length = value.length;
	      if(!v.isNumber(length)) {
	        v.error(v.format("Attribute %{attr} has a non numeric value for `length`", {attr: attribute}));
	        return options.message || this.notValid || "has an incorrect length";
	      }

	      // Is checks
	      if (v.isNumber(is) && length !== is) {
	        err = options.wrongLength ||
	          this.wrongLength ||
	          "is the wrong length (should be %{count} characters)";
	        errors.push(v.format(err, {count: is}));
	      }

	      if (v.isNumber(minimum) && length < minimum) {
	        err = options.tooShort ||
	          this.tooShort ||
	          "is too short (minimum is %{count} characters)";
	        errors.push(v.format(err, {count: minimum}));
	      }

	      if (v.isNumber(maximum) && length > maximum) {
	        err = options.tooLong ||
	          this.tooLong ||
	          "is too long (maximum is %{count} characters)";
	        errors.push(v.format(err, {count: maximum}));
	      }

	      if (errors.length > 0) {
	        return options.message || errors;
	      }
	    },
	    numericality: function(value, options) {
	      // Empty values are fine
	      if (v.isEmpty(value)) {
	        return;
	      }

	      options = v.extend({}, this.options, options);

	      var errors = []
	        , name
	        , count
	        , checks = {
	            greaterThan:          function(v, c) { return v > c; },
	            greaterThanOrEqualTo: function(v, c) { return v >= c; },
	            equalTo:              function(v, c) { return v === c; },
	            lessThan:             function(v, c) { return v < c; },
	            lessThanOrEqualTo:    function(v, c) { return v <= c; },
	            divisibleBy:          function(v, c) { return v % c === 0; }
	          };

	      // Strict will check that it is a valid looking number
	      if (v.isString(value) && options.strict) {
	        var pattern = "^(0|[1-9]\\d*)";
	        if (!options.onlyInteger) {
	          pattern += "(\\.\\d+)?";
	        }
	        pattern += "$";

	        if (!(new RegExp(pattern).test(value))) {
	          return options.message || options.notValid || this.notValid || "must be a valid number";
	        }
	      }

	      // Coerce the value to a number unless we're being strict.
	      if (options.noStrings !== true && v.isString(value)) {
	        value = +value;
	      }

	      // If it's not a number we shouldn't continue since it will compare it.
	      if (!v.isNumber(value)) {
	        return options.message || options.notValid || this.notValid || "is not a number";
	      }

	      // Same logic as above, sort of. Don't bother with comparisons if this
	      // doesn't pass.
	      if (options.onlyInteger && !v.isInteger(value)) {
	        return options.message || options.notInteger || this.notInteger  || "must be an integer";
	      }

	      for (name in checks) {
	        count = options[name];
	        if (v.isNumber(count) && !checks[name](value, count)) {
	          // This picks the default message if specified
	          // For example the greaterThan check uses the message from
	          // this.notGreaterThan so we capitalize the name and prepend "not"
	          var key = "not" + v.capitalize(name);
	          var msg = options[key] || this[key] || "must be %{type} %{count}";

	          errors.push(v.format(msg, {
	            count: count,
	            type: v.prettify(name)
	          }));
	        }
	      }

	      if (options.odd && value % 2 !== 1) {
	        errors.push(options.notOdd || this.notOdd || "must be odd");
	      }
	      if (options.even && value % 2 !== 0) {
	        errors.push(options.notEven || this.notEven || "must be even");
	      }

	      if (errors.length) {
	        return options.message || errors;
	      }
	    },
	    datetime: v.extend(function(value, options) {
	      if (!v.isFunction(this.parse) || !v.isFunction(this.format)) {
	        throw new Error("Both the parse and format functions needs to be set to use the datetime/date validator");
	      }

	      // Empty values are fine
	      if (v.isEmpty(value)) {
	        return;
	      }

	      options = v.extend({}, this.options, options);

	      var err
	        , errors = []
	        , earliest = options.earliest ? this.parse(options.earliest, options) : NaN
	        , latest = options.latest ? this.parse(options.latest, options) : NaN;

	      value = this.parse(value, options);

	      // 86400000 is the number of seconds in a day, this is used to remove
	      // the time from the date
	      if (isNaN(value) || options.dateOnly && value % 86400000 !== 0) {
	        err = options.notValid ||
	          options.message ||
	          this.notValid ||
	          "must be a valid date";
	        return v.format(err, {value: arguments[0]});
	      }

	      if (!isNaN(earliest) && value < earliest) {
	        err = options.tooEarly ||
	          options.message ||
	          this.tooEarly ||
	          "must be no earlier than %{date}";
	        err = v.format(err, {
	          value: this.format(value, options),
	          date: this.format(earliest, options)
	        });
	        errors.push(err);
	      }

	      if (!isNaN(latest) && value > latest) {
	        err = options.tooLate ||
	          options.message ||
	          this.tooLate ||
	          "must be no later than %{date}";
	        err = v.format(err, {
	          date: this.format(latest, options),
	          value: this.format(value, options)
	        });
	        errors.push(err);
	      }

	      if (errors.length) {
	        return v.unique(errors);
	      }
	    }, {
	      parse: null,
	      format: null
	    }),
	    date: function(value, options) {
	      options = v.extend({}, options, {dateOnly: true});
	      return v.validators.datetime.call(v.validators.datetime, value, options);
	    },
	    format: function(value, options) {
	      if (v.isString(options) || (options instanceof RegExp)) {
	        options = {pattern: options};
	      }

	      options = v.extend({}, this.options, options);

	      var message = options.message || this.message || "is invalid"
	        , pattern = options.pattern
	        , match;

	      // Empty values are allowed
	      if (v.isEmpty(value)) {
	        return;
	      }
	      if (!v.isString(value)) {
	        return message;
	      }

	      if (v.isString(pattern)) {
	        pattern = new RegExp(options.pattern, options.flags);
	      }
	      match = pattern.exec(value);
	      if (!match || match[0].length != value.length) {
	        return message;
	      }
	    },
	    inclusion: function(value, options) {
	      // Empty values are fine
	      if (v.isEmpty(value)) {
	        return;
	      }
	      if (v.isArray(options)) {
	        options = {within: options};
	      }
	      options = v.extend({}, this.options, options);
	      if (v.contains(options.within, value)) {
	        return;
	      }
	      var message = options.message ||
	        this.message ||
	        "^%{value} is not included in the list";
	      return v.format(message, {value: value});
	    },
	    exclusion: function(value, options) {
	      // Empty values are fine
	      if (v.isEmpty(value)) {
	        return;
	      }
	      if (v.isArray(options)) {
	        options = {within: options};
	      }
	      options = v.extend({}, this.options, options);
	      if (!v.contains(options.within, value)) {
	        return;
	      }
	      var message = options.message || this.message || "^%{value} is restricted";
	      return v.format(message, {value: value});
	    },
	    email: v.extend(function(value, options) {
	      options = v.extend({}, this.options, options);
	      var message = options.message || this.message || "is not a valid email";
	      // Empty values are fine
	      if (v.isEmpty(value)) {
	        return;
	      }
	      if (!v.isString(value)) {
	        return message;
	      }
	      if (!this.PATTERN.exec(value)) {
	        return message;
	      }
	    }, {
	      PATTERN: /^[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9\u007F-\uffff!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}$/i
	    }),
	    equality: function(value, options, attribute, attributes) {
	      if (v.isEmpty(value)) {
	        return;
	      }

	      if (v.isString(options)) {
	        options = {attribute: options};
	      }
	      options = v.extend({}, this.options, options);
	      var message = options.message ||
	        this.message ||
	        "is not equal to %{attribute}";

	      if (v.isEmpty(options.attribute) || !v.isString(options.attribute)) {
	        throw new Error("The attribute must be a non empty string");
	      }

	      var otherValue = v.getDeepObjectValue(attributes, options.attribute)
	        , comparator = options.comparator || function(v1, v2) {
	          return v1 === v2;
	        };

	      if (!comparator(value, otherValue, options, attribute, attributes)) {
	        return v.format(message, {attribute: v.prettify(options.attribute)});
	      }
	    },

	    // A URL validator that is used to validate URLs with the ability to
	    // restrict schemes and some domains.
	    url: function(value, options) {
	      if (v.isEmpty(value)) {
	        return;
	      }

	      options = v.extend({}, this.options, options);

	      var message = options.message || this.message || "is not a valid url"
	        , schemes = options.schemes || this.schemes || ['http', 'https']
	        , allowLocal = options.allowLocal || this.allowLocal || false;

	      if (!v.isString(value)) {
	        return message;
	      }

	      // https://gist.github.com/dperini/729294
	      var regex =
	        "^" +
	          // schemes
	          "(?:(?:" + schemes.join("|") + "):\\/\\/)" +
	          // credentials
	          "(?:\\S+(?::\\S*)?@)?";

	      regex += "(?:";

	      var tld = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))";

	      // This ia a special case for the localhost hostname
	      if (allowLocal) {
	        tld += "?";
	      } else {
	        // private & local addresses
	        regex +=
	          "(?!10(?:\\.\\d{1,3}){3})" +
	          "(?!127(?:\\.\\d{1,3}){3})" +
	          "(?!169\\.254(?:\\.\\d{1,3}){2})" +
	          "(?!192\\.168(?:\\.\\d{1,3}){2})" +
	          "(?!172" +
	          "\\.(?:1[6-9]|2\\d|3[0-1])" +
	          "(?:\\.\\d{1,3})" +
	          "{2})";
	      }

	      var hostname =
	          "(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)" +
	          "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*" +
	          tld + ")";

	      // reserved addresses
	      regex +=
	          "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" +
	          "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" +
	          "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" +
	        "|" +
	          hostname +
	          // port number
	          "(?::\\d{2,5})?" +
	          // path
	          "(?:\\/[^\\s]*)?" +
	        "$";

	      var PATTERN = new RegExp(regex, 'i');
	      if (!PATTERN.exec(value)) {
	        return message;
	      }
	    }
	  };

	  validate.exposeModule(validate, this, exports, module, __webpack_require__(79));
	}).call(this,
	         true ? /* istanbul ignore next */ exports : null,
	         true ? /* istanbul ignore next */ module : null,
	        __webpack_require__(79));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(16)(module)))

/***/ },

/***/ 79:
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ }

/******/ });