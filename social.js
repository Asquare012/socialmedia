togg = () => {
    // body
    let body = document.body;
    body.classList.toggle("body");
    // header
    let head = document.querySelector("header");
    head.classList.toggle("head");
    // ball
    let ball = document.querySelector("#ball");
    ball.classList.toggle("ball");

    // top box
    let a = document.querySelector("#two").querySelector("#first");
    a.classList.toggle("box");

    let b = document.querySelector("#two").querySelector("#second");
    b.classList.toggle("box");

    let c = document.querySelector("#two").querySelector("#third");
    c.classList.toggle("box");

    let d = document.querySelector("#two").querySelector("#fourth");
    d.classList.toggle("box");

    //overview
    let overview = document.querySelector("#three");
    overview.classList.toggle("over");

    // last box
    let e = document.querySelector("#last").querySelector("#first");
    e.classList.toggle("box");

    let f = document.querySelector("#last").querySelector("#second");
    f.classList.toggle("box");

    let g = document.querySelector("#last").querySelector("#third");
    g.classList.toggle("box");

    let h = document.querySelector("#last").querySelector("#fourth");
    h.classList.toggle("box");

    let i = document.querySelector("#last").querySelector("#fifth");
    i.classList.toggle("box");

    let j = document.querySelector("#last").querySelector("#sixth");
    j.classList.toggle("box");

    let k = document.querySelector("#last").querySelector("#seventh");
    k.classList.toggle("box");

    let l = document.querySelector("#last").querySelector("#eight");
    l.classList.toggle("box");
};