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
            // no-param-reassign
            // As this article explains, this rule is meant to avoid mutating the arguments object. If you assign to a parameter and then try and access some of the parameters via the arguments object, it can lead to unexpected results. You could keep the rule intact and maintain the AirBnB style by using another variable to get a reference to the DOM element and then modify that:
            var e = element;
            e.dataset.sort = '0';
            e.textContent = element.textContent.replace(/[\^˅]/g, '');
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
exports.default = exports.ROOT_URL;
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
            default:
                return '';
        }
        return '';
    };
    People.prototype.GetNumberFromPeopleForSortname = function (sortname) {
        return Number.isNaN(Number(this.GetValForIndex(sortname).replace(/,/g, '')))
            ? 0
            : Number(this.GetValForIndex(sortname).replace(/,/g, ''));
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
        document.getElementById('next').disabled = (this._current_page + 1) * 10 > this.length && !this._next; // eslint-disable-line max-len
        document.getElementById('prev').disabled = !this._current_page;
        document.getElementById('page').innerHTML = String(this._current_page + 1);
        var TblTbody = document.getElementById('tbl_tbody');
        TblTbody.innerHTML = '';
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
                TblTbody.append(tr);
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
                _this._current_page += 1;
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
            this._current_page += 1;
            this.draw();
        }
        return true;
    };
    Peoples.prototype.prevLisener = function () {
        if (this._blockFetch) {
            return false;
        }
        this._current_page -= 1;
        this.draw();
        return true;
    };
    //------------------------------------------------------------------------------
    Peoples.prototype.sort = function (sorttype, sortname, vector) {
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
                    return 0;
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
                    return 0;
                });
            }
        }
        else if (sorttype === 'number') {
            if (vector === 1) {
                this._arr.sort(function (a, b) {
                    var x = a.GetNumberFromPeopleForSortname(sortname);
                    var y = b.GetNumberFromPeopleForSortname(sortname);
                    if (x > y)
                        return 1;
                    if (x === y)
                        return 0;
                    if (x < y)
                        return -1;
                    return 0;
                });
            }
            else {
                this._arr.sort(function (a, b) {
                    var x = a.GetNumberFromPeopleForSortname(sortname);
                    var y = b.GetNumberFromPeopleForSortname(sortname);
                    if (x < y)
                        return 1;
                    if (x === y)
                        return 0;
                    if (x > y)
                        return -1;
                    return 0;
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
    return Peoples;
}());
exports.Peoples = Peoples;
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvZHoxMi50cyIsInNyYy9tb2R1bGVzL2NvbnN0cy50cyIsInNyYy9tb2R1bGVzL3Blb3BsZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLDJDQUE0QztBQUM1Qyw2Q0FBNEM7QUFFNUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFO0lBQzVDLElBQU0sT0FBTyxHQUFHLElBQUksaUJBQU8sQ0FBSSxpQkFBUSxZQUFTLENBQUMsQ0FBQztJQUVsRCxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUN4RCxJQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtRQUN4RCxJQUFNLENBQUMsR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQyxDQUFDLENBQUM7SUFFSCxTQUFTLFNBQVM7UUFDaEIsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFvQjtZQUMvRSxvQkFBb0I7WUFDcEIsbVhBQW1YO1lBQ25YLElBQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQztZQUNsQixDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7WUFDckIsQ0FBQyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsc0JBQXNC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ckQsSUFBSSxDQUFDLEdBQUcsQ0FBQzt3QkFBRSxPQUFPLENBQUMsQ0FBQztvQkFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQzt3QkFBRSxPQUFPLENBQUMsQ0FBQztvQkFDdEIsSUFBSSxDQUFDLEdBQUcsQ0FBQzt3QkFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNyQixPQUFPLENBQUMsQ0FBQztnQkFDWCxDQUFDLENBQUMsQ0FBQzthQUNKO1NBQ0Y7YUFBTSxJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7WUFDakMsRUFBRTtTQUNIO2FBQU07WUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLCtCQUErQixDQUFDLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0lBQ0gsY0FBQztBQUFELENBeExBLEFBd0xDLElBQUE7QUF4TFksMEJBQU8iLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgeyBST09UX1VSTCB9IGZyb20gJy4vbW9kdWxlcy9jb25zdHMnO1xuaW1wb3J0IHsgUGVvcGxlcyB9IGZyb20gJy4vbW9kdWxlcy9wZW9wbGVzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgY29uc3QgcGVvcGxlcyA9IG5ldyBQZW9wbGVzKGAke1JPT1RfVVJMfXBlb3BsZS9gKTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV4dCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHogPSBwZW9wbGVzLm5leHRMaXNlbmVyKCk7XG4gIH0pO1xuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmV2JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY29uc3QgeiA9IHBlb3BsZXMucHJldkxpc2VuZXIoKTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gY2xlYXJTb3J0KCkge1xuICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc29ydCcpKS5mb3JFYWNoKChlbGVtZW50OiBIVE1MRWxlbWVudCkgPT4ge1xuICAgICAgLy8gbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIC8vIEFzIHRoaXMgYXJ0aWNsZSBleHBsYWlucywgdGhpcyBydWxlIGlzIG1lYW50IHRvIGF2b2lkIG11dGF0aW5nIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBJZiB5b3UgYXNzaWduIHRvIGEgcGFyYW1ldGVyIGFuZCB0aGVuIHRyeSBhbmQgYWNjZXNzIHNvbWUgb2YgdGhlIHBhcmFtZXRlcnMgdmlhIHRoZSBhcmd1bWVudHMgb2JqZWN0LCBpdCBjYW4gbGVhZCB0byB1bmV4cGVjdGVkIHJlc3VsdHMuIFlvdSBjb3VsZCBrZWVwIHRoZSBydWxlIGludGFjdCBhbmQgbWFpbnRhaW4gdGhlIEFpckJuQiBzdHlsZSBieSB1c2luZyBhbm90aGVyIHZhcmlhYmxlIHRvIGdldCBhIHJlZmVyZW5jZSB0byB0aGUgRE9NIGVsZW1lbnQgYW5kIHRoZW4gbW9kaWZ5IHRoYXQ6XG4gICAgICBjb25zdCBlID0gZWxlbWVudDtcbiAgICAgIGUuZGF0YXNldC5zb3J0ID0gJzAnO1xuICAgICAgZS50ZXh0Q29udGVudCA9IGVsZW1lbnQudGV4dENvbnRlbnQucmVwbGFjZSgvW1xcXsuFXS9nLCAnJyk7XG4gICAgfSk7XG4gIH1cbiAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzb3J0JykpLmZvckVhY2goKGU6IEhUTUxFbGVtZW50KSA9PiB7XG4gICAgZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGNvbnN0IHN0ciA9IGUudGV4dENvbnRlbnQucmVwbGFjZSgvW1xcXsuFXS9nLCAnJyk7XG4gICAgICBpZiAoZS5kYXRhc2V0LnNvcnQgPT09ICcxJykge1xuICAgICAgICBwZW9wbGVzLnNvcnQoZS5kYXRhc2V0LnNvcnR0eXBlLCBlLmRhdGFzZXQuc29ydG5hbWUsIDIpO1xuICAgICAgICBjbGVhclNvcnQoKTtcbiAgICAgICAgZS5kYXRhc2V0LnNvcnQgPSAnMic7XG4gICAgICAgIGUudGV4dENvbnRlbnQgPSBgy4Uke3N0cn1gO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGVvcGxlcy5zb3J0KGUuZGF0YXNldC5zb3J0dHlwZSwgZS5kYXRhc2V0LnNvcnRuYW1lLCAxKTtcbiAgICAgICAgY2xlYXJTb3J0KCk7XG4gICAgICAgIGUuZGF0YXNldC5zb3J0ID0gJzEnO1xuICAgICAgICBlLnRleHRDb250ZW50ID0gYF4ke3N0cn1gO1xuICAgICAgfVxuICAgICAgcGVvcGxlcy5kcmF3KCk7XG4gICAgfSk7XG4gIH0pO1xufSk7XG4iLCJleHBvcnQgY29uc3QgUk9PVF9VUkwgPSAnaHR0cHM6Ly9zd2FwaS5kZXYvYXBpLyc7XG5leHBvcnQgZGVmYXVsdCBST09UX1VSTDtcbiIsImV4cG9ydCBjbGFzcyBQZW9wbGUge1xuICBwcm90ZWN0ZWQgX25hbWU6IHN0cmluZztcblxuICBwcm90ZWN0ZWQgX2hlaWdodDogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCBfbWFzczogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCBfZ2VuZGVyOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3Iobjogc3RyaW5nLCBoOiBzdHJpbmcsIG06IHN0cmluZywgZzogc3RyaW5nKSB7XG4gICAgdGhpcy5uYW1lID0gbjtcbiAgICB0aGlzLmhlaWdodCA9IGg7XG4gICAgdGhpcy5tYXNzID0gbTtcbiAgICB0aGlzLmdlbmRlciA9IGc7XG4gIH1cblxuICBzZXQgbmFtZShuOiBzdHJpbmcpIHtcbiAgICB0aGlzLl9uYW1lID0gbjtcbiAgfVxuXG4gIGdldCBuYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gIH1cblxuICBzZXQgaGVpZ2h0KGg6IHN0cmluZykge1xuICAgIHRoaXMuX2hlaWdodCA9IGg7XG4gIH1cblxuICBnZXQgaGVpZ2h0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcbiAgfVxuXG4gIHNldCBtYXNzKG06IHN0cmluZykge1xuICAgIHRoaXMuX21hc3MgPSBtO1xuICB9XG5cbiAgZ2V0IG1hc3MoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fbWFzcztcbiAgfVxuXG4gIHNldCBnZW5kZXIoZzogc3RyaW5nKSB7XG4gICAgdGhpcy5fZ2VuZGVyID0gZztcbiAgfVxuXG4gIGdldCBnZW5kZXIoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fZ2VuZGVyO1xuICB9XG5cbiAgR2V0VmFsRm9ySW5kZXgoeDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAvLyDRjyDRgtGD0YIg0LLRgdGP0LrQvtC1INC/0L7Qv9GA0L7QsdC+0LLQsNC7Li4uINC4INC90LjRh9C10LPQviDQu9GD0YfRiNC1INC90LUg0L/RgNC40LTRg9C80LDQuyDRh9C10Lwg0Y3RgtC+IDooXG4gICAgc3dpdGNoICh4KSB7XG4gICAgICBjYXNlICduYW1lJzpcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICAgIGNhc2UgJ21hc3MnOlxuICAgICAgICByZXR1cm4gdGhpcy5tYXNzO1xuICAgICAgY2FzZSAnaGVpZ2h0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0O1xuICAgICAgY2FzZSAnZ2VuZGVyJzpcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZGVyO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICBHZXROdW1iZXJGcm9tUGVvcGxlRm9yU29ydG5hbWUoc29ydG5hbWU6IHN0cmluZyk6IG51bWJlciB7XG4gICAgcmV0dXJuIE51bWJlci5pc05hTihOdW1iZXIodGhpcy5HZXRWYWxGb3JJbmRleChzb3J0bmFtZSkucmVwbGFjZSgvLC9nLCAnJykpKVxuICAgICAgPyAwXG4gICAgICA6IE51bWJlcih0aGlzLkdldFZhbEZvckluZGV4KHNvcnRuYW1lKS5yZXBsYWNlKC8sL2csICcnKSk7XG4gIH1cbn1cblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pbnRlcmZhY2UgSW50ZXJmYWNlUGVvcGxlIHtcbiAgbmFtZTogc3RyaW5nO1xuICBoZWlnaHQ6IHN0cmluZztcbiAgbWFzczogc3RyaW5nO1xuICBnZW5kZXI6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIEludGVyZmFjZVBlb3BsZXMge1xuICBjb3VudDogbnVtYmVyO1xuICBuZXh0OiBzdHJpbmcgfCBudWxsO1xuICByZXN1bHRzOiBBcnJheTxJbnRlcmZhY2VQZW9wbGU+O1xufVxuXG5leHBvcnQgY2xhc3MgUGVvcGxlcyB7XG4gIHByb3RlY3RlZCBfYXJyOiBBcnJheTxQZW9wbGU+ID0gW107XG5cbiAgcHJvdGVjdGVkIF9uZXh0OiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIF9jb3VudDogbnVtYmVyO1xuXG4gIHByb3RlY3RlZCBfY3VycmVudF9wYWdlOiBudW1iZXI7XG5cbiAgcHJvdGVjdGVkIF9ibG9ja0ZldGNoID0gdHJ1ZTtcblxuICBwcm90ZWN0ZWQgX3NvcnR0eXBlID0gJ2RlZmF1bHQnO1xuXG4gIHByb3RlY3RlZCBfc29ydG5hbWUgPSAnZGVmYXVsdCc7XG5cbiAgcHJvdGVjdGVkIF92ZWN0b3IgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nKSB7XG4gICAgY29uc3QgeiA9IHRoaXMuZmV0Y2hVUkwoXG4gICAgICB1cmwsXG4gICAgICAocjogSW50ZXJmYWNlUGVvcGxlcykgPT4ge1xuICAgICAgICB0aGlzLl9jdXJyZW50X3BhZ2UgPSAwO1xuICAgICAgICB0aGlzLl9jb3VudCA9IHIuY291bnQ7XG4gICAgICAgIHRoaXMuX25leHQgPSByLm5leHQgPyByLm5leHQgOiAnJztcbiAgICAgICAgci5yZXN1bHRzLmZvckVhY2goKGU6IEludGVyZmFjZVBlb3BsZSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHAgPSBuZXcgUGVvcGxlKGUubmFtZSwgZS5oZWlnaHQsIGUubWFzcywgZS5nZW5kZXIpO1xuICAgICAgICAgIHRoaXMucHVzaChwKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgICAgfSxcbiAgICAgIGNvbnNvbGUuZXJyb3IsXG4gICAgKTtcbiAgICB6LmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICB9XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIHB1c2gocDogUGVvcGxlKTogbnVtYmVyIHtcbiAgICB0aGlzLl9hcnIucHVzaChwKTtcbiAgICByZXR1cm4gdGhpcy5fYXJyLmxlbmd0aCAtIDE7XG4gIH1cblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgYXN5bmMgZmV0Y2hVUkwodXJsOiBzdHJpbmcsIGNhbGxiYWNrOiBhbnksIGVycm9yQ2FsbGJhY2s6IGFueSkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuY3Vyc29yID0gJ3Byb2dyZXNzJztcbiAgICB0aGlzLl9ibG9ja0ZldGNoID0gdHJ1ZTtcbiAgICBhd2FpdCBmZXRjaCh1cmwpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKGNhbGxiYWNrKVxuICAgICAgLmNhdGNoKGVycm9yQ2FsbGJhY2spO1xuICAgIHRoaXMuX2Jsb2NrRmV0Y2ggPSBmYWxzZTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcbiAgfVxuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBnZXQgbGVuZ3RoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX2Fyci5sZW5ndGg7XG4gIH1cblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgZHJhdygpIHtcbiAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25leHQnKSBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSAodGhpcy5fY3VycmVudF9wYWdlICsgMSkgKiAxMCA+IHRoaXMubGVuZ3RoICYmICF0aGlzLl9uZXh0OyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG1heC1sZW5cbiAgICAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByZXYnKSBhcyBIVE1MQnV0dG9uRWxlbWVudCkuZGlzYWJsZWQgPSAhdGhpcy5fY3VycmVudF9wYWdlO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlJykuaW5uZXJIVE1MID0gU3RyaW5nKHRoaXMuX2N1cnJlbnRfcGFnZSArIDEpO1xuXG4gICAgY29uc3QgVGJsVGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGJsX3Rib2R5Jyk7XG5cbiAgICBUYmxUYm9keS5pbm5lckhUTUwgPSAnJztcbiAgICB0aGlzLl9hcnIuZm9yRWFjaCgocCwgaSkgPT4ge1xuICAgICAgaWYgKGkgPj0gdGhpcy5fY3VycmVudF9wYWdlICogMTAgJiYgaSA8ICh0aGlzLl9jdXJyZW50X3BhZ2UgKyAxKSAqIDEwKSB7XG4gICAgICAgIGNvbnN0IHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcblxuICAgICAgICBjb25zdCB0ZDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICB0ZDEuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFN0cmluZyhpICsgMSkpKTtcbiAgICAgICAgdHIuYXBwZW5kKHRkMSk7XG5cbiAgICAgICAgY29uc3QgdGQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgdGQyLmFwcGVuZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwLm5hbWUpKTtcbiAgICAgICAgdHIuYXBwZW5kKHRkMik7XG5cbiAgICAgICAgY29uc3QgdGQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgdGQzLmFwcGVuZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwLmhlaWdodCkpO1xuICAgICAgICB0ci5hcHBlbmQodGQzKTtcblxuICAgICAgICBjb25zdCB0ZDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICB0ZDQuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHAubWFzcykpO1xuICAgICAgICB0ci5hcHBlbmQodGQ0KTtcblxuICAgICAgICBjb25zdCB0ZDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICB0ZDUuYXBwZW5kKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHAuZ2VuZGVyKSk7XG4gICAgICAgIHRyLmFwcGVuZCh0ZDUpO1xuXG4gICAgICAgIFRibFRib2R5LmFwcGVuZCh0cik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgbmV4dExpc2VuZXIoKTogYm9vbGVhbiB7XG4gICAgaWYgKHRoaXMuX2Jsb2NrRmV0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX25leHQgJiYgKHRoaXMuX2N1cnJlbnRfcGFnZSArIDEpICogMTAgPj0gdGhpcy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHogPSB0aGlzLmZldGNoVVJMKFxuICAgICAgICB0aGlzLl9uZXh0LFxuICAgICAgICAocjogSW50ZXJmYWNlUGVvcGxlcykgPT4ge1xuICAgICAgICAgIHRoaXMuX2N1cnJlbnRfcGFnZSArPSAxO1xuICAgICAgICAgIHRoaXMuX25leHQgPSByLm5leHQgPyByLm5leHQgOiAnJztcbiAgICAgICAgICByLnJlc3VsdHMuZm9yRWFjaCgoZTogSW50ZXJmYWNlUGVvcGxlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwID0gbmV3IFBlb3BsZShlLm5hbWUsIGUuaGVpZ2h0LCBlLm1hc3MsIGUuZ2VuZGVyKTtcbiAgICAgICAgICAgIHRoaXMucHVzaChwKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLnNvcnQoKTtcbiAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29uc29sZS5lcnJvcixcbiAgICAgICk7XG4gICAgICB6LmNhdGNoKGNvbnNvbGUuZXJyb3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jdXJyZW50X3BhZ2UgKz0gMTtcbiAgICAgIHRoaXMuZHJhdygpO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHByZXZMaXNlbmVyKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLl9ibG9ja0ZldGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuX2N1cnJlbnRfcGFnZSAtPSAxO1xuICAgIHRoaXMuZHJhdygpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgc29ydChzb3J0dHlwZTogc3RyaW5nID0gdGhpcy5fc29ydHR5cGUsIHNvcnRuYW1lOiBzdHJpbmcgPSB0aGlzLl9zb3J0bmFtZSwgdmVjdG9yOiBudW1iZXIgPSB0aGlzLl92ZWN0b3IpIHtcbiAgICB0aGlzLl9zb3J0dHlwZSA9IHNvcnR0eXBlO1xuICAgIHRoaXMuX3NvcnRuYW1lID0gc29ydG5hbWU7XG4gICAgdGhpcy5fdmVjdG9yID0gdmVjdG9yO1xuICAgIGlmIChzb3J0dHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGlmICh2ZWN0b3IgPT09IDEpIHtcbiAgICAgICAgdGhpcy5fYXJyLnNvcnQoKGE6IFBlb3BsZSwgYjogUGVvcGxlKSA9PiB7XG4gICAgICAgICAgY29uc3QgeCA9IGEuR2V0VmFsRm9ySW5kZXgoc29ydG5hbWUpO1xuICAgICAgICAgIGNvbnN0IHkgPSBiLkdldFZhbEZvckluZGV4KHNvcnRuYW1lKTtcbiAgICAgICAgICBpZiAoeCA+IHkpIHJldHVybiAxO1xuICAgICAgICAgIGlmICh4ID09PSB5KSByZXR1cm4gMDtcbiAgICAgICAgICBpZiAoeCA8IHkpIHJldHVybiAtMTtcbiAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9hcnIuc29ydCgoYTogUGVvcGxlLCBiOiBQZW9wbGUpID0+IHtcbiAgICAgICAgICBjb25zdCB4ID0gYS5HZXRWYWxGb3JJbmRleChzb3J0bmFtZSk7XG4gICAgICAgICAgY29uc3QgeSA9IGIuR2V0VmFsRm9ySW5kZXgoc29ydG5hbWUpO1xuICAgICAgICAgIGlmICh4IDwgeSkgcmV0dXJuIDE7XG4gICAgICAgICAgaWYgKHggPT09IHkpIHJldHVybiAwO1xuICAgICAgICAgIGlmICh4ID4geSkgcmV0dXJuIC0xO1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNvcnR0eXBlID09PSAnbnVtYmVyJykge1xuICAgICAgaWYgKHZlY3RvciA9PT0gMSkge1xuICAgICAgICB0aGlzLl9hcnIuc29ydCgoYTogUGVvcGxlLCBiOiBQZW9wbGUpID0+IHtcbiAgICAgICAgICBjb25zdCB4ID0gYS5HZXROdW1iZXJGcm9tUGVvcGxlRm9yU29ydG5hbWUoc29ydG5hbWUpO1xuICAgICAgICAgIGNvbnN0IHkgPSBiLkdldE51bWJlckZyb21QZW9wbGVGb3JTb3J0bmFtZShzb3J0bmFtZSk7XG4gICAgICAgICAgaWYgKHggPiB5KSByZXR1cm4gMTtcbiAgICAgICAgICBpZiAoeCA9PT0geSkgcmV0dXJuIDA7XG4gICAgICAgICAgaWYgKHggPCB5KSByZXR1cm4gLTE7XG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fYXJyLnNvcnQoKGE6IFBlb3BsZSwgYjogUGVvcGxlKSA9PiB7XG4gICAgICAgICAgY29uc3QgeCA9IGEuR2V0TnVtYmVyRnJvbVBlb3BsZUZvclNvcnRuYW1lKHNvcnRuYW1lKTtcbiAgICAgICAgICBjb25zdCB5ID0gYi5HZXROdW1iZXJGcm9tUGVvcGxlRm9yU29ydG5hbWUoc29ydG5hbWUpO1xuICAgICAgICAgIGlmICh4IDwgeSkgcmV0dXJuIDE7XG4gICAgICAgICAgaWYgKHggPT09IHkpIHJldHVybiAwO1xuICAgICAgICAgIGlmICh4ID4geSkgcmV0dXJuIC0xO1xuICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHNvcnR0eXBlID09PSAnZGVmYXVsdCcpIHtcbiAgICAgIC8vXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcign0J3QtSDQstC10YDQvdGL0Lkg0L/QsNGA0LDQvNC10YLRgCDRgdC+0YDRgtC40YDQvtCy0LrQuCcpO1xuICAgIH1cbiAgfVxufVxuIl19
