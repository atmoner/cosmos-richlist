/**************************
*
*  Developed by atmon3r                      
*  2014 - Free to use!  
*
**************************/

import { Tendermint37Client } from "@cosmjs/tendermint-rpc";
import { createProtobufRpcClient, QueryClient, StargateClient } from "@cosmjs/stargate";
import Long from "long";
import fs from 'fs'

import * as bank from "cosmjs-types/cosmos/bank/v1beta1/query.js";
import cosmosConfig from "./cosmos.config.js";

async function searchLargestAccounts(chain) {
  const rpcUrl = chain.rpcURL; 
  const client = await Tendermint37Client.connect(rpcUrl);
  const queryClient = new QueryClient(client);
  const rpcClient = createProtobufRpcClient(queryClient);
  const queryAuth = new bank.QueryClientImpl(rpcClient);

  let netxPaginateKey = '';
  let totalPaginate = 0;
  let finalAccounts = [];
  for (let i = 0; i < 20; i++) {
    const response = await queryAuth.DenomOwners({ denom: chain.coinLookup.chainDenom, pagination: {
      countTotal: true,
      key: netxPaginateKey,
      offset: Long.fromNumber(0, true),
      limit: Long.fromNumber(100000, true),
      reverse: false,
    }});
    netxPaginateKey = response.pagination.nextKey;
    totalPaginate++

    for (let j = 0; j < response.denomOwners.length; j++) {
      finalAccounts.push(response.denomOwners[j]);
    } 
  }
  console.log('Total Paginate: ', totalPaginate);
  console.log('Total account: ', finalAccounts.length);

  const accounts = finalAccounts.sort((a, b) => b.balance.amount - a.balance.amount).slice(0, 100);
  console.log(accounts);
  fs.writeFileSync('data/' + chain.slot + ".json", JSON.stringify(accounts, null, 2)) 
}

for (let i = 0; i < cosmosConfig.length; i++) { 
  searchLargestAccounts(cosmosConfig[i]).catch(console.error);
}



