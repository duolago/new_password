(global.webpackJsonp = global.webpackJsonp || []).push([ [ "uview-ui/components/u-form/u-form" ], {
    "0b3b": function(e, t, n) {
        n.r(t);
        var o = n("59c1"), u = n.n(o);
        for (var r in o) "default" !== r && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(r);
        t.default = u.a;
    },
    "59c1": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = {
            name: "u-form",
            props: {
                model: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                errorType: {
                    type: Array,
                    default: function() {
                        return [ "message", "toast" ];
                    }
                },
                borderBottom: {
                    type: Boolean,
                    default: !0
                },
                labelPosition: {
                    type: String,
                    default: "left"
                },
                labelWidth: {
                    type: [ String, Number ],
                    default: 90
                },
                labelAlign: {
                    type: String,
                    default: "left"
                },
                labelStyle: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                }
            },
            provide: function() {
                return {
                    uForm: this
                };
            },
            data: function() {
                return {
                    rules: {}
                };
            },
            created: function() {
                this.fields = [];
            },
            methods: {
                setRules: function(e) {
                    this.rules = e;
                },
                resetFields: function() {
                    this.fields.map(function(e) {
                        e.resetField();
                    });
                },
                validate: function(e) {
                    var t = this;
                    return new Promise(function(n) {
                        var o = !0, u = 0, r = [];
                        t.fields.map(function(i) {
                            i.validation("", function(i) {
                                i && (o = !1, r.push(i)), ++u === t.fields.length && (n(o), -1 === t.errorType.indexOf("none") && t.errorType.indexOf("toast") >= 0 && r.length && t.$u.toast(r[0]), 
                                "function" == typeof e && e(o));
                            });
                        });
                    });
                }
            }
        };
        t.default = o;
    },
    aec6: function(e, t, n) {},
    c2ee: function(e, t, n) {
        n.r(t);
        var o = n("c8f8"), u = n("0b3b");
        for (var r in u) "default" !== r && function(e) {
            n.d(t, e, function() {
                return u[e];
            });
        }(r);
        n("d024");
        var i = n("f0c5"), f = Object(i.a)(u.default, o.b, o.c, !1, null, "1cc99a02", null, !1, o.a, void 0);
        t.default = f.exports;
    },
    c8f8: function(e, t, n) {
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return u;
        }), n.d(t, "a", function() {});
        var o = function() {
            this.$createElement;
            this._self._c;
        }, u = [];
    },
    d024: function(e, t, n) {
        var o = n("aec6");
        n.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "uview-ui/components/u-form/u-form-create-component", {
    "uview-ui/components/u-form/u-form-create-component": function(e, t, n) {
        n("543d").createComponent(n("c2ee"));
    }
}, [ [ "uview-ui/components/u-form/u-form-create-component" ] ] ]);