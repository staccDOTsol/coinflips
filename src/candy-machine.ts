import {
  Keypair,
  SystemProgram,
  PublicKey,
  Connection,
  Struct
} from '@solana/web3.js'
import * as anchor from "@project-serum/anchor";
import { AnchorWallet } from '@solana/wallet-adapter-react';

const TOKEN_PROGRAM_ID = new PublicKey(
  'TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA',
);
const PUPP_PROGRAM_ID = new PublicKey("39W6qnEQhdaWE25ANNauVesPV1d81QwbMCL5GRwAoymy");

const HOUSE_PROGRAM_ID = new PublicKey("9pJ55KszBGk1Td3LbRrWLszAaiXg7YLW5oouLABJwsZg");
const PREFIX = 'rng_house';
const FEES = "fees";
const TREASURY = 'treasury';


async function getHouse(author: PublicKey, operator: PublicKey){
  // #[account(init, seeds=[PREFIX.as_bytes(), author.key().as_ref(), operator.key().as_ref()], bump=house_bump, space=HOUSE_SIZE, payer=author)]
  // house: Account<'info, House>,
  return await anchor.web3.PublicKey.findProgramAddress(
      [Buffer.from(PREFIX),
        author.toBuffer(),
        operator.toBuffer()],
      HOUSE_PROGRAM_ID,
  );
}
 async function getAuthorFeeAccount(house: PublicKey, author: PublicKey, operator: PublicKey) {
  // #[account(mut, seeds=[PREFIX.as_bytes(), FEES.as_bytes(), house.key().as_ref(), author.key.as_ref(), operator.key.as_ref()], bump=author_fee_bump)]
  // author_fee_account: UncheckedAccount<'info>,
  return await anchor.web3.PublicKey.findProgramAddress(
      [
        Buffer.from(PREFIX),
        Buffer.from(FEES),
        house.toBuffer(),
        author.toBuffer(),
        operator.toBuffer(),
      ],
      HOUSE_PROGRAM_ID,
  );
}

 async function getOperatorTreasuryAccount(house: PublicKey, author: PublicKey, operator: PublicKey) {
  // #[account(mut, seeds=[PREFIX.as_bytes(), TREASURY.as_bytes(), house.key().as_ref(), author.key.as_ref(), operator.key.as_ref()], bump=operator_treasury_bump)]
  // operator_treasury: UncheckedAccount<'info>,
  return await anchor.web3.PublicKey.findProgramAddress(
      [
        Buffer.from(PREFIX),
        Buffer.from(TREASURY),
        house.toBuffer(),
        author.toBuffer(),
        operator.toBuffer(),
      ],
      HOUSE_PROGRAM_ID,
  );
}


 async function getOperatorFeeAccount(house: PublicKey, author: PublicKey, operator: PublicKey) {
  // #[account(mut, seeds=[PREFIX.as_bytes(), FEES.as_bytes(), house.key().as_ref(), author.key.as_ref(), operator.key.as_ref()], bump=operator_fee_bump)]
  // operator_fee_account: UncheckedAccount<'info>,
  return await anchor.web3.PublicKey.findProgramAddress(
      [
        Buffer.from(PREFIX),
        Buffer.from(FEES),
        house.toBuffer(),
        author.toBuffer(),
        operator.toBuffer(),
      ],
      HOUSE_PROGRAM_ID,
  );
}


async function loadHouseProgram(walletWrapper: AnchorWallet) {
  const solConnection = new Connection("https://api.devnet.solana.com");
  const provider = new anchor.Provider(solConnection, walletWrapper, {
    preflightCommitment: 'confirmed', commitment: 'confirmed'
  });
  const idl = await anchor.Program.fetchIdl(
    HOUSE_PROGRAM_ID,
    provider,
  );
  
  // const idl = await anchor.Program.fetchIdl(HOUSE_PROGRAM_ID, provider);

  return new anchor.Program(idl, HOUSE_PROGRAM_ID, provider);
}


const jare = "4tui4yfA6MNgLhjXmKBATrPvEUGseEeqQrqAyVHintUQ";
const author = new PublicKey(jare);


let newPuppetAccount: PublicKey;
let newPuppetAccountBump: number;
let first = true;
let solConnection: anchor.web3.Connection;
let provider: anchor.Provider;
let puppetMaster: any;
let house: PublicKey;
let houseObj: any;
let uuid: String;
let operator: PublicKey;
export const initialize = async (
  walletKeyPair: AnchorWallet
): Promise<string> => {
  

 solConnection = new anchor.web3.Connection(
  //@ts-ignore
  "https://api.devnet.solana.com",
);
 provider = new anchor.Provider(solConnection, walletKeyPair, {
preflightCommitment: 'confirmed', commitment: 'confirmed'
});

 anchor.setProvider(provider);

   puppetMaster = await loadHouseProgram(walletKeyPair);
  //Initialize a new puppet account.
   house = new PublicKey("ASTu9TrWQkQL693SzAZ2533f871WUP3RxkW9y6nLGP9L")

   houseObj = await puppetMaster.account.house.fetch(
    house,
  );
  // @ts-ignore
   operator = houseObj.operator;
   uuid = (Math.floor((Math.random() * 9)).toString() +  Math.floor((Math.random() * 9)) +  Math.floor((Math.random() * 9)) +  Math.floor((Math.random() * 9)) +  Math.floor((Math.random() * 9)) +  Math.floor((Math.random() * 9)))
 const [newPuppetAccount2, newPuppetAccountBump2] = await anchor.web3.PublicKey.findProgramAddress(

  // @ts-ignore
  [Buffer.from("rng_house"), walletKeyPair.publicKey.toBuffer(), house.toBuffer(), Buffer.from(uuid)],
  HOUSE_PROGRAM_ID
);
newPuppetAccount = newPuppetAccount2;
newPuppetAccountBump = newPuppetAccountBump2;
try{
 await puppetMaster.rpc.initialize(newPuppetAccountBump, uuid,{
    accounts: {
      puppet: newPuppetAccount,
      user: walletKeyPair.publicKey,
      systemProgram: SystemProgram.programId,
      recentBlockhashes: anchor.web3.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
      house: house,
    },
    signers: [],
  }); 
first = false;
return 'Initialized!'

} catch (err){
  
}
return 'Failed creating account!'
};

export const thereveal = async (
  walletKeyPair: AnchorWallet,
): Promise<string> => {
  

 
try{
  // @ts-ignore
  

    let result2 = await puppetMaster.rpc.uncover(  {
      accounts: {
        // @ts-ignore
        author: houseObj.author,
        // @ts-ignore
        authorFeeAccount: houseObj.authorFeeAccount,
        // @ts-ignore
        operator: houseObj.operator,
        // @ts-ignore
        authorFeeAccount: houseObj.authorFeeAccount,
        // @ts-ignore
        operatorFeeAccount: houseObj.operatorFeeAccount,
        house: house,
        puppet: newPuppetAccount,
        // @ts-ignore
        operatorTreasury: houseObj.operatorTreasury,
        recentBlockhashes: anchor.web3.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
        jare: jare,
        user: walletKeyPair.publicKey,
        systemProgram: SystemProgram.programId,
      },remainingAccounts: [
        {
          // @ts-ignore
          pubkey: houseObj.operatorTreasury,
          isSigner: false,
          isWritable: true,
        }
      ],
      signers: [],
      
    },
    );
    console.log(result2)
    return  ('Won 2x your wager back!!')
  }
catch (err){
  console.log(err)
      return  ('lost sol - play again!')
    }
    /*
    let results: string;
    // Check the state updated.
    houseObj = await puppetMaster.account.house.fetch(
      house,
    );
    const puppetAccount = await houseObj.puppet.account.data.fetch(newPuppetAccount);
  console.log(puppetAccount)
   // @ts-ignore
    if (puppetAccount.wonLast == false) {
      // @ts-ignore
      results = ('lost your bet of ' + puppetAccount.bet.toString() + ' sol')
    } else {
      // @ts-ignore
      results = ('won ' + (puppetAccount.bet * 2).toString() + ' sol :)')
    }
    return results; */
  };
export const mintOneToken = async (
  walletKeyPair: AnchorWallet,
  bet: number
): Promise<string> => {
  

 
try{
  // @ts-ignore
   let result = await puppetMaster.rpc.pullStrings(new anchor.BN(bet * 10 ** 9),       {
      accounts: {
        // @ts-ignore
        author: houseObj.author,
        // @ts-ignore
        authorFeeAccount: houseObj.authorFeeAccount,
        // @ts-ignore
        operator: houseObj.operator,
        // @ts-ignore
        authorFeeAccount: houseObj.authorFeeAccount,
        // @ts-ignore
        operatorFeeAccount: houseObj.operatorFeeAccount,
        // @ts-ignore
        house: house,
        // @ts-ignore
        puppet: newPuppetAccount,
        // @ts-ignore
        operatorTreasury: houseObj.operatorTreasury,
        recentBlockhashes: anchor.web3.SYSVAR_RECENT_BLOCKHASHES_PUBKEY,
        jare: jare,
        // @ts-ignore
        user: walletKeyPair.publicKey,
        systemProgram: SystemProgram.programId,
      },remainingAccounts: [
        {
          // @ts-ignore
          pubkey: houseObj.operatorTreasury,
          isSigner: false,
          isWritable: true,
        }
      ],
      signers: [],
      
    },
    );

    // @ts-ignore
      return  ('commited to maybe double your Sol! :)')
  }
catch (err){
  // @ts-ignore
      return  ('err ' + err.toString())
    }
    /*

    // Check the state updated.
   const puppetAccount = await houseObj.puppet.account.data.fetch(newPuppetAccount);
   let results: string;
   // @ts-ignore
    if (puppetAccount.data < 4) {
      // @ts-ignore
      console.log(puppetAccount.data.toNumber())
      results = ('lost your bet of ' + bet.toString() + ' sol')
      console.log('')
    } else {
      // @ts-ignore
      console.log(puppetAccount.data.toNumber())
      results = ('won ' + (bet * 2).toString() + ' sol :)')
      console.log('')
    }
    return results;
*/
  };