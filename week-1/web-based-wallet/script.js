function generate()
{
    const result = bip39.generateMnemonic();
    const a = document.getElementById('wordphrase');
    a.innerHTML = result;
}
generate();