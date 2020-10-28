const cur1 = document.getElementById("currency1");
const cur2 = document.getElementById("currency2");

const inp1 = document.getElementById("input1");
const inp2 = document.getElementById("input2");

const swap = document.getElementById("btn-swap");
const exrate = document.getElementById("ex-rate");

const api_call = () => {

    const val1 = cur1.value;
    const val2 = cur2.value;

    fetch(`https://v6.exchangerate-api.com/v6/4736714d8160241da2b6af4a/latest/${val1}`)
        .then(res => res.json())
        .then(data => {
            const r = data.conversion_rates[val2];
            inp2.value = (inp1.value * r).toFixed(2);
            exrate.innerText = `1 ${val1} = ${r} ${val2}`;
        })

}

cur1.addEventListener('change', api_call);
inp1.addEventListener('input', api_call);
cur2.addEventListener('change', api_call);
inp2.addEventListener('input', api_call);

swap.addEventListener('click', () => {
    const temp = cur1.value;
    cur1.value = cur2.value;
    cur2.value = temp;
    api_call();
})

api_call();