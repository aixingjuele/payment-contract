 

web3.eth.getAccounts().then(accounts => {
    const sender = accounts[1];

    //收款地址
    const predicted = "0xdFAE9D47558823321Bf9E8783B22b21aB0D4eEE5";
    
    return web3.eth.sendTransaction({
        from: sender,
        to: predicted,
        value: web3.utils.toWei("3", "ether")
    });
}).then(receipt => {
    console.log("Transfer successful", receipt);
}).catch(err => {
    console.error(err);
});
