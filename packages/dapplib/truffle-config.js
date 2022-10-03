require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture cart forget security trap birth pizza milk gesture casual fortune gentle'; 
let testAccounts = [
"0x612349f8c9acfdcb86a88658e89302e41569383fb2bc72df4758944b54433ddd",
"0xc10643025c5d6476521a4baeea00a46e74ee13dbe418b9dd6c81ef8d45bf5aba",
"0x573316aefe260e8a389a62a4e25f678df0ec672c9675baa5d9aeeb3e374747b1",
"0xd5570548ab6ec1266ad649d956a515bb79d16e86f88aa17b147ad11349a29747",
"0x81cd20a194eb39adf227c148b12c396aba9219bc98730b351f9cc95f35c95b73",
"0x0d646ce5323e77e0a777d18f96a33d563fad4b6849e2ec3f2afe9a2a1483b094",
"0x9feb2e225878292504f4ede30c71f6b92b54dbc1469e42be87e39a03897ae803",
"0xb84e59a72321f96238e4bb72e72a66dfb0119ee52451b6c24819e0acc7a1841a",
"0x3a2bc27a302391ac9436539f4e8e6868855c5c8be385d62d495ba6385f71135a",
"0x1b4481ebbdd1fd92b6d8a3089cff15815563f4d0fcdeccf0a5754b120e23ab16"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

