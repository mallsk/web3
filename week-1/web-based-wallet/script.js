let mnemonic="";
let wallets=[];
document.getElementById('generate').addEventListener('click',() => {
    mnemonic = ethers.utils.entropyToMnemonic(ethers.utils.randomBytes(16));
    document.getElementById('word-phrase').textContent = mnemonic;
});
document.getElementById('add-wallet').addEventListener('click', () => {
    if (!mnemonic) {
        alert('Please generate a Word list first');
        return;
    }
  
    const hdNode = ethers.utils.HDNode.fromMnemonic(mnemonic);
    const wallet = hdNode.derivePath(`m/44'/60'/0'/0/${wallets.length}`);
    wallets.push(wallet);
    displayWallets();
});

function displayWallets() {
    const walletList = document.getElementById('wallet-list');
    walletList.innerHTML = '';
    wallets.forEach((wallet, index) => {
        const walletInfo = document.createElement('p');
        walletInfo.textContent = `Wallet ${index + 1}: ${wallet.address}`;
        walletList.appendChild(walletInfo);
    });
}