// Title: Tigra Menu GOLD
// URL: http://www.softcomplex.com/products/tigra_menu_gold/
// Version: 2.6
// Date: 03-18-2004 (mm-dd-yyyy)
// Notes: Registration needed to use this script legally.
// Visit official site for details.

var TMenu_path_to_files = "/resources/tigra/menu_files/";

var menus = [],
  TM1E,
  TMF = ["click", "mouseout", "mouseover", "hide"];
function TMm(TMX) {
  for (var i = 0; i < menus.length; i++) {
    if (TMX && menus[i].TM1C && !menus[i].TM0H)
      menus[i].TM1C.TM1v.menus[i].TM1V();
    menus[i].TM1V();
    menus[i].TMG = true;
  }
  this.TMJ = true;
}
function TMn(TMY) {
  var TM0z;
  if (this.width != (TM0z = this.TM02(window))) {
    this.width = TM0z;
    TMX = TMY = true;
  }
  if (this.height != (TM0z = this.TMy(window))) {
    this.height = TM0z;
    TMX = TMY = true;
  }
  if (this.TM1x != (TM0z = this.TM04(window))) {
    this.TM1x = TM0z;
    TMY = true;
  }
  if (this.TM1z != (TM0z = this.TM05(window))) {
    this.TM1z = TM0z;
    TMY = true;
  }
  if (TMY) {
    this.TMJ = false;
    this.TM1V(TMX);
  }
}
function menu(TM0J, TM18, TM14) {
  this.TM0J = TM0J;
  this.TM18 = TM18;
  this.TM19 = [];
  this.TM0K = [];
  this.TM9 = [];
  this.exec = TM0O;
  this.hide = TM0P;
  this.onhide = TM0S;
  this.onclick = TM0R;
  this.onmouseout = TM0T;
  this.onmouseover = TM0U;
  this.TM1V = TM0V;
  this.TMf = TM0_;
  this.TM1R = this.TMW = this.TM13 = 0;
  this.TM1g = function () {};
  if (TM14) {
    this.TM13 = TM14.zIndex || 0;
    this.TM00 =
      TM14.onexpand && typeof TM14.onexpand == "function"
        ? TM14.onexpand
        : null;
    this.TMz =
      TM14.oncollapse && typeof TM14.oncollapse == "function"
        ? TM14.oncollapse
        : null;
    if (TM14.wrapper && typeof TM14.wrapper == "function")
      this.TM03 = TM14.wrapper;
    this.TM0H = Boolean(TM14.frames);
    this.TMW = TM14.popup ? -1 : 0;
    this.TMa = Boolean(TM14.showroot);
    this.TMK = Boolean(TM14.clickcollapse);
    var TM7 = TM14.frames;
    if (this.TMW) {
      this.collapse = TM0Y;
      this.expand = TM0Z;
      if (document.images[TM14.popup]) {
        this.elements = [document.images[TM14.popup]];
        this.TM1U = TM0d;
      } else this.TM1U = function () {};
    }
    if (TM14.forms) {
      this.TM6 = TM14.forms;
      this.TM1g = TM0;
    }
  }
  if (!this.TM03) this.TM03 = TM0g;
  this.TM1A = {
    width: 100,
    height: 20,
    block_top: null,
    block_left: null,
    vertical: false,
    expd_delay: 0,
    hide_delay: 100,
    table: [0, 0, 0],
    css: { table: "", inner: "", outer: "" },
  };
  this.TMi = -1;
  this.TM1O = this;
  this.TM0A = function (TM1c) {
    return this.TM1A[TM1c];
  };
  if (!TM1E) {
    TM1E = new TMl();
    TM1E.TM1L = { x: 0, y: 0 };
    TM1E.TMI = navigator.userAgent.indexOf("Gecko") > -1;
    TM1E.TM1T = TMenu_path_to_files + "pixel.gif";
    if (TM1E.TMR) {
      document.write('<div id="TMAnchor" style="position:absolute">.</div>');
      TM1E.TMo = TM1E.TM09("TMAnchor");
    }
    if (TM1E.TMI) {
      document.write(
        '<div id="TMAnchor" style="position:absolute;width:100%;height:100%;top:0;left:0;visibility:hidden"></div>',
      );
      TM1E.TMp = TM1E.TM09("TMAnchor");
    }
    if (!TM1E.TM1d) TM1E.TM1d = "onload";
    TM1E.TM02 =
      window.innerWidth != null
        ? function (w) {
            return w.innerWidth;
          }
        : function (w) {
            return w.document.body.offsetWidth;
          };
    TM1E.TMy =
      window.innerHeight != null
        ? function (w) {
            return w.innerHeight;
          }
        : function (w) {
            return w.document.body.offsetHeight;
          };
    TM1E.TM04 =
      window.pageXOffset != null
        ? function (w) {
            return w.pageXOffset;
          }
        : function (w) {
            return w.document.body.scrollLeft;
          };
    TM1E.TM05 =
      window.pageYOffset != null
        ? function (w) {
            return w.pageYOffset;
          }
        : function (w) {
            return w.document.body.scrollTop;
          };
    TM1E.TM1V = TMm;
    TM1E.TMs = TMn;
  }
  this.id = TM14 && TM14.key ? TM14.key : menus.length;
  menus[this.id] = this;
  this.TM1l = [];
  this.TMg = this.TM0J.length;
  this.TMZ = Boolean(
    this.TM18[0].block_top == null && this.TM18[0].block_left == null,
  );
  for (var i = 0; i < this.TMg; i++) new TM0Q(i, this, this, i);
  this.TMf(1);
  this.TM0M = this.TM15;
  for (i = 0; i < this.TM9.length; i++) this.TM9[i].links();
  if (top != window && ((TM7 && (TM7 + "").indexOf(",") > -1) || !TM7)) {
    TM1E.TM1H =
      TM1E.TMP || (window.opera && document.appendChild) || TM1E.TMS
        ? top.document.body
        : top;
    if (window.frameElement != null)
      TM1E.TMy = function (w) {
        return w.frameElement.offsetHeight;
      };
    if (!top.TM1) {
      top.TM1 = { TMB: [] };
      var TM0w,
        TM1W = TM1E.TM1H[TM1E.TM1d] ? new String(TM1E.TM1H[TM1E.TM1d]) : "";
      if ((TM0w = TM1W.indexOf("{")) > -1)
        TM1W = TM1W.substring(TM0w + 1, TM1W.lastIndexOf("}") - 1) + ";";
      TM1E.TM1H[TM1E.TM1d] = Function(TM1W + "top.TM1.TM01()");
    }
    if (!top.TM1.TMB[this.id])
      top.TM1.TMB[this.id] = { TM0n: 0, TM7: [], TM5: [], TM8: [] };
    if (this.TM0H && !top.TM1.TM01) {
      top.TM1.TM01 = function () {
        for (var TM0q = 0; TM0q < this.TMB.length; TM0q++) {
          if (this.TMB[TM0q].TM0n < 2) {
            this.TMB[TM0q].TM8[0].TM1C = null;
            return this.TMB[TM0q].TM7[0].setInterval("TM1E.TMs()", 500);
          }
          for (var TM0t = 0; TM0t < this.TMB[TM0q].TM7.length; TM0t++)
            if (this.TMB[TM0q].TM7[TM0t] && this.TMB[TM0q].TM7[TM0t].TM1E)
              this.TMB[TM0q].TM7[TM0t].TM1E.TMs();
        }
        setTimeout("top.TM1.TM01()", 200);
      };
      top.TM1.TMx = function (TM0v, TM0r, TM0h) {
        var TM8 = this.TMB[TM0v].TM8;
        for (var TM0q = 0; TM0q < TM8.length; TM0q++)
          if (TM8[TM0q] && !TM8[TM0q].TM0K[TM0r])
            return setTimeout(
              'top.TM1.TMx("' + TM0v + '","' + TM0r + '",' + TM0h + ")",
              100,
            );
        for (TM0q = 0; TM0q < TM8.length; TM0q++)
          if (TM8[TM0q]) TM8[TM0q]["on" + TMF[TM0h]](TM0r);
      };
    }
    var TM17 = (this.TM1C = top.TM1.TMB[this.id]);
    if (TM17.TM5[name] == null) {
      TM17.TM5[name] = TM17.TM0n;
      TM17.TM0n++;
    }
    TM17.TM7[TM17.TM5[name]] = window;
    TM17.TM8[TM17.TM5[name]] = this;
    if (this.TM0H) {
      TM17.TM1v = window;
      this.TM7 = [];
      for (i = 0; i < TM7.length; i++) {
        this.TM7[i] = [];
        for (var j = 0; j < TM7[i].length; j++)
          this.TM7[i][j] = eval("top." + TM7[i][j]);
      }
    }
    window.onunload = function () {
      for (var TM0q = 0; TM0q < menus.length; TM0q++) {
        if (menus[TM0q].TM1C) {
          menus[TM0q].TM1C.TM7[menus[TM0q].TM1C.TM5[name]] = menus[
            TM0q
          ].TM1C.TM8[menus[TM0q].TM1C.TM5[name]] = null;
        }
      }
    };
    this.TMK = 1;
  } else if (document.layers)
    window.onload = function () {
      setInterval("TM1E.TMs()", 200);
    };
  else if (!TM1E.TM1n) TM1E.TM1n = setInterval("TM1E.TMs()", 200);
}
function TM0V() {
  if (this.TM1C) {
    this.TM7 = this.TM1C.TM1v.menus[this.id].TM7;
    if (this.TM0H) {
      var TM1y = 0,
        TM1w;
      this.TM1C.TM0N = [];
      for (i = 0; i < this.TM7.length; i++) {
        TM1w = 0;
        for (j = 0; j < this.TM7[i].length; j++) {
          if (!this.TM1C.TM0N[this.TM7[i][j].name])
            this.TM1C.TM0N[this.TM7[i][j].name] = { x: TM1w, y: TM1y };
          TM1w += TM1E.TM02(this.TM7[i][j]);
        }
        TM1y += TM1E.TMy(this.TM7[i][--j]);
      }
      this.TM1C.TM0M = TM1E.TMu(
        this.TM0M,
        this.TM1C.TM0N[window.name].x - TM1E.TM04(window),
        this.TM1C.TM0N[window.name].y - TM1E.TM05(window),
        TM1E.TMS,
      );
    } else {
      TM1E.TMw(this.TM0M, {
        x: this.TM1C.TM0M.x - this.TM1C.TM0N[window.name].x + TM1E.TM04(window),
        y: this.TM1C.TM0M.y - this.TM1C.TM0N[window.name].y + TM1E.TM05(window),
      });
      if (this.TMa) TM1E.TMv(this.TM0M, 1);
    }
  }
  if (document.layers)
    for (var TM0q = 0; TM0q < this.TMg; TM0q++) this.TM9[TM0q].TM1h(0);
  else if (TMV && !TM1E.TMR)
    for (var TM0q = 0; TM0q < this.TMg; TM0q++) this.TM9[TM0q].TM1U();
}
function TM0O(id, TM0h) {
  if (!TM1E.TMJ) return;
  if (this.TM1C && TM0h) top.TM1.TMx(this.id, id, TM0h);
  else return menus[this.id]["on" + TMF[TM0h]](id);
}
function TM0P() {
  if (this.TM1R > 0 || !this.TM1p) return;
  if (this.TM0L) this.TM0L.collapse(this.TMW);
  this.TM0L = null;
  if (this.TMz) this.TMz();
  if (TM1E.TMp) TM1E.TMv(TM1E.TMp);
  if (!TM1E.TM0G && !TM1E.TMI) this.TM1g(true);
}
function TM0S() {
  if (this.TM0L) this.TM0L.collapse(this.TMW);
  this.TM0L = null;
  this.TM1R = 0;
}
function TM0R(id) {
  var i = this.TM0K[id],
    TMN = Boolean(i.TM4[1]);
  if (i.TM9 && i.TM1M.TM9[0].TM0m < 0) i.expand();
  else if ((i.TMK == null && this.TMK) || i.TMK) this.exec(id, 1);
  i.TM1h(2);
  return TMN;
}
function TM0T(id) {
  this.TM1R--;
  this.TM0K[id].TM1h(0);
  if (this.TM1o) clearTimeout(this.TM1o);
  this.TM1p = setTimeout(
    'menus["' + this.id + '"].hide()',
    this.TM0K[id].TM0A("hide_delay"),
  );
  if (this.TM0K[id].TM19.sb != null) top.status = "";
  if (this.TM0K[id].TM19.oo != null) this.TM0K[id].TM19.oo(id);
}
function TM0U(id) {
  if (window.event) event.cancelBubble = true;
  if ((TM1E.TMI || window.opera) && this.TM0K[id].TM1j == 1) return;
  this.TM1R++;
  for (var TM1J = this.TM0K[id]; TM1J != this; TM1J = TM1J.TM1M) TM1J.TM1h(1);
  var TM1J = this.TM0K[id];
  clearTimeout(this.TM1p);
  this.TM1p = null;
  if (TM1J.TM19.sb != null)
    setTimeout('menus["' + this.id + '"].TM0K["' + id + '"].TM1i()', 10);
  this.TM1I = TM1J;
  if (TM1J.TM19.oh != null) TM1J.TM19.oh(id);
  if (TM1J.TM1M.TM9[0].TM0m < 0) return;
  if (TM1J.TM1M.TM9[0].TM0m)
    this.TM1o = setTimeout(
      'menus["' + this.id + '"].TM0K["' + id + '"].expand()',
      TM1J.TM1M.TM9[0].TM0m,
    );
  else TM1J.expand();
}
function TM0Q(TM1S, TM1M, TM1O, TM0s) {
  this.id = this.TM1S = new String(TM1S);
  this.TM1M = TM1M;
  this.TM1O = TM1O;
  this.TMH = this.TM1S.split("_");
  this.TMi = this.TMH.length - 1;
  var TM1k = "";
  for (var i = 0; i <= this.TMi; i++)
    TM1k += "[" + (Number(this.TMH[i]) + (i ? 3 : 0)) + "]";
  eval("this.TM4 = this.TM1O.TM0J" + TM1k);
  if (!this.TM4) return;
  this.TM19 = this.TM4[2] ? this.TM4[2] : [];
  this.TM1O.TM0K[this.id] = this;
  TM1M.TM9[TM1M.TM9.length] = this;
  this.TM1h = TM0e;
  this.TM1i = TM0f;
  this.TM1U = TM0d;
  this.TM03 = this.TM1O.TM03;
  this.TMf = TM0X;
  this.TM0A = TM0a;
  this.TM08 = TM0b;
  this.links = TM0c;
  this.collapse = TM0Y;
  this.expand = TM0Z;
  this.TMK = this.TM19.cc;
  if (!TM0s) {
    this.TM0k = this.TM1M.TM19.bt || this.TM0A("block_top");
    this.TM0j = this.TM1M.TM19.bl || this.TM0A("block_left");
    this.TMM = this.TM0A("top") < 0;
    this.TML = this.TM0A("left") < 0;
    this.TM11 = this.TM0A("width");
    this.TM0p = this.TM0A("height");
    this.TMd = this.TM0A("vertical");
    this.TM12 = this.TM0A("wise_pos");
    this.TM0m = this.TM0A("expd_delay");
  }
  var TM10 = this.TM1M.TM9[0].TM11,
    TM0o = this.TM1M.TM9[0].TM0p;
  if (this.TM1M.TM9[0].TMd) {
    if (this.TM1M.TM19.bw != null) TM10 = this.TM1M.TM19.bw;
    if (this.TM19.sh != null) TM0o = this.TM19.sh;
  } else {
    if (this.TM1M.TM19.bh != null) TM0o = this.TM1M.TM19.bh;
    if (this.TM19.sw != null) TM10 = this.TM19.sw;
  }
  this.TM1M.TM1l[TM0s] = this.TMf(TM10, TM0o);
  this.TMg = this.TM4.length - 3;
  if (this.TMg > 0 && this.TM4[3]) {
    this.TM9 = [];
    this.TMq = TM0_;
    this.TMr = TM0W;
    if (TMV && !document.layers) {
      this.TMr();
      this.TMb = this.TMi == 0 && this.TM1O.TMZ;
    }
  }
}
function TM0g(TM1Y) {
  return TM1Y;
}
function TM0W() {
  this.TM1l = [];
  for (var i = 0; i < this.TMg; i++)
    if (this.TM4[3 + i]) new TM0Q(this.TM1S + "_" + i, this, this.TM1O, i);
    else this.TMg--;
  this.TMq();
  for (i = 0; i < this.TM9.length; i++) this.TM9[i].links();
}
function TM0f() {
  top.status = this.TM19.sb;
}
function TM0a(TM1c) {
  var TM1f = null,
    TMA = this.TM1O.TM18[this.TMi];
  if (TMA) TM1f = TMA[TM1c];
  return TM1f == null ? this.TM1M.TM0A(TM1c) : TM1f;
}
function TM0b(TM1e, TM0x) {
  var TM3 = this.TM0A("css"),
    TMC = TM3[TM1e];
  if (typeof TMC == "string") return TMC;
  for (var TM0l = TM0x; TM0l >= 0; TM0l--) if (TMC[TM0l]) return TMC[TM0l];
}
function TM0d(TMh, value) {
  if (this.TMg > 0) {
    if (TM1E.TMR) {
      TM1E.TMw(TM1E.TMo, { x: 0, y: 0 });
      TM1E.TM1L = TM1E.TMu(TM1E.TMo, 0, 0);
      TM1E.TMR = 0;
    }
    var TM1K = this.TM9[0],
      TM1N = TM1E.TMu(
        this.elements[0],
        (this.TM19.bl ? this.TM19.bl : TM1K.TM0j) - TM1E.TM1L.x,
        (this.TM19.bt ? this.TM19.bt : TM1K.TM0k) - TM1E.TM1L.y,
        this.TMb,
      );
    if (TM1K.TML) TM1N.x -= TM1E.TMt(this.TM15);
    if (TM1K.TMM) TM1N.y -= TM1E.TMt(this.TM15, 1);
    if (TM1K.TM12 && !this.TM1O.TM1C) {
      var wise = TM1K.TM12,
        TM1s = TM1E.TMt(this.TM15, 0),
        TM0B = TM1E.TMt(this.TM15, 1),
        TM1u = TM1E.TM02(window),
        TM0D = TM1E.TMy(window),
        TM1t = TM1E.TM04(window),
        TM0C = TM1E.TM05(window);
      if (TM1N.x + TM1s > TM1u + TM1t)
        TM1N.x = (wise == 1 ? TM1u + TM1t : TM1N.x) - TM1s;
      if (TM1N.y + TM0B > TM0D + TM0C)
        TM1N.y = (wise == 1 ? TM0D + TM0C : TM1N.y) - TM0B;
      if (TM1N.x < TM1t) TM1N.x = TM1t;
      if (TM1N.y < TM0C) TM1N.y = TM0C;
    }
    TM1E.TMw(this.TM15, TM1N);
    if (this.TM16) TM1E.TMw(this.TM16, TM1N);
    if (TMV && !document.layers)
      for (var TM0q = 0; TM0q < this.TMg; TM0q++) this.TM9[TM0q].TM1U();
  }
}
var TME = navigator.appVersion.split("MSIE "),
  TMV =
    window.opera ||
    TME.length < 2 ||
    parseFloat(TME[1]) < 5 ||
    (navigator.appVersion.indexOf("Mac") > -1 &&
      navigator.appVersion.indexOf("MSIE") > -1) ||
    navigator.userAgent.indexOf("Konqueror") > -1;
document.write(
  "<scr",
  'ipt language="JavaScript" src="',
  TMenu_path_to_files,
  "menu.",
  document.layers ? "lay" : TMV ? "opr" : "dom",
  '.js"></scr',
  "ipt>",
);
