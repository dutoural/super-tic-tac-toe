(this.webpackJsonptuto = this.webpackJsonptuto || []).push([
  [0],
  {
    42: function (l, e, a) {},
    43: function (l, e, a) {},
    77: function (l, e, a) {
      "use strict";
      a.r(e);
      var n = a(1),
        t = a.n(n),
        u = a(36),
        s = a.n(u),
        i = (a(42), a(7)),
        r = a(8),
        p = a(11),
        b = a(10),
        o = a(9),
        c = (a(43), a(37)),
        y = a(0),
        h = a(45)("http://alexdutour.ddns.net:8000"),
        j = "O",
        d = { morpion: null, pos: null, lastSymbol: null },
        m = null,
        O = null,
        v = !0,
        f = !1,
        k = (function (l) {
          Object(b.a)(a, l);
          var e = Object(o.a)(a);
          function a(l) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = e.call(this, l)).switchMode = n.switchMode.bind(
                Object(p.a)(n)
              )),
              (n.state = { mode1j: !0, mode2j: !1 }),
              n
            );
          }
          return (
            Object(r.a)(a, [
              {
                key: "switchMode",
                value: function (l, e, a) {
                  (null === d.morpion || a) &&
                    (1 === l
                      ? ((v = !0), (f = !1), e && h.emit("mode", 1))
                      : ((f = !0), (v = !1), e && h.emit("mode", 2)),
                    this.setState({ mode1j: v, mode2j: f }));
                },
              },
              {
                key: "componentDidMount",
                value: function () {
                  var l = this;
                  h.on("mode", function (e) {
                    l.switchMode(e, !1, !1);
                  }),
                    h.on("save", function (e) {
                      l.switchMode(e.modeG, !1, !0);
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  var l = this;
                  return Object(y.jsxs)("div", {
                    className: "menu",
                    children: [
                      Object(y.jsx)(C, {
                        onClick: this.props.onReset,
                        text: "Reset",
                      }),
                      Object(y.jsx)(x, {}),
                      Object(y.jsx)(C, {
                        onClick: function () {
                          return l.switchMode(1, !0, !1);
                        },
                        checked: this.state.mode1j,
                        text: "1 joueur ",
                      }),
                      Object(y.jsx)(C, {
                        onClick: function () {
                          return l.switchMode(2, !0, !1);
                        },
                        checked: this.state.mode2j,
                        text: "2 joueurs ",
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(t.a.Component),
        x = (function (l) {
          Object(b.a)(a, l);
          var e = Object(o.a)(a);
          function a() {
            return Object(i.a)(this, a), e.apply(this, arguments);
          }
          return (
            Object(r.a)(a, [
              {
                key: "render",
                value: function () {
                  return Object(y.jsxs)("div", {
                    children: [
                      Object(y.jsx)("br", {}),
                      Object(y.jsx)("br", {}),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(t.a.Component),
        C = (function (l) {
          Object(b.a)(a, l);
          var e = Object(o.a)(a);
          function a() {
            return Object(i.a)(this, a), e.apply(this, arguments);
          }
          return (
            Object(r.a)(a, [
              {
                key: "render",
                value: function () {
                  return this.props.checked
                    ? Object(y.jsx)("div", {
                        children: Object(y.jsxs)("div", {
                          onClick: this.props.onClick,
                          className: "myButton unselectable",
                          children: [
                            this.props.text,
                            Object(y.jsx)("i", {
                              className: "fas fa-check-circle",
                            }),
                          ],
                        }),
                      })
                    : Object(y.jsx)("div", {
                        onClick: this.props.onClick,
                        className: "myButton unselectable",
                        children: this.props.text,
                      });
                },
              },
            ]),
            a
          );
        })(t.a.Component),
        g = (function (l) {
          Object(b.a)(a, l);
          var e = Object(o.a)(a);
          function a(l) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = e.call(this, l)).state = { message: n.props.message }),
              n
            );
          }
          return (
            Object(r.a)(a, [
              {
                key: "render",
                value: function () {
                  return Object(y.jsx)("p", {
                    className: "textInfo unselectable",
                    children: this.props.message,
                  });
                },
              },
            ]),
            a
          );
        })(t.a.Component),
        M = (function (l) {
          Object(b.a)(a, l);
          var e = Object(o.a)(a);
          function a(l) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = e.call(this, l)).state = {
                message: "Au joueur X de jouer",
                board: [
                  [null, null, null, null, null, null, null, null, null],
                  [null, null, null, null, null, null, null, null, null],
                  [null, null, null, null, null, null, null, null, null],
                  [null, null, null, null, null, null, null, null, null],
                  [null, null, null, null, null, null, null, null, null],
                  [null, null, null, null, null, null, null, null, null],
                  [null, null, null, null, null, null, null, null, null],
                  [null, null, null, null, null, null, null, null, null],
                  [null, null, null, null, null, null, null, null, null],
                ],
                playable: [
                  [
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                  ],
                  [
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                  ],
                  [
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                  ],
                  [
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                  ],
                  [
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                  ],
                  [
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                  ],
                  [
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                  ],
                  [
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                  ],
                  [
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                    "playable",
                  ],
                ],
                morpionWin: [
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                  null,
                ],
              }),
              (n.renderMorpion = n.renderMorpion.bind(Object(p.a)(n))),
              (n.handleClick = n.handleClick.bind(Object(p.a)(n))),
              n
            );
          }
          return (
            Object(r.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  var l = this;
                  h.on("click", function (e) {
                    l.handleClick(e.morpion, e.pos, !0, !1);
                  }),
                    h.on("saveSymbole", function () {
                      null !== O &&
                        ("X" === O
                          ? h.emit("joueur", "O")
                          : h.emit("joueur", "X"));
                    }),
                    h.on("joueur", function (l) {
                      null === O && (O = l);
                    }),
                    h.on("save", function (e) {
                      (j = "X" === (j = e.lastPlaySave.lastSymbol) ? "O" : "X"),
                        l.setState(e.save),
                        null !== e.lastPlaySave.morpion &&
                          l.handleClick(
                            e.lastPlaySave.morpion,
                            e.lastPlaySave.pos,
                            !1,
                            !0
                          );
                    }),
                    h.on("reset", function () {
                      l.reset();
                    });
                },
              },
              {
                key: "renderCase",
                value: function (l, e) {
                  var a = this;
                  return l === d.morpion && e === d.pos
                    ? Object(y.jsx)(S, {
                        class: this.state.playable[l][e] + " lastPlayed",
                        value: this.state.board[l][e],
                        onClick: function () {
                          a.handleClick(l, e, !1, !1);
                        },
                      })
                    : Object(y.jsx)(S, {
                        class: this.state.playable[l][e],
                        value: this.state.board[l][e],
                        onClick: function () {
                          a.handleClick(l, e, !1, !1);
                        },
                      });
                },
              },
              {
                key: "renderMorpion",
                value: function (l) {
                  return null != this.state.morpionWin[l]
                    ? l === d.morpion
                      ? Object(y.jsx)("div", {
                          className: "morpionGagne lastPlayed",
                          children: this.state.morpionWin[l],
                        })
                      : Object(y.jsx)("div", {
                          className: "morpionGagne",
                          children: this.state.morpionWin[l],
                        })
                    : Object(y.jsxs)("div", {
                        className: "Morpion",
                        children: [
                          this.renderCase(l, 0),
                          this.renderCase(l, 1),
                          this.renderCase(l, 2),
                          this.renderCase(l, 3),
                          this.renderCase(l, 4),
                          this.renderCase(l, 5),
                          this.renderCase(l, 6),
                          this.renderCase(l, 7),
                          this.renderCase(l, 8),
                        ],
                      });
                },
              },
              {
                key: "changeText",
                value: function (l) {
                  this.setState({ message: l });
                },
              },
              {
                key: "handleClick",
                value: function (l, e, a, n) {
                  if (
                    (console.log(O, f),
                    null === O &&
                      f &&
                      (h.emit("joueur", j), (O = "O" === j ? "X" : "O")),
                    (this.checkPlayable(l, e) && (O !== j || a || v)) || n)
                  ) {
                    if ("O" === j) {
                      j = "X";
                      var t = this.state.board;
                      (t[l][e] = "X"),
                        this.setState({ board: t }),
                        this.changeText("Au joueur O de jouer");
                    } else {
                      j = "O";
                      var u = this.state.board;
                      (u[l][e] = "O"),
                        this.setState({ board: u }),
                        this.changeText("Au joueur X de jouer");
                    }
                    (d = { morpion: l, pos: e, lastSymbol: j }),
                      a || (h.emit("click", d), h.emit("save", this.state)),
                      this.updatePlayable();
                    var s = this.state.morpionWin;
                    (s[l] = this.checkWin(this.state.board[l])),
                      this.setState({ morpionWin: s }),
                      null !== (m = this.checkWin(this.state.morpionWin)) &&
                        this.changeText(
                          "Le joueur ".concat(j, " a gagn\xe9 !!!")
                        );
                  }
                },
              },
              {
                key: "checkWin",
                value: function (l) {
                  for (
                    var e = [
                        [0, 1, 2],
                        [3, 4, 5],
                        [6, 7, 8],
                        [0, 3, 6],
                        [1, 4, 7],
                        [2, 5, 8],
                        [0, 4, 8],
                        [2, 4, 6],
                      ],
                      a = 0;
                    a < e.length;
                    a++
                  ) {
                    var n = Object(c.a)(e[a], 3),
                      t = n[0],
                      u = n[1],
                      s = n[2];
                    if (l[t] && l[t] === l[u] && l[t] === l[s]) return l[t];
                  }
                  return null;
                },
              },
              {
                key: "updatePlayable",
                value: function () {
                  for (var l = 0; l < this.state.board.length; l++)
                    for (var e = 0; e < this.state.board[l].length; e++)
                      if (this.checkPlayable(l, e)) {
                        var a = this.state.playable;
                        (a[l][e] = "playable"), this.setState({ playable: a });
                      } else {
                        var n = this.state.playable;
                        (n[l][e] = ""), this.setState({ playable: n });
                      }
                },
              },
              {
                key: "reset",
                value: function () {
                  (m = null),
                    (j = "O"),
                    (d = { morpion: null, pos: null }),
                    (O = null),
                    this.setState({
                      message: "Au joueur X de jouer",
                      board: [
                        [null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null],
                        [null, null, null, null, null, null, null, null, null],
                      ],
                      morpionWin: [
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                        null,
                      ],
                      playable: [
                        [
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                        ],
                        [
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                        ],
                        [
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                        ],
                        [
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                        ],
                        [
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                        ],
                        [
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                        ],
                        [
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                        ],
                        [
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                        ],
                        [
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                          "playable",
                        ],
                      ],
                    });
                },
              },
              {
                key: "checkPlayable",
                value: function (l, e) {
                  return (
                    null === m &&
                    (null === d.morpion ||
                      (null !== this.state.morpionWin[d.pos] &&
                        null === this.state.board[l][e]) ||
                      (d.pos === l && null === this.state.board[l][e]))
                  );
                },
              },
              {
                key: "componentDidUpdate",
                value: function () {
                  this.props.reset &&
                    (this.props.resetDone(), this.reset(), h.emit("reset"));
                },
              },
              {
                key: "render",
                value: function () {
                  var l = this;
                  return Object(y.jsxs)("div", {
                    className: "container",
                    children: [
                      Object(y.jsx)(g, { message: this.state.message }),
                      Object(y.jsxs)("div", {
                        className: "Board",
                        children: [
                          this.renderMorpion(0),
                          this.renderMorpion(1),
                          this.renderMorpion(2),
                          this.renderMorpion(3),
                          this.renderMorpion(4),
                          this.renderMorpion(5),
                          this.renderMorpion(6),
                          this.renderMorpion(7),
                          this.renderMorpion(8),
                          null != m
                            ? Object(y.jsx)(N, {
                                click: function () {
                                  l.reset();
                                },
                                winner: m,
                              })
                            : null,
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(t.a.Component),
        S = (function (l) {
          Object(b.a)(a, l);
          var e = Object(o.a)(a);
          function a() {
            return Object(i.a)(this, a), e.apply(this, arguments);
          }
          return (
            Object(r.a)(a, [
              {
                key: "render",
                value: function () {
                  return Object(y.jsx)("div", {
                    className: "case " + this.props.class,
                    onClick: this.props.onClick,
                    children: this.props.value,
                  });
                },
              },
            ]),
            a
          );
        })(t.a.Component),
        N = (function (l) {
          Object(b.a)(a, l);
          var e = Object(o.a)(a);
          function a() {
            return Object(i.a)(this, a), e.apply(this, arguments);
          }
          return (
            Object(r.a)(a, [
              {
                key: "render",
                value: function () {
                  return Object(y.jsxs)("div", {
                    className: "Win",
                    children: [
                      "Le joueur ",
                      this.props.winner,
                      " a gagn\xe9 !",
                      Object(y.jsx)("img", {
                        src: "https://cdn.pixabay.com/photo/2017/01/28/11/43/cup-2015198_960_720.png",
                        alt: "Troph\xe9e",
                      }),
                      Object(y.jsxs)("button", {
                        onClick: this.props.click,
                        children: [
                          "Rejouer",
                          Object(y.jsx)("i", {
                            className: "fa fa-refresh fa-spin fa-1x fa-fw",
                          }),
                        ],
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(t.a.Component),
        P = (function (l) {
          Object(b.a)(a, l);
          var e = Object(o.a)(a);
          function a(l) {
            var n;
            return (
              Object(i.a)(this, a),
              ((n = e.call(this, l)).state = { reset: !1 }),
              (n.reset = n.reset.bind(Object(p.a)(n))),
              n
            );
          }
          return (
            Object(r.a)(a, [
              {
                key: "reset",
                value: function () {
                  this.setState({ reset: !0 });
                },
              },
              {
                key: "resetDone",
                value: function () {
                  this.setState({ reset: !1 });
                },
              },
              {
                key: "render",
                value: function () {
                  var l = this;
                  return Object(y.jsxs)("div", {
                    className: "App",
                    children: [
                      Object(y.jsx)(M, {
                        reset: this.state.reset,
                        resetDone: function () {
                          return l.resetDone();
                        },
                      }),
                      Object(y.jsx)(k, {
                        onReset: function () {
                          return l.reset();
                        },
                      }),
                    ],
                  });
                },
              },
            ]),
            a
          );
        })(t.a.Component),
        W = function (l) {
          l &&
            l instanceof Function &&
            a
              .e(3)
              .then(a.bind(null, 78))
              .then(function (e) {
                var a = e.getCLS,
                  n = e.getFID,
                  t = e.getFCP,
                  u = e.getLCP,
                  s = e.getTTFB;
                a(l), n(l), t(l), u(l), s(l);
              });
        };
      s.a.render(
        Object(y.jsx)(t.a.StrictMode, { children: Object(y.jsx)(P, {}) }),
        document.getElementById("root")
      ),
        W();
    },
  },
  [[77, 1, 2]],
]);
//# sourceMappingURL=main.0561b073.chunk.js.map
