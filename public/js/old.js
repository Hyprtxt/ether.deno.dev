import { ethers } from "../ethers.js";
import { tokenABI } from "../flush_token_abi.js";

const PrimaryAccountAddress = "0xb06477aE6e754d429F25A4c70e50D23D5F1B094c";
const AltAccountAddress = "0xec819f0cc3bE8CbC78abF40884e62101e9599ca5";
const contractAddress = "0x7454e289749E375857AeED228A5f751Ad82Dc439";

const contract_FAU = "0xFab46E002BbF0b4509813474841E0716E6730136";

// "0xf2896BFFeA999E92Bd486b36eA9de135712DD3f3"
const appDiv = document.querySelector("#app");
const connectButton = document.querySelector("#connect_wallet");

if (typeof window.ethereum !== "undefined") {
  console.log("MetaMask is installed!");
  connectButton.addEventListener("click", async () => {
    const stuff = await ethereum.request({ method: "eth_requestAccounts" });
    console.log(stuff, web3);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    // The Contract object
    const theContract = new ethers.Contract(
      contractAddress,
      tokenABI,
      provider
    );
    // const altBalance = await theContract.balanceOf(AltAccountAddress);
    const balance = await theContract.balanceOf(stuff[0]);
    console.log(balance.toNumber());

    appDiv.innerHTML = `You have a MetaMask wallet ${
      stuff[0]
    } <br /> with ${balance.toNumber()} Flush Token (Test)<br />From here you should be able to invite other people to join if you have at least 2 Tokens, Login with at least 1 token, Link to faucet if you have 0 tokens`;
    connectButton.classList.add("d-none");
  });
  appDiv.innerHTML = "You have a wallet, click to connect";
  //   console.log(window.ethereum);
} else {
  //   alert("You should install an etherium wallet like MetaMask");
  appDiv.innerHTML = "You should install an etherium wallet like MetaMask";
}

// const web3 = new Web3("https://cloudflare-eth.com");
// console.log("web3", web3);
