require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half arena october traffic walnut raw remember upset gesture battle flush gauge'; 
let testAccounts = [
"0x11a8883b2e4ed9cee1b528bddbdb9ebe98147cc49968d5058dd5baac5f61ef78",
"0x9db88a176a02d520e54b015225ddc8860c4fdaa85601e85d3de0cb11bdd655d8",
"0x3648f484065ef2e180a5f71b5ba326c4dcf28c896d044980f3c8f870b54a8917",
"0xa26e91a95d651f363a442d68cee4a346ea30c46364c81a2b62a341cd2e8a641d",
"0xb57416e61f5f53da874e3c3df22d8bb7ace586d5901286176a8f2d0737269a97",
"0x024cfef4387b80deaed47117a49230db95b9b77661940875f54acb58bc3a4246",
"0xca4866697144951f683cf019e5392365918878380cdd4b200c5b25590c104bfd",
"0xe2f90326918ce4c6f136938d49c12da8e6081cb37809265b3940eda26c285915",
"0x409b311d6b5b5e1d921380acbc3550d635e24d6afce93ac9269ae2676b7ebef5",
"0x49b70accb4448e52ccf0cdb39d61da1cd9a998f850fc6fd3a14fb9d66d542f72"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

