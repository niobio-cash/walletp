#!/bin/bash
curl -X POST -i -H "Accept: application/json" -u <user>:<password> -d '{"params": {}, "jsonrpc": "2.0", "method": "getbalance"}' http://<host:port> | grep result | jq -r '.result.available_balance' | awk '{ printf("%.8f", $1/100000000) }' > /<document_root>/balance.txt
