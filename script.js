const btc = document.getElementById("btc");
const eth = document.getElementById("eth");
const doge = document.getElementById("doge");

async function fetchPrices() {
    try {
        const res = await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd"
        );

        if (!res.ok) throw new Error("API error");

        const data = await res.json();

        btc.textContent = `$${data.bitcoin.usd.toLocaleString()}`;
        eth.textContent = `$${data.ethereum.usd.toLocaleString()}`;
        doge.textContent = `$${data.dogecoin.usd.toLocaleString()}`;
    } catch {
        btc.textContent = "—";
        eth.textContent = "—";
        doge.textContent = "—";
    }
}

fetchPrices();
setInterval(fetchPrices, 30000);
