require("@nomicfoundation/hardhat-toolbox");





task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});



networks: {
  hardhat: {
    forking: {
      url: "https://mainnet.infura.io/v3/ca665adf13d5479a9c21e1da6d5160c0"
    }
  }
}