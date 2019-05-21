# Research Wallet Web Page
This is a landing page to show the balance of the wallet designated to raise funds to scientific researches in Brazil.
It is a simple javascript that takes the value from a text file that serves as a cache. this file is updated every 5 minutes from a cron job command.
```
*/5 * * * * /<path>/walletp.sh
```
The script should be outside the document root.
