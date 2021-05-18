if (typeof window.ethereum !== "undefined") {
  console.log("MetaMask is installed!");
}

// const web3 = new Web3("https://cloudflare-eth.com");
// console.log("web3", web3);

const stuff = await ethereum.request({ method: "eth_requestAccounts" });
console.log(stuff);
