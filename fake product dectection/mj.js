// Connect to Ethereum network using Web3.js
const web3 = new Web3(Web3.givenProvider);

// Contract ABI (Application Binary Interface)
const contractABI = [[
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_manufactuerID",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_productName",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_productSN",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_productBrand",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "_productPrice",
				"type": "uint256"
			}
		],
		"name": "addProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_manufacturerId",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_sellerName",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_sellerBrand",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_sellerCode",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "_sellerNum",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "_sellerManager",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_sellerAddress",
				"type": "bytes32"
			}
		],
		"name": "addSeller",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_productSN",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_sellerCode",
				"type": "bytes32"
			}
		],
		"name": "manufacturerSellProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_productSN",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_consumerCode",
				"type": "bytes32"
			}
		],
		"name": "sellerSellProduct",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_consumerCode",
				"type": "bytes32"
			}
		],
		"name": "getPurchaseHistory",
		"outputs": [
			{
				"internalType": "bytes32[]",
				"name": "",
				"type": "bytes32[]"
			},
			{
				"internalType": "bytes32[]",
				"name": "",
				"type": "bytes32[]"
			},
			{
				"internalType": "bytes32[]",
				"name": "",
				"type": "bytes32[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "productItems",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "productId",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "productSN",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "productName",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "productBrand",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "productPrice",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "productStatus",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "productMap",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "productsForSale",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "productsManufactured",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "productsSold",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "productsWithConsumer",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "productsWithSeller",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_sellerCode",
				"type": "bytes32"
			}
		],
		"name": "queryProductsList",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes32[]",
				"name": "",
				"type": "bytes32[]"
			},
			{
				"internalType": "bytes32[]",
				"name": "",
				"type": "bytes32[]"
			},
			{
				"internalType": "bytes32[]",
				"name": "",
				"type": "bytes32[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes32[]",
				"name": "",
				"type": "bytes32[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_manufacturerCode",
				"type": "bytes32"
			}
		],
		"name": "querySellersList",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes32[]",
				"name": "",
				"type": "bytes32[]"
			},
			{
				"internalType": "bytes32[]",
				"name": "",
				"type": "bytes32[]"
			},
			{
				"internalType": "bytes32[]",
				"name": "",
				"type": "bytes32[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes32[]",
				"name": "",
				"type": "bytes32[]"
			},
			{
				"internalType": "bytes32[]",
				"name": "",
				"type": "bytes32[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "sellers",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "sellerId",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "sellerName",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "sellerBrand",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "sellerCode",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "sellerNum",
				"type": "uint256"
			},
			{
				"internalType": "bytes32",
				"name": "sellerManager",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "sellerAddress",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "sellersWithManufacturer",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_productSN",
				"type": "bytes32"
			},
			{
				"internalType": "bytes32",
				"name": "_consumerCode",
				"type": "bytes32"
			}
		],
		"name": "verifyProduct",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "viewProductItems",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes32[]",
				"name": "",
				"type": "bytes32[]"
			},
			{
				"internalType": "bytes32[]",
				"name": "",
				"type": "bytes32[]"
			},
			{
				"internalType": "bytes32[]",
				"name": "",
				"type": "bytes32[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes32[]",
				"name": "",
				"type": "bytes32[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "viewSellers",
		"outputs": [
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes32[]",
				"name": "",
				"type": "bytes32[]"
			},
			{
				"internalType": "bytes32[]",
				"name": "",
				"type": "bytes32[]"
			},
			{
				"internalType": "bytes32[]",
				"name": "",
				"type": "bytes32[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			},
			{
				"internalType": "bytes32[]",
				"name": "",
				"type": "bytes32[]"
			},
			{
				"internalType": "bytes32[]",
				"name": "",
				"type": "bytes32[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]]; // Your contract's ABI

// Contract address on the network
const contractAddress = '0xd9145CCE52D386f254917e481eB44e9943F39138'; // Replace with your contract's address

// Contract instance
const contract = new web3.eth.Contract(contractABI, contractAddress);

// Example function to add a seller
async function addSeller() {
    const manufacturerId = 'MANUFACTURER_ID';
    const sellerName = 'Seller Name';
    const sellerBrand = 'Seller Brand';
    const sellerCode = 'Seller Code';
    const sellerNum = 12345; // Seller number
    const sellerManager = 'Seller Manager';
    const sellerAddress = 'Seller Address';

    await contract.methods.addSeller(manufacturerId, sellerName, sellerBrand, sellerCode, sellerNum, sellerManager, sellerAddress).send({ from: ethereum.selectedAddress });
}

// Example function to add a product
async function addProduct() {
    const manufacturerId = 'MANUFACTURER_ID';
    const productName = 'Product Name';
    const productSN = 'Product Serial Number';
    const productBrand = 'Product Brand';
    const productPrice = 100; // Product price in Wei

    await contract.methods.addProduct(manufacturerId, productName, productSN, productBrand, productPrice).send({ from: ethereum.selectedAddress });
}

// Example function to view sellers
async function viewSellers() {
    const result = await contract.methods.viewSellers().call();
    console.log(result); // Log the result to the console or update HTML with the result
}

// Example function to view product items
async function viewProductItems() {
    const result = await contract.methods.viewProductItems().call();
    console.log(result); // Log the result to the console or update HTML with the result
}

// Add more functions as needed for other contract interactions