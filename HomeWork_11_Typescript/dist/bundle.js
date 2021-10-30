(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import {Peoples} from ".modules/peoples";
var consts_1 = require("./modules/consts");
var peoples_1 = require("./modules/peoples");
document.addEventListener("DOMContentLoaded", function () {
    var peoples = new peoples_1.Peoples(consts_1.ROOT_URL + "people/");
    //peoples.push(p);
    // const p = new People("aaa","bbb","ccc","ddd");
    // p.GetValForIndex("name");
    // console.log(p.GetValForIndex("name"));
    // console.log(peoples);
    document.getElementById("next").addEventListener("click", function () {
        var z = peoples.nextLisener();
    });
    document.getElementById("prev").addEventListener("click", function () {
        var z = peoples.prevLisener();
    });
    function clearSort() {
        Array.from(document.getElementsByClassName("sort")).forEach(function (element) {
            element.dataset.sort = "0";
            element.textContent = element.textContent.replace(/[\^˅]/g, "");
        });
    }
    Array.from(document.getElementsByClassName("sort")).forEach(function (e) {
        e.addEventListener("click", function () {
            var str = e.textContent.replace(/[\^˅]/g, "");
            if (e.dataset.sort === "1") {
                peoples.sort(e.dataset.sorttype, e.dataset.sortname, 2);
                clearSort();
                e.dataset.sort = "2";
                e.textContent = "˅" + str;
            }
            else {
                peoples.sort(e.dataset.sorttype, e.dataset.sortname, 1);
                clearSort();
                e.dataset.sort = "1";
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
            case "name":
                return this.name;
            case "mass":
                return this.mass;
            case "height":
                return this.height;
            case "gender":
                return this.gender;
        }
        return "";
    };
    return People;
}());
exports.People = People;
var Peoples = /** @class */ (function () {
    function Peoples(url) {
        var _this = this;
        this._arr = [];
        this._blockFetch = true;
        this._sorttype = "default";
        this._sortname = "default";
        this._vector = 0;
        var z = this.fetchURL(url, function (r) {
            _this._current_page = 0;
            _this._count = r.count;
            _this._next = r.next ? r.next : "";
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
                        document.body.style.cursor = "progress";
                        this._blockFetch = true;
                        return [4 /*yield*/, fetch(url)
                                .then(function (response) { return response.json(); })
                                .then(callback)
                                .catch(errorCallback)];
                    case 1:
                        _a.sent();
                        this._blockFetch = false;
                        document.body.style.cursor = "default";
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
        document.getElementById("next").disabled = ((this._current_page + 1) * 10 > this.length) && !this._next;
        document.getElementById("prev").disabled = !this._current_page;
        document.getElementById("page").innerHTML = String(this._current_page + 1);
        var tbl_tbody = document.getElementById("tbl_tbody");
        tbl_tbody.innerHTML = "";
        this._arr.forEach(function (p, i) {
            if (i >= _this._current_page * 10 && i < (_this._current_page + 1) * 10) {
                var tr = document.createElement("tr");
                var td1 = document.createElement("td");
                td1.append(document.createTextNode(String(i + 1)));
                tr.append(td1);
                var td2 = document.createElement("td");
                td2.append(document.createTextNode(p.name));
                tr.append(td2);
                var td3 = document.createElement("td");
                td3.append(document.createTextNode(p.height));
                tr.append(td3);
                var td4 = document.createElement("td");
                td4.append(document.createTextNode(p.mass));
                tr.append(td4);
                var td5 = document.createElement("td");
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
        if (this._next && ((this._current_page + 1) * 10 >= this.length)) {
            var z = this.fetchURL(this._next, function (r) {
                _this._current_page++;
                _this._next = r.next ? r.next : "";
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
        if (sorttype === "string") {
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
        else if (sorttype === "number") {
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
        else if (sorttype === "default") {
            //
        }
        else {
            throw new Error("Не верный параметр сортировки");
        }
    };
    Peoples.prototype.GetNumberFromPeopleForSortname = function (a, sortname) {
        return Number.isNaN(Number(a.GetValForIndex(sortname).replace(/,/g, ""))) ? 0 : Number(a.GetValForIndex(sortname).replace(/,/g, ""));
    };
    return Peoples;
}());
exports.Peoples = Peoples;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZHoxMS50cyIsInNyYy9tb2R1bGVzL2NvbnN0cy50cyIsInNyYy9tb2R1bGVzL3Blb3BsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLDJDQUEyQztBQUMzQywyQ0FBeUM7QUFFekMsNkNBQTBDO0FBSTFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRTtJQUUxQyxJQUFNLE9BQU8sR0FBRyxJQUFJLGlCQUFPLENBQUMsaUJBQVEsR0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoRCxrQkFBa0I7SUFDbEIsaURBQWlEO0lBQ2pELDRCQUE0QjtJQUM1Qix5Q0FBeUM7SUFDekMsd0JBQXdCO0lBRXhCLFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFDO1FBQ3JELElBQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztJQUVILFFBQVEsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFDO1FBQ3JELElBQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNwQyxDQUFDLENBQUMsQ0FBQztJQUVILFNBQVMsU0FBUztRQUNkLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLHNCQUFzQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsT0FBb0I7WUFDN0UsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQzNCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ25FLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNELEtBQUssQ0FBQyxJ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QixDQUFTLEVBQUUsUUFBZ0I7UUFDdEQsT0FBTyxNQUFNLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN6SSxDQUFDO0lBRUwsY0FBQztBQUFELENBdktBLEFBdUtDLElBQUE7QUF2S1ksMEJBQU8iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIvL2ltcG9ydCB7UGVvcGxlc30gZnJvbSBcIi5tb2R1bGVzL3Blb3BsZXNcIjtcclxuaW1wb3J0IHtST09UX1VSTH0gZnJvbSAnLi9tb2R1bGVzL2NvbnN0cydcclxuaW1wb3J0IHtQZW9wbGV9IGZyb20gXCIuL21vZHVsZXMvcGVvcGxlc1wiO1xyXG5pbXBvcnQge1Blb3BsZXN9IGZyb20gXCIuL21vZHVsZXMvcGVvcGxlc1wiO1xyXG5cclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcclxuXHJcbiAgICBjb25zdCBwZW9wbGVzID0gbmV3IFBlb3BsZXMoUk9PVF9VUkwrXCJwZW9wbGUvXCIpO1xyXG4gICAgLy9wZW9wbGVzLnB1c2gocCk7XHJcbiAgICAvLyBjb25zdCBwID0gbmV3IFBlb3BsZShcImFhYVwiLFwiYmJiXCIsXCJjY2NcIixcImRkZFwiKTtcclxuICAgIC8vIHAuR2V0VmFsRm9ySW5kZXgoXCJuYW1lXCIpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocC5HZXRWYWxGb3JJbmRleChcIm5hbWVcIikpO1xyXG4gICAgLy8gY29uc29sZS5sb2cocGVvcGxlcyk7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0XCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpPT4ge1xyXG4gICAgICAgIGNvbnN0IHogPSBwZW9wbGVzLm5leHRMaXNlbmVyKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PiB7XHJcbiAgICAgICAgY29uc3QgeiA9IHBlb3BsZXMucHJldkxpc2VuZXIoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNsZWFyU29ydCgpe1xyXG4gICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNvcnRcIikpLmZvckVhY2goKGVsZW1lbnQ6IEhUTUxFbGVtZW50KT0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LnNvcnQgPSBcIjBcIjtcclxuICAgICAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGVsZW1lbnQudGV4dENvbnRlbnQucmVwbGFjZSgvW1xcXsuFXS9nLFwiXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwic29ydFwiKSkuZm9yRWFjaCgoZTogSFRNTEVsZW1lbnQpPT57XHJcbiAgICAgICAgZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwoKT0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3RyID0gZS50ZXh0Q29udGVudC5yZXBsYWNlKC9bXFxey4VdL2csXCJcIik7XHJcbiAgICAgICAgICAgIGlmIChlLmRhdGFzZXQuc29ydCA9PT0gXCIxXCIpe1xyXG4gICAgICAgICAgICAgICAgcGVvcGxlcy5zb3J0KGUuZGF0YXNldC5zb3J0dHlwZSwgZS5kYXRhc2V0LnNvcnRuYW1lLCAyKTtcclxuICAgICAgICAgICAgICAgIGNsZWFyU29ydCgpO1xyXG4gICAgICAgICAgICAgICAgZS5kYXRhc2V0LnNvcnQgPSBcIjJcIjtcclxuICAgICAgICAgICAgICAgIGUudGV4dENvbnRlbnQgPSBcIsuFXCIrc3RyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgIHBlb3BsZXMuc29ydChlLmRhdGFzZXQuc29ydHR5cGUsIGUuZGF0YXNldC5zb3J0bmFtZSwgMSk7XHJcbiAgICAgICAgICAgICAgICBjbGVhclNvcnQoKTtcclxuICAgICAgICAgICAgICAgIGUuZGF0YXNldC5zb3J0ID0gXCIxXCI7XHJcbiAgICAgICAgICAgICAgICBlLnRleHRDb250ZW50ID0gXCJeXCIrc3RyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcGVvcGxlcy5kcmF3KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxufSk7XHJcblxyXG4iLCJleHBvcnQgY29uc3QgUk9PVF9VUkw6IHN0cmluZyA9ICdodHRwczovL3N3YXBpLmRldi9hcGkvJzsiLCJcclxuZXhwb3J0IGNsYXNzIFBlb3BsZXtcclxuICAgIHByb3RlY3RlZCBfbmFtZTogc3RyaW5nXHJcbiAgICBwcm90ZWN0ZWQgX2hlaWdodDogc3RyaW5nXHJcbiAgICBwcm90ZWN0ZWQgX21hc3M6IHN0cmluZ1xyXG4gICAgcHJvdGVjdGVkIF9nZW5kZXI6IHN0cmluZ1xyXG4gICAgY29uc3RydWN0b3Iobjogc3RyaW5nLGg6IHN0cmluZyxtOiBzdHJpbmcsZzogc3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbjtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGg7XHJcbiAgICAgICAgdGhpcy5tYXNzID0gbTtcclxuICAgICAgICB0aGlzLmdlbmRlciA9IGc7XHJcbiAgICB9XHJcbiAgICBzZXQgbmFtZShuOiBzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuO1xyXG4gICAgfVxyXG4gICAgc2V0IGhlaWdodChoOiBzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuX2hlaWdodCA9IGg7XHJcbiAgICB9XHJcbiAgICBzZXQgbWFzcyhtOiBzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuX21hc3MgPSBtO1xyXG4gICAgfVxyXG4gICAgc2V0IGdlbmRlcihnOiBzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMuX2dlbmRlciA9IGc7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5hbWUoKTogc3RyaW5ne1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG4gICAgZ2V0IGhlaWdodCgpOiBzdHJpbmd7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICAgIH1cclxuICAgIGdldCBtYXNzKCk6IHN0cmluZ3tcclxuICAgICAgICByZXR1cm4gdGhpcy5fbWFzcztcclxuICAgIH1cclxuICAgIGdldCBnZW5kZXIoKTogc3RyaW5ne1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9nZW5kZXI7XHJcbiAgICB9XHJcbiAgICBHZXRWYWxGb3JJbmRleCh4OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIC8vINGPINGC0YPRgiDQstGB0Y/QutC+0LUg0L/QvtC/0YDQvtCx0L7QstCw0LsuLi4g0Lgg0L3QuNGH0LXQs9C+INC70YPRh9GI0LUg0L3QtSDQv9GA0LjQtNGD0LzQsNC7INGH0LXQvCDRjdGC0L4gOihcclxuICAgICAgICBzd2l0Y2ggKHgpe1xyXG4gICAgICAgICAgICBjYXNlIFwibmFtZVwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgICAgICAgICAgY2FzZSBcIm1hc3NcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1hc3M7XHJcbiAgICAgICAgICAgIGNhc2UgXCJoZWlnaHRcIjpcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmhlaWdodDtcclxuICAgICAgICAgICAgY2FzZSBcImdlbmRlclwiOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5pbnRlcmZhY2UgSW50ZXJmYWNlUGVvcGxle1xyXG4gICAgbmFtZTogc3RyaW5nXHJcbiAgICBoZWlnaHQ6IHN0cmluZ1xyXG4gICAgbWFzczogc3RyaW5nXHJcbiAgICBnZW5kZXI6IHN0cmluZ1xyXG59XHJcblxyXG5pbnRlcmZhY2UgSW50ZXJmYWNlUGVvcGxlc3tcclxuICAgIGNvdW50OiBudW1iZXJcclxuICAgIG5leHQ6IHN0cmluZyB8IG51bGxcclxuICAgIHJlc3VsdHM6IEFycmF5PEludGVyZmFjZVBlb3BsZT5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBlb3BsZXN7XHJcbiAgICBwcm90ZWN0ZWQgX2FycjogQXJyYXk8UGVvcGxlPiA9IFtdXHJcbiAgICBwcm90ZWN0ZWQgX25leHQ6IHN0cmluZ1xyXG4gICAgcHJvdGVjdGVkIF9jb3VudDogbnVtYmVyXHJcbiAgICBwcm90ZWN0ZWQgX2N1cnJlbnRfcGFnZTogbnVtYmVyXHJcbiAgICBwcm90ZWN0ZWQgX2Jsb2NrRmV0Y2g6IGJvb2xlYW4gPSB0cnVlXHJcbiAgICBwcm90ZWN0ZWQgX3NvcnR0eXBlOiBzdHJpbmcgPSBcImRlZmF1bHRcIlxyXG4gICAgcHJvdGVjdGVkIF9zb3J0bmFtZTogc3RyaW5nID0gXCJkZWZhdWx0XCJcclxuICAgIHByb3RlY3RlZCBfdmVjdG9yOiBudW1iZXIgPSAwXHJcbiAgICBjb25zdHJ1Y3Rvcih1cmw6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHogPSB0aGlzLmZldGNoVVJMKHVybCwgKHI6IEludGVyZmFjZVBlb3BsZXMpPT57XHJcbiAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRfcGFnZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuX2NvdW50ID0gci5jb3VudDtcclxuICAgICAgICAgICAgdGhpcy5fbmV4dCA9IHIubmV4dCA/IHIubmV4dCA6IFwiXCI7XHJcbiAgICAgICAgICAgIHIucmVzdWx0cy5mb3JFYWNoKChlOiBJbnRlcmZhY2VQZW9wbGUpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwID0gbmV3IFBlb3BsZShlLm5hbWUsIGUuaGVpZ2h0LCBlLm1hc3MsIGUuZ2VuZGVyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHVzaChwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhdygpO1xyXG4gICAgICAgIH0sIGNvbnNvbGUuZXJyb3IpXHJcbiAgICAgICAgei5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuICAgIH1cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBwdXNoKHA6IFBlb3BsZSk6IG51bWJlcntcclxuICAgICAgICB0aGlzLl9hcnIucHVzaChwKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXJyLmxlbmd0aC0xO1xyXG4gICAgfVxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGFzeW5jIGZldGNoVVJMICh1cmw6IHN0cmluZywgY2FsbGJhY2s6IGFueSwgZXJyb3JDYWxsYmFjazogYW55KSAge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yPVwicHJvZ3Jlc3NcIjtcclxuICAgICAgICB0aGlzLl9ibG9ja0ZldGNoID0gdHJ1ZTtcclxuICAgICAgICBhd2FpdCBmZXRjaCh1cmwpXHJcbiAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAgICAgLnRoZW4oY2FsbGJhY2spXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnJvckNhbGxiYWNrKTtcclxuICAgICAgICB0aGlzLl9ibG9ja0ZldGNoID0gZmFsc2U7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5jdXJzb3I9XCJkZWZhdWx0XCI7XHJcbiAgICB9XHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gICAgZ2V0IGxlbmd0aCgpOiBudW1iZXJ7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Fyci5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgIGRyYXcoKXtcclxuICAgICAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXh0XCIpIGFzIEhUTUxCdXR0b25FbGVtZW50KS5kaXNhYmxlZCA9ICgodGhpcy5fY3VycmVudF9wYWdlKzEpKjEwID4gdGhpcy5sZW5ndGgpICYmICF0aGlzLl9uZXh0O1xyXG4gICAgICAgIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByZXZcIilhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSAhdGhpcy5fY3VycmVudF9wYWdlO1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFnZVwiKS5pbm5lckhUTUw9U3RyaW5nKHRoaXMuX2N1cnJlbnRfcGFnZSsxKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGJsX3Rib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YmxfdGJvZHlcIik7XHJcblxyXG4gICAgICAgIHRibF90Ym9keS5pbm5lckhUTUw9XCJcIjtcclxuICAgICAgICB0aGlzLl9hcnIuZm9yRWFjaCgocCxpKT0+e1xyXG4gICAgICAgICAgICBpZiAoaT49dGhpcy5fY3VycmVudF9wYWdlKjEwICYmIGk8KHRoaXMuX2N1cnJlbnRfcGFnZSsxKSoxMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGQxLmFwcGVuZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShTdHJpbmcoaSArIDEpKSk7XHJcbiAgICAgICAgICAgICAgICB0ci5hcHBlbmQodGQxKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIik7XHJcbiAgICAgICAgICAgICAgICB0ZDIuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHAubmFtZSkpO1xyXG4gICAgICAgICAgICAgICAgdHIuYXBwZW5kKHRkMik7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGQzLmFwcGVuZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwLmhlaWdodCkpO1xyXG4gICAgICAgICAgICAgICAgdHIuYXBwZW5kKHRkMyk7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGQ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICAgICAgdGQ0LmFwcGVuZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwLm1hc3MpKTtcclxuICAgICAgICAgICAgICAgIHRyLmFwcGVuZCh0ZDQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRkNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKTtcclxuICAgICAgICAgICAgICAgIHRkNS5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUocC5nZW5kZXIpKTtcclxuICAgICAgICAgICAgICAgIHRyLmFwcGVuZCh0ZDUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRibF90Ym9keS5hcHBlbmQodHIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBuZXh0TGlzZW5lcigpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5fYmxvY2tGZXRjaCkge3JldHVybiBmYWxzZTt9XHJcbiAgICAgICAgaWYgKHRoaXMuX25leHQgJiYgKCh0aGlzLl9jdXJyZW50X3BhZ2UrMSkqMTAgPj0gdGhpcy5sZW5ndGgpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHogPSB0aGlzLmZldGNoVVJMKHRoaXMuX25leHQsIChyOiBJbnRlcmZhY2VQZW9wbGVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyZW50X3BhZ2UrKztcclxuICAgICAgICAgICAgICAgIHRoaXMuX25leHQgPSByLm5leHQgPyByLm5leHQgOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgci5yZXN1bHRzLmZvckVhY2goKGU6IEludGVyZmFjZVBlb3BsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBuZXcgUGVvcGxlKGUubmFtZSwgZS5oZWlnaHQsIGUubWFzcywgZS5nZW5kZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHVzaChwKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zb3J0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgICAgICAgfSwgY29uc29sZS5lcnJvcilcclxuICAgICAgICAgICAgei5jYXRjaChjb25zb2xlLmVycm9yKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50X3BhZ2UrKztcclxuICAgICAgICAgICAgdGhpcy5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXZMaXNlbmVyKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLl9ibG9ja0ZldGNoKSB7cmV0dXJuIGZhbHNlO31cclxuICAgICAgICB0aGlzLl9jdXJyZW50X3BhZ2UtLTtcclxuICAgICAgICB0aGlzLmRyYXcoKTtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBzb3J0KHNvcnR0eXBlOiBzdHJpbmcgPSB0aGlzLl9zb3J0dHlwZSwgc29ydG5hbWU6IHN0cmluZyA9IHRoaXMuX3NvcnRuYW1lLCB2ZWN0b3I6IG51bWJlciA9IHRoaXMuX3ZlY3Rvcil7XHJcbiAgICAgICAgdGhpcy5fc29ydHR5cGUgPSBzb3J0dHlwZTtcclxuICAgICAgICB0aGlzLl9zb3J0bmFtZSA9IHNvcnRuYW1lO1xyXG4gICAgICAgIHRoaXMuX3ZlY3RvciA9IHZlY3RvcjtcclxuICAgICAgICBpZiAoc29ydHR5cGUgPT09IFwic3RyaW5nXCIpe1xyXG4gICAgICAgICAgICBpZiAodmVjdG9yID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hcnIuc29ydCgoYTpQZW9wbGUsIGI6UGVvcGxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeCA9IGEuR2V0VmFsRm9ySW5kZXgoc29ydG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHkgPSBiLkdldFZhbEZvckluZGV4KHNvcnRuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeCA+IHkpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4ID09PSB5KSByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeCA8IHkpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYXJyLnNvcnQoKGE6UGVvcGxlLCBiOlBlb3BsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHggPSBhLkdldFZhbEZvckluZGV4KHNvcnRuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB5ID0gYi5HZXRWYWxGb3JJbmRleChzb3J0bmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggPCB5KSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeCA9PT0geSkgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggPiB5KSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzb3J0dHlwZSA9PT0gXCJudW1iZXJcIikge1xyXG4gICAgICAgICAgICBpZiAodmVjdG9yID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9hcnIuc29ydCgoYTpQZW9wbGUsIGI6UGVvcGxlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeCA9IHRoaXMuR2V0TnVtYmVyRnJvbVBlb3BsZUZvclNvcnRuYW1lKGEsc29ydG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHkgPSB0aGlzLkdldE51bWJlckZyb21QZW9wbGVGb3JTb3J0bmFtZShiLHNvcnRuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeCA+IHkpIHJldHVybiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh4ID09PSB5KSByZXR1cm4gMDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeCA8IHkpIHJldHVybiAtMTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYXJyLnNvcnQoKGE6UGVvcGxlLCBiOlBlb3BsZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHggPSB0aGlzLkdldE51bWJlckZyb21QZW9wbGVGb3JTb3J0bmFtZShhLHNvcnRuYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB5ID0gdGhpcy5HZXROdW1iZXJGcm9tUGVvcGxlRm9yU29ydG5hbWUoYixzb3J0bmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggPCB5KSByZXR1cm4gMTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoeCA9PT0geSkgcmV0dXJuIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHggPiB5KSByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzb3J0dHlwZSA9PT0gXCJkZWZhdWx0XCIpe1xyXG4gICAgICAgICAgICAvL1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCLQndC1INCy0LXRgNC90YvQuSDQv9Cw0YDQsNC80LXRgtGAINGB0L7RgNGC0LjRgNC+0LLQutC4XCIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgR2V0TnVtYmVyRnJvbVBlb3BsZUZvclNvcnRuYW1lKGE6IFBlb3BsZSwgc29ydG5hbWU6IHN0cmluZyk6IG51bWJlcntcclxuICAgICAgICByZXR1cm4gTnVtYmVyLmlzTmFOKE51bWJlcihhLkdldFZhbEZvckluZGV4KHNvcnRuYW1lKS5yZXBsYWNlKC8sL2csIFwiXCIpKSkgPyAwIDogTnVtYmVyKGEuR2V0VmFsRm9ySW5kZXgoc29ydG5hbWUpLnJlcGxhY2UoLywvZywgXCJcIikpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIl19
