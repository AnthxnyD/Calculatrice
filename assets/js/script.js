const containerbody = `
<div class="container">

        <div class="row mt-3">
            <div class="col-3">
                <button data-key="8" type="button" class="btn btn-danger btn-block" id="canc">C</button>
            </div>
            
            <div class="col-9">
                <input type="text" class="form-control" readonly id="txtDisplay">
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-3 btn-7">
                <button data-key="103" type="button" class="btn btn-primary btn-block num">7</button>
            </div>
            <div class="col-3 btn-8">
                <button data-key="104" type="button" class="btn btn-primary btn-block num">8</button>
            </div>
            <div class="col-3 btn-9">
                <button data-key="105" type="button" class="btn btn-primary btn-block num">9</button>
            </div>
            <div class="col-3 btn-div">
                <button data-key="111" type="button" class="btn btn-secondary btn-block operazione">/</button>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-3">
                <button data-key="100" type="button" class="btn btn-primary btn-block num">4</button>
            </div>
            <div class="col-3">
                <button data-key="101" type="button" class="btn btn-primary btn-block num">5</button>
            </div>
            <div class="col-3">
                <button data-key="102" type="button" class="btn btn-primary btn-block num">6</button>
            </div>
            <div class="col-3">
                <button data-key="106" type="button" class="btn btn-secondary btn-block operazione" id="op">*</button>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-3">
                <button data-key="97" type="button" class="btn btn-primary btn-block num">1</button>
            </div>
            <div class="col-3">
                <button data-key="98"type="button" class="btn btn-primary btn-block num">2</button>
            </div>
            <div class="col-3">
                <button data-key="99" type="button" class="btn btn-primary btn-block num">3</button>
            </div>
            <div class="col-3">
                <button data-key="109" type="button" class="btn btn-secondary btn-block operazione">-</button>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-3 offset-3">
                <button data-key="96" type="button" class="btn btn-primary btn-block num">0</button>
            </div>
            <div class="col-3">
                <button data-key="13" type="button" class="btn btn-success btn-block" id="equal">=</button>
            </div>
            <div class="col-3">
                <button data-key="107" type="button" class="btn btn-secondary btn-block operazione">+</button>
            </div>
            <div class="col-3">
                <button data-key="110" type="button" class="btn btn-secondary btn-block" id="point">.</button>
            </div>
        </div>

    </div>`;
document.querySelector("body").insertAdjacentHTML("afterbegin", containerbody);


const touches = [...document.querySelectorAll(".btn")];
const listKeycode = touches.map((touche) => touche.dataset.key);
const Result = document.getElementById('txtDisplay');
let isfloat = false;

document.addEventListener("keydown", (e) => {
    const value = e.keyCode.toString();
    calculate(value);
    e.target.blur()
});

document.addEventListener("click", (e) => {
    const value = e.target.dataset.key;
    calculate(value);
    e.target.blur()
});

const calculate = (value) => {
    if (listKeycode.includes(value)) {
        switch (value) {
            case "8": // Touche Effacer
                Result.value = "";
                break;
            case "13": // Touche Enter
                const computeResult = (str) => {
                    return Function("return " + str)();
                };
                Result.value = computeResult(Result.value);
                break;

            case "107":// Touche Addition
            case "109":// Touche Soustraction
            case "106":// Touche Multiplication
            case "111":// Touche Division
                isfloat = false;
            case "110": // Touche Ajout d'un point (.)
                if (isfloat === true) {
                    break;
                } else {

                    const indexKeycode = listKeycode.indexOf(value);
                    const touche = touches[indexKeycode];
                    Result.value += touche.innerHTML;
                    isfloat = false;
                }
                break;

            default:
                const indexKeycode = listKeycode.indexOf(value);
                const touche = touches[indexKeycode];
                Result.value += touche.innerHTML;
                console.log(touche);
        }
    }
};

window.addEventListener("error", (e) => {
    alert("Something wrong : " + e.message);
});

//Darkmode

const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");

});