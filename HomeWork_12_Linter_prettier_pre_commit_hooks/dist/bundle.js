(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var consts_1 = require("./modules/consts");
var peoples_1 = require("./modules/peoples");
document.addEventListener('DOMContentLoaded', function () {
    var peoples = new peoples_1.Peoples(consts_1.ROOT_URL + "people/");
    document.getElementById('next').addEventListener('click', function () {
        var z = peoples.nextLisener();
    });
    document.getElementById('prev').addEventListener('click', function () {
        var z = peoples.prevLisener();
    });
    function clearSort() {
        Array.from(document.getElementsByClassName('sort')).forEach(function (element) {
            element.dataset.sort = '0';
            element.textContent = element.textContent.replace(/[\^˅]/g, '');
        });
    }
    Array.from(document.getElementsByClassName('sort')).forEach(function (e) {
        e.addEventListener('click', function () {
            var str = e.textContent.replace(/[\^˅]/g, '');
            if (e.dataset.sort === '1') {
                peoples.sort(e.dataset.sorttype, e.dataset.sortname, 2);
                clearSort();
                e.dataset.sort = '2';
                e.textContent = "\u02C5" + str;
            }
            else {
                peoples.sort(e.dataset.sorttype, e.dataset.sortname, 1);
                clearSort();
                e.dataset.sort = '1';
                e.textContent = "^" + str;
            }
            peoples.draw();
        });
    });
});
},{"./modules/consts":2,"./modules/peoples":3}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ROOT_URL = void 0;
exports.ROOT_URL = 'https://swapi.dev/api/';
},{}],3:[function(require,module,exports){
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Peoples = exports.People = void 0;
var People = /** @class */ (function () {
    function People(n, h, m, g) {
        this.name = n;
        this.height = h;
        this.mass = m;
        this.gender = g;
    }
    Object.defineProperty(People.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (n) {
            this._name = n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(People.prototype, "height", {
        get: function () {
            return this._height;
        },
        set: function (h) {
            this._height = h;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(People.prototype, "mass", {
        get: function () {
            return this._mass;
        },
        set: function (m) {
            this._mass = m;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(People.prototype, "gender", {
        get: function () {
            return this._gender;
        },
        set: function (g) {
            this._gender = g;
        },
        enumerable: false,
        configurable: true
    });
    People.prototype.GetValForIndex = function (x) {
        // я тут всякое попробовал... и ничего лучше не придумал чем это :(
        switch (x) {
            case 'name':
                return this.name;
            case 'mass':
                return this.mass;
            case 'height':
                return this.height;
            case 'gender':
                return this.gender;
        }
        return '';
    };
    return People;
}());
exports.People = People;
var Peoples = /** @class */ (function () {
    function Peoples(url) {
        var _this = this;
        this._arr = [];
        this._blockFetch = true;
        this._sorttype = 'default';
        this._sortname = 'default';
        this._vector = 0;
        var z = this.fetchURL(url, function (r) {
            _this._current_page = 0;
            _this._count = r.count;
            _this._next = r.next ? r.next : '';
            r.results.forEach(function (e) {
                var p = new People(e.name, e.height, e.mass, e.gender);
                _this.push(p);
            });
            _this.draw();
        }, console.error);
        z.catch(console.error);
    }
    //----------------------------------
    Peoples.prototype.push = function (p) {
        this._arr.push(p);
        return this._arr.length - 1;
    };
    //----------------------------------
    Peoples.prototype.fetchURL = function (url, callback, errorCallback) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        document.body.style.cursor = 'progress';
                        this._blockFetch = true;
                        return [4 /*yield*/, fetch(url)
                                .then(function (response) { return response.json(); })
                                .then(callback)
                                .catch(errorCallback)];
                    case 1:
                        _a.sent();
                        this._blockFetch = false;
                        document.body.style.cursor = 'default';
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(Peoples.prototype, "length", {
        //----------------------------------
        get: function () {
            return this._arr.length;
        },
        enumerable: false,
        configurable: true
    });
    //----------------------------------
    Peoples.prototype.draw = function () {
        var _this = this;
        document.getElementById('next').disabled = (this._current_page + 1) * 10 > this.length && !this._next;
        document.getElementById('prev').disabled = !this._current_page;
        document.getElementById('page').innerHTML = String(this._current_page + 1);
        var tbl_tbody = document.getElementById('tbl_tbody');
        tbl_tbody.innerHTML = '';
        this._arr.forEach(function (p, i) {
            if (i >= _this._current_page * 10 && i < (_this._current_page + 1) * 10) {
                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                td1.append(document.createTextNode(String(i + 1)));
                tr.append(td1);
                var td2 = document.createElement('td');
                td2.append(document.createTextNode(p.name));
                tr.append(td2);
                var td3 = document.createElement('td');
                td3.append(document.createTextNode(p.height));
                tr.append(td3);
                var td4 = document.createElement('td');
                td4.append(document.createTextNode(p.mass));
                tr.append(td4);
                var td5 = document.createElement('td');
                td5.append(document.createTextNode(p.gender));
                tr.append(td5);
                tbl_tbody.append(tr);
            }
        });
    };
    //----------------------------------
    Peoples.prototype.nextLisener = function () {
        var _this = this;
        if (this._blockFetch) {
            return false;
        }
        if (this._next && (this._current_page + 1) * 10 >= this.length) {
            var z = this.fetchURL(this._next, function (r) {
                _this._current_page++;
                _this._next = r.next ? r.next : '';
                r.results.forEach(function (e) {
                    var p = new People(e.name, e.height, e.mass, e.gender);
                    _this.push(p);
                });
                _this.sort();
                _this.draw();
            }, console.error);
            z.catch(console.error);
        }
        else {
            this._current_page++;
            this.draw();
        }
        return true;
    };
    Peoples.prototype.prevLisener = function () {
        if (this._blockFetch) {
            return false;
        }
        this._current_page--;
        this.draw();
        return true;
    };
    //------------------------------------------------------------------------------
    Peoples.prototype.sort = function (sorttype, sortname, vector) {
        var _this = this;
        if (sorttype === void 0) { sorttype = this._sorttype; }
        if (sortname === void 0) { sortname = this._sortname; }
        if (vector === void 0) { vector = this._vector; }
        this._sorttype = sorttype;
        this._sortname = sortname;
        this._vector = vector;
        if (sorttype === 'string') {
            if (vector === 1) {
                this._arr.sort(function (a, b) {
                    var x = a.GetValForIndex(sortname);
                    var y = b.GetValForIndex(sortname);
                    if (x > y)
                        return 1;
                    if (x === y)
                        return 0;
                    if (x < y)
                        return -1;
                });
            }
            else {
                this._arr.sort(function (a, b) {
                    var x = a.GetValForIndex(sortname);
                    var y = b.GetValForIndex(sortname);
                    if (x < y)
                        return 1;
                    if (x === y)
                        return 0;
                    if (x > y)
                        return -1;
                });
            }
        }
        else if (sorttype === 'number') {
            if (vector === 1) {
                this._arr.sort(function (a, b) {
                    var x = _this.GetNumberFromPeopleForSortname(a, sortname);
                    var y = _this.GetNumberFromPeopleForSortname(b, sortname);
                    if (x > y)
                        return 1;
                    if (x === y)
                        return 0;
                    if (x < y)
                        return -1;
                });
            }
            else {
                this._arr.sort(function (a, b) {
                    var x = _this.GetNumberFromPeopleForSortname(a, sortname);
                    var y = _this.GetNumberFromPeopleForSortname(b, sortname);
                    if (x < y)
                        return 1;
                    if (x === y)
                        return 0;
                    if (x > y)
                        return -1;
                });
            }
        }
        else if (sorttype === 'default') {
            //
        }
        else {
            throw new Error('Не верный параметр сортировки');
        }
    };
    Peoples.prototype.GetNumberFromPeopleForSortname = function (a, sortname) {
        return Number.isNaN(Number(a.GetValForIndex(sortname).replace(/,/g, '')))
            ? 0
            : Number(a.GetValForIndex(sortname).replace(/,/g, ''));
    };
    return Peoples;
}());
exports.Peoples = Peoples;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZHoxMi50cyIsInNyYy9tb2R1bGVzL2NvbnN0cy50cyIsInNyYy9tb2R1bGVzL3Blb3BsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLDJDQUE0QztBQUM1Qyw2Q0FBNEM7QUFFNUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFO0lBQzVDLElBQU0sT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBSSxpQkFBUSxZQUFTLENBQUMsQ0FBQztJQUVsRCxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUN4RCxJQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUN4RCxJQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxTQUFTLFNBQVM7UUFDaEIsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFvQjtZQUMvRSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDM0IsT0FBTyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDbEUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxDQUFjO1FBQ3pFLENBQUMs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SUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkUsQ0FBQyxDQUFDLENBQUM7WUFDSCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFDSCxjQUFDO0FBQUQsQ0ExTEEsQUEwTEMsSUFBQTtBQTFMWSwwQkFBTyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCB7IFJPT1RfVVJMIH0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0cyc7XG5pbXBvcnQgeyBQZW9wbGVzIH0gZnJvbSAnLi9tb2R1bGVzL3Blb3BsZXMnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBwZW9wbGVzID0gbmV3IFBlb3BsZXMoYCR7Uk9PVF9VUkx9cGVvcGxlL2ApO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgeiA9IHBlb3BsZXMubmV4dExpc2VuZXIoKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXYnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb25zdCB6ID0gcGVvcGxlcy5wcmV2TGlzZW5lcigpO1xuICB9KTtcblxuICBmdW5jdGlvbiBjbGVhclNvcnQoKSB7XG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzb3J0JykpLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmRhdGFzZXQuc29ydCA9ICcwJztcbiAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50LnRleHRDb250ZW50LnJlcGxhY2UoL1tcXF7LhV0vZywgJycpO1xuICAgIH0pO1xuICB9XG4gIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc29ydCcpKS5mb3JFYWNoKChlOiBIVE1MRWxlbWVudCkgPT4ge1xuICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBjb25zdCBzdHIgPSBlLnRleHRDb250ZW50LnJlcGxhY2UoL1tcXF7LhV0vZywgJycpO1xuICAgICAgaWYgKGUuZGF0YXNldC5zb3J0ID09PSAnMScpIHtcbiAgICAgICAgcGVvcGxlcy5zb3J0KGUuZGF0YXNldC5zb3J0dHlwZSwgZS5kYXRhc2V0LnNvcnRuYW1lLCAyKTtcbiAgICAgICAgY2xlYXJTb3J0KCk7XG4gICAgICAgIGUuZGF0YXNldC5zb3J0ID0gJzInO1xuICAgICAgICBlLnRleHRDb250ZW50ID0gYMuFJHtzdHJ9YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBlb3BsZXMuc29ydChlLmRhdGFzZXQuc29ydHR5cGUsIGUuZGF0YXNldC5zb3J0bmFtZSwgMSk7XG4gICAgICAgIGNsZWFyU29ydCgpO1xuICAgICAgICBlLmRhdGFzZXQuc29ydCA9ICcxJztcbiAgICAgICAgZS50ZXh0Q29udGVudCA9IGBeJHtzdHJ9YDtcbiAgICAgIH1cbiAgICAgIHBlb3BsZXMuZHJhdygpO1xuICAgIH0pO1xuICB9KTtcbn0pO1xuIiwiZXhwb3J0IGNvbnN0IFJPT1RfVVJMID0gJ2h0dHBzOi8vc3dhcGkuZGV2L2FwaS8nO1xuIiwiZXhwb3J0IGNsYXNzIFBlb3BsZSB7XG4gIHByb3RlY3RlZCBfbmFtZTogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCBfaGVpZ2h0OiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIF9tYXNzOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIF9nZW5kZXI6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihuOiBzdHJpbmcsIGg6IHN0cmluZywgbTogc3RyaW5nLCBnOiBzdHJpbmcpIHtcbiAgICB0aGlzLm5hbWUgPSBuO1xuICAgIHRoaXMuaGVpZ2h0ID0gaDtcbiAgICB0aGlzLm1hc3MgPSBtO1xuICAgIHRoaXMuZ2VuZGVyID0gZztcbiAgfVxuXG4gIHNldCBuYW1lKG46IHN0cmluZykge1xuICAgIHRoaXMuX25hbWUgPSBuO1xuICB9XG5cbiAgc2V0IGhlaWdodChoOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9oZWlnaHQgPSBoO1xuICB9XG5cbiAgc2V0IG1hc3MobTogc3RyaW5nKSB7XG4gICAgdGhpcy5fbWFzcyA9IG07XG4gIH1cblxuICBzZXQgZ2VuZGVyKGc6IHN0cmluZykge1xuICAgIHRoaXMuX2dlbmRlciA9IGc7XG4gIH1cblxuICBnZXQgbmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICB9XG5cbiAgZ2V0IGhlaWdodCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XG4gIH1cblxuICBnZXQgbWFzcygpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9tYXNzO1xuICB9XG5cbiAgZ2V0IGdlbmRlcigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLl9nZW5kZXI7XG4gIH1cblxuICBHZXRWYWxGb3JJbmRleCh4OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIC8vINGPINGC0YPRgiDQstGB0Y/QutC+0LUg0L/QvtC/0YDQvtCx0L7QstCw0LsuLi4g0Lgg0L3QuNGH0LXQs9C+INC70YPRh9GI0LUg0L3QtSDQv9GA0LjQtNGD0LzQsNC7INGH0LXQvCDRjdGC0L4gOihcbiAgICBzd2l0Y2ggKHgpIHtcbiAgICAgIGNhc2UgJ25hbWUnOlxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgICAgY2FzZSAnbWFzcyc6XG4gICAgICAgIHJldHVybiB0aGlzLm1hc3M7XG4gICAgICBjYXNlICdoZWlnaHQnOlxuICAgICAgICByZXR1cm4gdGhpcy5oZWlnaHQ7XG4gICAgICBjYXNlICdnZW5kZXInOlxuICAgICAgICByZXR1cm4gdGhpcy5nZW5kZXI7XG4gICAgfVxuICAgIHJldHVybiAnJztcbiAgfVxufVxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmludGVyZmFjZSBJbnRlcmZhY2VQZW9wbGUge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBoZWlnaHQ6IHN0cmluZztcbiAgICBtYXNzOiBzdHJpbmc7XG4gICAgZ2VuZGVyOiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBJbnRlcmZhY2VQZW9wbGVzIHtcbiAgICBjb3VudDogbnVtYmVyO1xuICAgIG5leHQ6IHN0cmluZyB8IG51bGw7XG4gICAgcmVzdWx0czogQXJyYXk8SW50ZXJmYWNlUGVvcGxlPjtcbn1cblxuZXhwb3J0IGNsYXNzIFBlb3BsZXMge1xuICBwcm90ZWN0ZWQgX2FycjogQXJyYXk8UGVvcGxlPiA9IFtdO1xuXG4gIHByb3RlY3RlZCBfbmV4dDogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCBfY291bnQ6IG51bWJlcjtcblxuICBwcm90ZWN0ZWQgX2N1cnJlbnRfcGFnZTogbnVtYmVyO1xuXG4gIHByb3RlY3RlZCBfYmxvY2tGZXRjaCA9IHRydWU7XG5cbiAgcHJvdGVjdGVkIF9zb3J0dHlwZSA9ICdkZWZhdWx0JztcblxuICBwcm90ZWN0ZWQgX3NvcnRuYW1lID0gJ2RlZmF1bHQnO1xuXG4gIHByb3RlY3RlZCBfdmVjdG9yID0gMDtcblxuICBjb25zdHJ1Y3Rvcih1cmw6IHN0cmluZykge1xuICAgIGNvbnN0IHogPSB0aGlzLmZldGNoVVJMKFxuICAgICAgdXJsLFxuICAgICAgKHI6IEludGVyZmFjZVBlb3BsZXMpID0+IHtcbiAgICAgICAgdGhpcy5fY3VycmVudF9wYWdlID0gMDtcbiAgICAgICAgdGhpcy5fY291bnQgPSByLmNvdW50O1xuICAgICAgICB0aGlzLl9uZXh0ID0gci5uZXh0ID8gci5uZXh0IDogJyc7XG4gICAgICAgIHIucmVzdWx0cy5mb3JFYWNoKChlOiBJbnRlcmZhY2VQZW9wbGUpID0+IHtcbiAgICAgICAgICBjb25zdCBwID0gbmV3IFBlb3BsZShlLm5hbWUsIGUuaGVpZ2h0LCBlLm1hc3MsIGUuZ2VuZGVyKTtcbiAgICAgICAgICB0aGlzLnB1c2gocCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgIH0sXG4gICAgICBjb25zb2xlLmVycm9yLFxuICAgICk7XG4gICAgei5jYXRjaChjb25zb2xlLmVycm9yKTtcbiAgfVxuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBwdXNoKHA6IFBlb3BsZSk6IG51bWJlciB7XG4gICAgdGhpcy5fYXJyLnB1c2gocCk7XG4gICAgcmV0dXJuIHRoaXMuX2Fyci5sZW5ndGggLSAxO1xuICB9XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGFzeW5jIGZldGNoVVJMKHVybDogc3RyaW5nLCBjYWxsYmFjazogYW55LCBlcnJvckNhbGxiYWNrOiBhbnkpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdwcm9ncmVzcyc7XG4gICAgdGhpcy5fYmxvY2tGZXRjaCA9IHRydWU7XG4gICAgYXdhaXQgZmV0Y2godXJsKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihjYWxsYmFjaylcbiAgICAgIC5jYXRjaChlcnJvckNhbGxiYWNrKTtcbiAgICB0aGlzLl9ibG9ja0ZldGNoID0gZmFsc2U7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3IgPSAnZGVmYXVsdCc7XG4gIH1cblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZ2V0IGxlbmd0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9hcnIubGVuZ3RoO1xuICB9XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIGRyYXcoKSB7XG4gICAgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXh0JykgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmRpc2FibGVkID0gKHRoaXMuX2N1cnJlbnRfcGFnZSArIDEpICogMTAgPiB0aGlzLmxlbmd0aCAmJiAhdGhpcy5fbmV4dDtcbiAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXYnKSBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSAhdGhpcy5fY3VycmVudF9wYWdlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlJykuaW5uZXJIVE1MID0gU3RyaW5nKHRoaXMuX2N1cnJlbnRfcGFnZSArIDEpO1xuXG4gICAgY29uc3QgdGJsX3Rib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RibF90Ym9keScpO1xuXG4gICAgdGJsX3Rib2R5LmlubmVySFRNTCA9ICcnO1xuICAgIHRoaXMuX2Fyci5mb3JFYWNoKChwLCBpKSA9PiB7XG4gICAgICBpZiAoaSA+PSB0aGlzLl9jdXJyZW50X3BhZ2UgKiAxMCAmJiBpIDwgKHRoaXMuX2N1cnJlbnRfcGFnZSArIDEpICogMTApIHtcbiAgICAgICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuXG4gICAgICAgIGNvbnN0IHRkMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIHRkMS5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoU3RyaW5nKGkgKyAxKSkpO1xuICAgICAgICB0ci5hcHBlbmQodGQxKTtcblxuICAgICAgICBjb25zdCB0ZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICB0ZDIuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHAubmFtZSkpO1xuICAgICAgICB0ci5hcHBlbmQodGQyKTtcblxuICAgICAgICBjb25zdCB0ZDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICB0ZDMuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHAuaGVpZ2h0KSk7XG4gICAgICAgIHRyLmFwcGVuZCh0ZDMpO1xuXG4gICAgICAgIGNvbnN0IHRkNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIHRkNC5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocC5tYXNzKSk7XG4gICAgICAgIHRyLmFwcGVuZCh0ZDQpO1xuXG4gICAgICAgIGNvbnN0IHRkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgIHRkNS5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocC5nZW5kZXIpKTtcbiAgICAgICAgdHIuYXBwZW5kKHRkNSk7XG5cbiAgICAgICAgdGJsX3Rib2R5LmFwcGVuZCh0cik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbmV4dExpc2VuZXIoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX2Jsb2NrRmV0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX25leHQgJiYgKHRoaXMuX2N1cnJlbnRfcGFnZSArIDEpICogMTAgPj0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHogPSB0aGlzLmZldGNoVVJMKFxuICAgICAgICB0aGlzLl9uZXh0LFxuICAgICAgICAocjogSW50ZXJmYWNlUGVvcGxlcykgPT4ge1xuICAgICAgICAgIHRoaXMuX2N1cnJlbnRfcGFnZSsrO1xuICAgICAgICAgIHRoaXMuX25leHQgPSByLm5leHQgPyByLm5leHQgOiAnJztcbiAgICAgICAgICByLnJlc3VsdHMuZm9yRWFjaCgoZTogSW50ZXJmYWNlUGVvcGxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwID0gbmV3IFBlb3BsZShlLm5hbWUsIGUuaGVpZ2h0LCBlLm1hc3MsIGUuZ2VuZGVyKTtcbiAgICAgICAgICAgIHRoaXMucHVzaChwKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnNvcnQoKTtcbiAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29uc29sZS5lcnJvcixcbiAgICAgICk7XG4gICAgICB6LmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jdXJyZW50X3BhZ2UrKztcbiAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByZXZMaXNlbmVyKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLl9ibG9ja0ZldGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuX2N1cnJlbnRfcGFnZS0tO1xuICAgIHRoaXMuZHJhdygpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc29ydChzb3J0dHlwZTogc3RyaW5nID0gdGhpcy5fc29ydHR5cGUsIHNvcnRuYW1lOiBzdHJpbmcgPSB0aGlzLl9zb3J0bmFtZSwgdmVjdG9yOiBudW1iZXIgPSB0aGlzLl92ZWN0b3IpIHtcbiAgICB0aGlzLl9zb3J0dHlwZSA9IHNvcnR0eXBlO1xuICAgIHRoaXMuX3NvcnRuYW1lID0gc29ydG5hbWU7XG4gICAgdGhpcy5fdmVjdG9yID0gdmVjdG9yO1xuICAgIGlmIChzb3J0dHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh2ZWN0b3IgPT09IDEpIHtcbiAgICAgICAgdGhpcy5fYXJyLnNvcnQoKGE6IFBlb3BsZSwgYjogUGVvcGxlKSA9PiB7XG4gICAgICAgICAgY29uc3QgeCA9IGEuR2V0VmFsRm9ySW5kZXgoc29ydG5hbWUpO1xuICAgICAgICAgIGNvbnN0IHkgPSBiLkdldFZhbEZvckluZGV4KHNvcnRuYW1lKTtcbiAgICAgICAgICBpZiAoeCA+IHkpIHJldHVybiAxO1xuICAgICAgICAgIGlmICh4ID09PSB5KSByZXR1cm4gMDtcbiAgICAgICAgICBpZiAoeCA8IHkpIHJldHVybiAtMTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9hcnIuc29ydCgoYTogUGVvcGxlLCBiOiBQZW9wbGUpID0+IHtcbiAgICAgICAgICBjb25zdCB4ID0gYS5HZXRWYWxGb3JJbmRleChzb3J0bmFtZSk7XG4gICAgICAgICAgY29uc3QgeSA9IGIuR2V0VmFsRm9ySW5kZXgoc29ydG5hbWUpO1xuICAgICAgICAgIGlmICh4IDwgeSkgcmV0dXJuIDE7XG4gICAgICAgICAgaWYgKHggPT09IHkpIHJldHVybiAwO1xuICAgICAgICAgIGlmICh4ID4geSkgcmV0dXJuIC0xO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNvcnR0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgaWYgKHZlY3RvciA9PT0gMSkge1xuICAgICAgICB0aGlzLl9hcnIuc29ydCgoYTogUGVvcGxlLCBiOiBQZW9wbGUpID0+IHtcbiAgICAgICAgICBjb25zdCB4ID0gdGhpcy5HZXROdW1iZXJGcm9tUGVvcGxlRm9yU29ydG5hbWUoYSwgc29ydG5hbWUpO1xuICAgICAgICAgIGNvbnN0IHkgPSB0aGlzLkdldE51bWJlckZyb21QZW9wbGVGb3JTb3J0bmFtZShiLCBzb3J0bmFtZSk7XG4gICAgICAgICAgaWYgKHggPiB5KSByZXR1cm4gMTtcbiAgICAgICAgICBpZiAoeCA9PT0geSkgcmV0dXJuIDA7XG4gICAgICAgICAgaWYgKHggPCB5KSByZXR1cm4gLTE7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fYXJyLnNvcnQoKGE6IFBlb3BsZSwgYjogUGVvcGxlKSA9PiB7XG4gICAgICAgICAgY29uc3QgeCA9IHRoaXMuR2V0TnVtYmVyRnJvbVBlb3BsZUZvclNvcnRuYW1lKGEsIHNvcnRuYW1lKTtcbiAgICAgICAgICBjb25zdCB5ID0gdGhpcy5HZXROdW1iZXJGcm9tUGVvcGxlRm9yU29ydG5hbWUoYiwgc29ydG5hbWUpO1xuICAgICAgICAgIGlmICh4IDwgeSkgcmV0dXJuIDE7XG4gICAgICAgICAgaWYgKHggPT09IHkpIHJldHVybiAwO1xuICAgICAgICAgIGlmICh4ID4geSkgcmV0dXJuIC0xO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNvcnR0eXBlID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIC8vXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign0J3QtSDQstC10YDQvdGL0Lkg0L/QsNGA0LDQvNC10YLRgCDRgdC+0YDRgtC40YDQvtCy0LrQuCcpO1xuICAgIH1cbiAgfVxuXG4gIEdldE51bWJlckZyb21QZW9wbGVGb3JTb3J0bmFtZShhOiBQZW9wbGUsIHNvcnRuYW1lOiBzdHJpbmcpOiBudW1iZXIge1xuICAgIHJldHVybiBOdW1iZXIuaXNOYU4oTnVtYmVyKGEuR2V0VmFsRm9ySW5kZXgoc29ydG5hbWUpLnJlcGxhY2UoLywvZywgJycpKSlcbiAgICAgID8gMFxuICAgICAgOiBOdW1iZXIoYS5HZXRWYWxGb3JJbmRleChzb3J0bmFtZSkucmVwbGFjZSgvLC9nLCAnJykpO1xuICB9XG59XG4iXX0=
