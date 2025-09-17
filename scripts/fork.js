const { ethers } = require("hardhat");

async function transfer() {
    const [sender] = await ethers.getSigners();
    const recipientAddress = "0x05421c943Db220a71531fD76E0267813a15cAB05"; 
    const amount = BigInt("1000000000000000000");
    const tx = await sender.sendTransaction({
        to: recipientAddress,
        value: amount,
    });
    await tx.wait();
    console.log("转账完成！");
}

(async () => {
    // 冒充所有者地址
  await hre.network.provider.request({
    method: "hardhat_impersonateAccount",
    params: ["0x05421c943Db220a71531fD76E0267813a15cAB05"]
  });

  // 让签名者冒充所有者地址
  const ownerSigner = await ethers.getSigner("0x05421c943Db220a71531fD76E0267813a15cAB05");

  // 获取部署的合约实例
  const contractAddress = "0x1BC902734C51711301aee8D78a37CdAbF4123c57";
  
  // 作者账户余额不足才需要这样，如果你够的话可以不用管这步骤
  await transfer()

  const Fork = await ethers.getContractFactory("Fork");
  const fork = await Fork.attach(contractAddress);

  // 使用所有者签名者连接到已部署的合约
  const connectedContract = fork.connect(ownerSigner);

  // 函数调用
  const result = await connectedContract.test(1, 21111);

  console.log('执行成功！')
})()